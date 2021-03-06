//curl -d "username=user1&password=user1" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR2YXNpbGFraXMiLCJpYXQiOjE1NjE3MTE1NjksImV4cCI6MTU2MTcyMjM2OX0.pljipFnEaOZJauwZ4IXZb2Zc_Ty238X3CXCrnDvZg8E" -X POST http://localhost:3000/createUser
//admin admin123!@#

const bcryptNodejs = require('bcrypt-nodejs');
const dbConfig = require('../dbConfig')
const jwt = require('jsonwebtoken');
const util = require('util')
const Pool = require('pg').Pool
const pool = new Pool(dbConfig.params)

var helper = require('../../HelperMethods/helpermethods')

const secretKey = process.env.API_SECRET || 'athens_2019';

//#region update
const getUpdateUserSqlQuery = (req, res, next, hash) => {
  var ret = '';

  var id = req.body.Id;
  var username = req.body.Username;
  var roleid = req.body.Role
  var firstname = req.body.Firstname
  var lastname = req.body.Lastname

  if (hash) {
    ret = util.format('UPDATE "Ordering"."User" ' +
      'SET "Username"=%s, "Password"=%s,"Role"=%s,"Firstname"=%s,"Lastname"=%s ' +
      'WHERE "Id"=%s ' +
      'RETURNING * ',
      helper.addQuotes(username),
      helper.addQuotes(hash),
      helper.addQuotes(roleid),
      helper.addQuotes(firstname),
      helper.addQuotes(lastname),
      id)
  } else {
    ret = util.format('UPDATE "Ordering"."User" ' +
      'SET "Username"=%s,"Role"=%s,"Firstname"=%s,"Lastname"=%s ' +
      'WHERE "Id"=%s ' +
      'RETURNING * ',
      helper.addQuotes(username),
      helper.addQuotes(roleid),
      helper.addQuotes(firstname),
      helper.addQuotes(lastname),
      id)
  }

  return ret;
}

const updateUser = (req, res, next) => {

  var password = req.body.Password;
  if (password && password.length > 0) {
    var saltRounds = bcryptNodejs.genSaltSync(1);
    bcryptNodejs.hash(password, saltRounds, null, function (err, hash) {
      if (err)
        res.status(201).json('Failed to create hash: ')
      else 
        updateUserExecute(req, res, next, hash);      
    })
  }
  else
    updateUserExecute(req, res, next, undefined);
}

const updateUserExecute = (req, res, next, hash) => {

  pool.query(getUpdateUserSqlQuery(req, res, next, hash), (error, results) => {
    if (error)
      next(error);
    else
      getUpdatedUser(req, res, next)
  })
}

const getUpdatedUser = (req, res, next) => {
  var selectUserSqlQuery = 'SELECT *, ' +
    '(SELECT json_agg(UserRoles) FROM (SELECT * FROM "Ordering"."UserRoles" as b WHERE b."Id" = u."Role") UserRoles) AS UserRoles ' +
    'FROM "Ordering"."User" as u ' +
    'WHERE u."Id"=' + req.body.Id

  pool.query(selectUserSqlQuery, (error, results) => {
    if (error)
      next(error);
    else {
      results.rows[0].Password = ''
      res.status(200).json(results.rows[0])
    }
  })
}
//#endregion 

const createUser = (req, res, next) => {
  var ret = ''

  const username = req.body.Username;
  const password = req.body.Password;
  const role = req.body.Role;
  const firstname = req.body.Firstname;
  const lastname = req.body.Lastname;

  var saltRounds = bcryptNodejs.genSaltSync(1);
  bcryptNodejs.hash(password, saltRounds, null, function (err, hash) {
    if (err)
      helper.consoleLog(err)
    else {
      var sqlQuery = 'SELECT * ' +
        'FROM "Ordering"."User" as u ' +
        'WHERE u."Username"=' + helper.addQuotes(username)

      pool.query(sqlQuery, (error, results) => {
        if (error)
          next(error);
        else {
          if (results.rows.length === 1)
            response.json({ success: false, message: 'A user with username ' + username + ' already exists!', token: token });
          else {
            var sqlQuery = util.format('INSERT INTO "Ordering"."User"("Username","Password","Role","Firstname","Lastname") ' +
              'VALUES(%s,%s,%s,%s,%s) ' +
              'RETURNING "Ordering"."User"."Id", "Ordering"."User"."Username", "Ordering"."User"."Role","Ordering"."User"."Firstname", "Ordering"."User"."Lastname"',
              helper.addQuotes(username),
              helper.addQuotes(hash),
              helper.addQuotes(role),
              helper.addQuotes(firstname),
              helper.addQuotes(lastname))

            pool.query(sqlQuery, (error, results) => {
              if (error)
                next(error);
              else
                res.status(200).json(results.rows[0]);
            })
          }
        }
      })
    };
  })

  return ret;
}

const deleteUser = (req, res, next) => {

  var id = req.body.Id;
  var sqlQuery = util.format('DELETE FROM "Ordering"."User" WHERE "Id"=%s RETURNING * ', id);

  pool.query(sqlQuery, (error, results) => {
    if (error)
      next(error);
    else {
      res.status(200).json(results.rows[0])
    }
  })
}

const login = (request, response, next) => {
  var ret = ''

  const dbConfig1 = process.env.API_SECRET || 'athens_2019'
  const username = request.query.u
  const password = request.query.p

  var sqlQuery = 'SELECT * ' +
    'FROM "Ordering"."User" as u ' +
    'WHERE u."Username"=' + helper.addQuotes(username)

  pool.query(sqlQuery, (error, results) => {
    if (error) {
      next(error);
    }
    else {
      if (results.rows.length === 1) {
        bcryptNodejs.compare(password, results.rows[0].Password, function (err, res) {
          if (!res) {
            response.status(200).json({ success: false, message: 'Λάθος κωδικός!' });
          } else if (err) {
            response.status(200).json({ success: false, message: 'Έγινε κάποιο σφάλμα κατά την επιβεβαίωση των στοιχείων' });
          }
          else {
            //let token = jwt.sign({ username: username }, secretKey, { expiresIn: (process.env.TOKEN_EXPIRES_IN || '2h') });
            let token = jwt.sign({ username: username }, secretKey, { expiresIn: ('2h') });
            response.json({
              success: true,
              id: results.rows[0].Id,
              username: results.rows[0].Username,
              role: results.rows[0].Role,
              token: token,
              expiresAt: getExpiresAt(token)
            });
          }
        });
      }
      else {
        response.status(200).json({ success: false, message: 'Λάθος όνομα χρήστη!' });
      }
    }
  })

  return ret;
}

const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer '))
    token = token.slice(7, token.length);

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.json({
          tokenIsValid: false,
          message: 'Token is not valid',
          error: err.message,
          expiresAt: err.expiredAt
        });
      } else {
        const d = new Date(0);
        d.setUTCSeconds(decoded.exp);
        next();
      }
    });
  } else {
    return res.json({
      tokenIsValid: false,
      message: 'Auth token is not supplied',
      expiresAt: new Date(decoded.exp)
    });
  }
};

const getExpiresAt = (token) => {
  var expiresAt = new Date(0);

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      expiresAt.setUTCSeconds(decoded.exp);
    });
  }

  return expiresAt.toLocaleString();
};

module.exports = {
  login,
  checkToken,
  createUser,
  updateUser,
  deleteUser
}