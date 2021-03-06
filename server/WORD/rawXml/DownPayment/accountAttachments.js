const helper = require('../../../HelperMethods/helpermethods')
const util = require('util');

// import { getWord } from '../../../HelperMethods/helpermethods'

module.exports = {
	getAttachment1: function (body) {
		var rText = util.format('Τη με Α.Π. %s/%s Προγραμματική Σύμβαση και ειδικότερα το άρθρο %s “Πόροι – Χρηματοδότηση – Προϋπολογισμός” αυτής.',
		 	body.Contract[0].Protocol[0].Number, body.Contract[0].Protocol[0].Date, body.Account[0].DownpaymentLawArticle)
			
		return '<w:p w:rsidR="00057639" w:rsidRDefault="00262B9D" w:rsidP="00057639">' +
			'<w:pPr>' +
			'<w:numPr>' +
			'<w:ilvl w:val="0"/>' +
			'<w:numId w:val="2"/>' +
			'</w:numPr>' +
			// '<w:tabs>' +
			// '<w:tab w:val="left" w:pos="142"/>' +
			// '<w:tab w:val="left" w:pos="284"/>' +
			// '<w:tab w:val="left" w:pos="6195"/>' +
			// '</w:tabs>' +
			'<w:spacing w:line="276" w:lineRule="auto"/>' +
			'<w:ind w:left="-142" w:hanging="426" />' +
			'<w:jc w:val="both"/>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'</w:rPr>' +
			'</w:pPr>' +
			'<w:r>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'<w:sz w:val="28" />' +
			'<w:szCs w:val="28" />' +
			'</w:rPr>' +
			util.format('<w:t>%s</w:t>', rText) +
			'</w:r>' +
			'</w:p>'
	},
	getAttachment2: function (body) {
		var text = util.format('Τη με αρ. %s/%s Απόφαση του Δημοτικού Συμβουλίου (Α.Δ.Σ.) Αθηναίων με την οποία εγκρίθηκαν: ' +
			'η υπογραφή των όρων, το σχέδιο και τα ανά έτος ποσά της προαναφερθείσας Προγραμματικής Σύμβασης. ',
			body.DecisionBoard[0].Protocol[0].Number, body.DecisionBoard[0].Protocol[0].Date)
		return '<w:p w:rsidR="0067614F" w:rsidRPr="0067614F" w:rsidRDefault="00262B9D" w:rsidP="0067614F">' +
			'<w:pPr>' +
			'<w:numPr>' +
			'<w:ilvl w:val="0"/>' +
			'<w:numId w:val="2"/>' +
			'</w:numPr>' +
			// '<w:tabs>' +
			// '<w:tab w:val="left" w:pos="142"/>' +
			// '<w:tab w:val="left" w:pos="284"/>' +
			// '<w:tab w:val="left" w:pos="6195"/>' +
			// '</w:tabs>' +
			'<w:spacing w:line="276" w:lineRule="auto"/>' +
			'<w:ind w:left="-142" w:hanging="426" />' +
			'<w:jc w:val="both"/>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'</w:rPr>' +
			'</w:pPr>' +
			'<w:r w:rsidRPr="00F871E2">' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'<w:sz w:val="28" />' +
			'<w:szCs w:val="28" />' +
			'</w:rPr>' +
			util.format('<w:t>%s</w:t>', text) +
			'</w:r>' +
			'</w:p>'
	},
	getAttachment3: function (body) {
		var ret = '';
		if (body.DecisionBoard[0].Protocol[1]) {

			var text = util.format('Τη με αρ. %s/%s Α.Δ.Σ. με την οποία διορθώθηκε η ανωτέρω Α.Δ.Σ. “%s”. ',
				body.DecisionBoard[0].Protocol[1].Number, body.DecisionBoard[0].Protocol[1].Date, body.DecisionBoard[0].Protocol[1].Content)

			ret = '<w:p w:rsidR="00840235" w:rsidRPr="00840235" w:rsidRDefault="00262B9D" w:rsidP="0067614F">' +
				'<w:pPr>' +
				'<w:numPr>' +
				'<w:ilvl w:val="0"/>' +
				'<w:numId w:val="2"/>' +
				'</w:numPr>' +
				// '<w:tabs>' +
				// '<w:tab w:val="left" w:pos="142"/>' +
				// '<w:tab w:val="left" w:pos="284"/>' +
				// '<w:tab w:val="left" w:pos="6195"/>' +
				// '</w:tabs>' +
				'<w:spacing w:line="276" w:lineRule="auto"/>' +
				'<w:ind w:left="-142" w:hanging="426" />' +
				'<w:jc w:val="both"/>' +
				'<w:rPr>' +
				'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
				'</w:rPr>' +
				'</w:pPr>' +
				'<w:r w:rsidRPr="00840235">' +
				'<w:rPr>' +
				'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
				'<w:sz w:val="28" />' +
				'<w:szCs w:val="28" />' +
				'</w:rPr>' +
				util.format('<w:t>%s</w:t>', text) +
				'</w:r>' +
				'</w:p>'
		}

		return ret;
	},
	getAttachment4: function (body) {
		var text = util.format('Τη με Α.Π. %s/%s Απόφαση του Συντονιστή της Αποκεντρωμένης Διοίκησης Αττικής για τη νόμιμη λήψη της %s/%s Α.Δ.Σ.',
			body.DecisionSADA[0].Protocol[0].Number, body.DecisionSADA[0].Protocol[0].Date,
			body.DecisionBoard[0].Protocol[0].Number, body.DecisionBoard[0].Protocol[0].Date);
		return '<w:p w:rsidR="00057639" w:rsidRPr="00840235" w:rsidRDefault="00262B9D" w:rsidP="0067614F">' +
			'<w:pPr>' +
			'<w:numPr>' +
			'<w:ilvl w:val="0"/>' +
			'<w:numId w:val="2"/>' +
			'</w:numPr>' +
			// '<w:tabs>' +
			// '<w:tab w:val="left" w:pos="142"/>' +
			// '<w:tab w:val="left" w:pos="284"/>' +
			// '<w:tab w:val="left" w:pos="6195"/>' +
			// '</w:tabs>' +
			'<w:spacing w:line="276" w:lineRule="auto"/>' +
			'<w:ind w:left="-142" w:hanging="426" />' +
			'<w:jc w:val="both"/>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'</w:rPr>' +
			'</w:pPr>' +
			'<w:r w:rsidRPr="00840235">' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'<w:sz w:val="28" />' +
			'<w:szCs w:val="28" />' +
			'</w:rPr>' +
			util.format('<w:t>%s</w:t>', text) +
			'</w:r>' +
			'</w:p>'
	},
	getAttachment5: function (body) {
		var ret = '';
		if (body.DecisionBoard[0].Protocol[1]) {
			var text = util.format('Tη με Α.Π. %s/%s Απόφαση του Συντονιστή της Αποκεντρωμένης Διοίκησης Αττικής για τη νόμιμη λήψη της %s/%s Α.Δ.Σ.',
				body.DecisionSADA[0].Protocol[1].Number, body.DecisionSADA[0].Protocol[1].Date,
				body.DecisionBoard[0].Protocol[1].Number, body.DecisionBoard[0].Protocol[1].Date)
			ret = '<w:p w:rsidR="00057639" w:rsidRPr="00F871E2" w:rsidRDefault="00262B9D" w:rsidP="004D48B8">' +
				'<w:pPr>' +
				'<w:numPr>' +
				'<w:ilvl w:val="0"/>' +
				'<w:numId w:val="2"/>' +
				'</w:numPr>' +
				// '<w:tabs>' +
				// '<w:tab w:val="left" w:pos="142"/>' +
				// '<w:tab w:val="left" w:pos="6195"/>' +
				// '</w:tabs>' +
				'<w:spacing w:line="276" w:lineRule="auto"/>' +
				'<w:ind w:left="-142" w:hanging="426" />' +
				'<w:jc w:val="both"/>' +
				'<w:rPr>' +
				'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
				'</w:rPr>' +
				'</w:pPr>' +
				'<w:r>' +
				'<w:rPr>' +
				'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
				'<w:sz w:val="28" />' +
				'<w:szCs w:val="28" />' +
				'</w:rPr>' +
				util.format('<w:t>%s</w:t>', text) +
				'</w:r>' +
				'</w:p>'
		}

		return ret;
	},
	getAttachment6: function (body) {
		var ret = '';
		var text = util.format('Τη με αρ. %s/%s Πράξη του %s Κλιμακίου του Ελεγκτικού Συνεδρίου περί μη κωλύματος της υπογραφής του σχεδίου της εν θέματι Προγραμματικής Σύμβασης.',
			body.CourtOfAuditors[0].Action[0].Number,
			body.CourtOfAuditors[0].Action[0].Year,
			body.CourtOfAuditors[0].Scale[0].Letter)

		if (body.CourtOfAuditors[0].HasCourtOfAuditors === true) {
			ret = '<w:p w:rsidR="00212912" w:rsidRPr="00DB37DE" w:rsidRDefault="00262B9D" w:rsidP="00F871E2">' +
				'<w:pPr>' +
				'<w:numPr>' +
				'<w:ilvl w:val="0"/>' +
				'<w:numId w:val="2"/>' +
				'</w:numPr>' +
				// '<w:tabs>' +
				// '<w:tab w:val="left" w:pos="142"/>' +
				// '<w:tab w:val="left" w:pos="6195"/>' +
				// '</w:tabs>' +
				'<w:spacing w:line="276" w:lineRule="auto"/>' +
				'<w:ind w:left="-142" w:hanging="426" />' +
				'<w:jc w:val="both"/>' +
				'<w:rPr>' +
				'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
				'</w:rPr>' +
				'</w:pPr>' +
				'<w:r w:rsidRPr="00DB37DE">' +
				'<w:rPr>' +
				'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
				'<w:sz w:val="28" />' +
				'<w:szCs w:val="28" />' +
				'</w:rPr>' +
				util.format('<w:t>%s</w:t>', text) +
				'</w:r>' +
				'</w:p>'
		}

		return ret;
	},
	getAttachment7: function (body) {
		var text = util.format('<w:t>Τη με αρ. %s/%s (Αριθμός ΑΑΥ) με ΕΑΔ %s (Α.Π. %s/%s) και ΑΔΑ %s Απόφαση Ανάληψης Υποχρέωσης</w:t>',
			body.Account[0].AYY[0].Value,
			body.Account[0].AYY[0].Year,
			body.Account[0].AYY[0].EADNumber,
			body.Account[0].AYY[0].ProtocolNumber,
			body.Account[0].AYY[0].ProtocolDate,
			body.Account[0].AYY[0].ADA);
		return '<w:p w:rsidR="00212912" w:rsidRPr="00F871E2" w:rsidRDefault="00262B9D" w:rsidP="00F871E2">' +
			'<w:pPr>' +
			'<w:numPr>' +
			'<w:ilvl w:val="0"/>' +
			'<w:numId w:val="2"/>' +
			'</w:numPr>' +
			// '<w:tabs>' +
			// '<w:tab w:val="left" w:pos="142"/>' +
			// '<w:tab w:val="left" w:pos="6195"/>' +
			// '</w:tabs>' +
			'<w:spacing w:line="276" w:lineRule="auto"/>' +
			'<w:ind w:left="-142" w:hanging="426" />' +
			'<w:jc w:val="both"/>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'</w:rPr>' +
			'</w:pPr>' +
			'<w:r w:rsidRPr="00DB37DE">' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'<w:sz w:val="28" />' +
			'<w:szCs w:val="28" />' +
			'</w:rPr>' +
			util.format('<w:t>%s</w:t>', text) +
			'</w:r>' +
			'</w:p>'
	},
	getAttachment8: function (body) {
		var text = util.format('Το με Α.Π. %s/%s διαβιβαστικό έγγραφο, με το οποίο μας διαβιβάστηκε το υπ’ αριθ. %s/%s Τιμολόγιο της %s στης %s.',
			body.Account[0].Invoice[0].DeliveredDateProtocol[0].Number,
			body.Account[0].Invoice[0].DeliveredDateProtocol[0].Date,
			body.Account[0].Invoice[0].Number,
			body.Account[0].Invoice[0].Date,
			body.Contract[0].Concessionaire[0].Name,
			body.Account[0].Invoice[0].DeliveredDate
			)

		return '<w:p w:rsidR="00F871E2" w:rsidRPr="00F871E2" w:rsidRDefault="00262B9D" w:rsidP="00F871E2">' +
			'<w:pPr>' +
			'<w:numPr>' +
			'<w:ilvl w:val="0"/>' +
			'<w:numId w:val="2"/>' +
			'</w:numPr>' +
			// '<w:tabs>' +
			// '<w:tab w:val="left" w:pos="142"/>' +
			// '<w:tab w:val="left" w:pos="284"/>' +
			// '<w:tab w:val="left" w:pos="6195"/>' +
			// '</w:tabs>' +
			'<w:spacing w:line="276" w:lineRule="auto"/>' +
			'<w:ind w:left="-142" w:hanging="426" />' +
			'<w:jc w:val="both"/>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'</w:rPr>' +
			'</w:pPr>' +
			'<w:r>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'<w:sz w:val="28" />' +
			'<w:szCs w:val="28" />' +
			'</w:rPr>' +
			util.format('<w:t>%s</w:t>', text) +
			'</w:r>' +
			'</w:p>';
	},
	getAttachment9: function (body) {
		var prototypesPhrase = 'πρωτότυπα';
		if (body.PrototypeNumber === '1')
			prototypesPhrase = 'πρωτότυπο'
	
		return '<w:p w:rsidR="00F871E2" w:rsidRPr="00F871E2" w:rsidRDefault="00395F84" w:rsidP="00F871E2">' +
		'<w:pPr>' +
		'<w:numPr>' +
		'<w:ilvl w:val="0"/>' +
		'<w:numId w:val="2"/>' +
		'</w:numPr>' +
		// '<w:tabs>' +
		// '<w:tab w:val="left" w:pos="142"/>' +
		// '<w:tab w:val="left" w:pos="284"/>' +
		// '<w:tab w:val="left" w:pos="6195"/>' +
		// '</w:tabs>' +
		'<w:spacing w:line="276" w:lineRule="auto"/>' +
		'<w:ind w:left="-142" w:hanging="426" />' +
		'<w:jc w:val="both"/>' +
		'<w:rPr>' +
		'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
		'</w:rPr>' +
		'</w:pPr>' +
		'<w:r w:rsidRPr="00395F84">' +
		'<w:rPr>' +
		'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
		'<w:sz w:val="28" />' +
		'<w:szCs w:val="28" />' +
		'</w:rPr>' +
		util.format('<w:t>%s (%s) %s του 1ου Λογαριασμού.</w:t>', helper.getWord(body.PrototypeNumber), body.PrototypeNumber, prototypesPhrase) +
		'</w:r>' +
		'</w:p>';
},
	getAttachment10: function (body) {
		return '<w:p w:rsidR="00212912" w:rsidRPr="00F871E2" w:rsidRDefault="00262B9D" w:rsidP="00F871E2">' +
			'<w:pPr>' +
			'<w:numPr>' +
			'<w:ilvl w:val="0"/>' +
			'<w:numId w:val="2"/>' +
			'</w:numPr>' +
			// '<w:tabs>' +
			// '<w:tab w:val="left" w:pos="142"/>' +
			// '<w:tab w:val="left" w:pos="284"/>' +
			// '<w:tab w:val="left" w:pos="6195"/>' +
			// '</w:tabs>' +
			'<w:spacing w:line="276" w:lineRule="auto"/>' +
			'<w:ind w:left="-142" w:hanging="426" />' +
			'<w:jc w:val="both"/>' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'</w:rPr>' +
			'</w:pPr>' +
			'<w:r w:rsidRPr="00F871E2">' +
			'<w:rPr>' +
			'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
			'<w:sz w:val="28" />' +
			'<w:szCs w:val="28" />' +
			'</w:rPr>' +
			util.format('<w:t>Ενημερωτικός Πίνακας της με Α.Π. %s/%s Προγραμματικής Σύμβασης.</w:t>', body.Contract[0].Protocol[0].Number, body.Contract[0].Protocol[0].Date) +
			'</w:r>' +
			'</w:p>';
	},
getAttachmentsXmlValue: function (body) {
	// var ret = '<w:p w:rsidR="00A44D6F" w:rsidRDefault="00262B9D" w:rsidP="00CB4B70">' +
	// 	'<w:pPr>' +
	// 	'<w:spacing w:before="240"/>' +
	// 	'<w:jc w:val="both"/>' +
	// 	'<w:rPr>' +
	// 	'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
	// 	'<w:b/>' +
	// 	'<w:color w:val="000000"/>' +
	// 	'<w:u w:val="single"/>' +
	// 	'</w:rPr>' +
	// 	'</w:pPr>' +
	// 	'<w:r w:rsidRPr="00812A45">' +
	// 	'<w:rPr>' +
	// 	'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
	// 	'<w:b/>' +
	// 	'<w:color w:val="000000"/>' +
	// 	'<w:u w:val="single"/>' +
	// 	'</w:rPr>' +
	// 	'<w:t>ΣΥΝΗΜΜΕΝΑ ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ</w:t>' +
	// 	'</w:r>' +
	// 	'</w:p>' +
	// 	'<w:p w:rsidR="009344B1" w:rsidRDefault="009344B1" w:rsidP="009344B1">' +
	// 	'<w:pPr>' +
	// 	'<w:spacing w:before="240"/>' +
	// 	'<w:ind w:hanging="567"/>' +
	// 	'<w:jc w:val="both"/>' +
	// 	'<w:rPr>' +
	// 	'<w:rFonts w:ascii="Garamond" w:hAnsi="Garamond"/>' +
	// 	'<w:b/>' +
	// 	'<w:color w:val="000000"/>' +
	// 	'<w:u w:val="single"/>' +
	// 	'</w:rPr>' +
	// 	'</w:pPr>' +
	// 	'</w:p>' +
	return this.getAttachment1(body) +
		this.getAttachment2(body) +
		this.getAttachment3(body) +
		this.getAttachment4(body) +
		this.getAttachment5(body) +
		this.getAttachment6(body) +
		this.getAttachment7(body) +
		this.getAttachment8(body)
}

}