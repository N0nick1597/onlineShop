$(document).ready(function(){
    var lang;
var arrLang = {
    'en': {
        'spare parts': 'SPARE PARTS',
        'aftermarket': 'AFTERMARKET PARTS',
        'howto': 'HOW TO',
        'about': 'ABOUT',
        'gallery': 'OUR TUNED CARS',
        'signin': 'SIGN IN',
        'signup': 'SIGN UP',
        'modalsignin': "Sign In",
        'modalsignup': "Create Account",
        'username': 'Username',
        'password': 'Password',
        'email': "Email",
        'p': "Here you can find the most rare subaru parts!",
        'h1': "Welcome to the best used spare and aftermarked parts store!",
        'reporth1': "Report your problem here",
        'reporth2': "Click on the report button to begin submitting a report form",
        'reportbtn': 'REPORT',
        'listof': "LIST OF GOODS",
        'shock': 'SHOCK ABSORBERS',
        'turbo': 'TURBO',
        'coil': 'COIL PACK',
        'wrxcoil': 'WRX COIL PACKS',
        'front': 'FRONT BUMPER',
        'break': 'BREAK PADS',
        'breakcal': 'BREAK CALIPERS',
        'discs': 'FRONT BREAK DISC',
        'tie': 'TIE ROD ASSEMBLIES',
        'springs': 'SHOCK ABSORBER SPRINGS',
        'exhaust': 'EXHAUST SYSTEM',
        'kosei': 'KOSEI WHEELS',
        'bbs': 'BBS WHEELS',
        'mini': 'SMALL SPOILER',
        'big': 'BIG SPOILER',
        'rack': 'ROOF RACK',
        'coils': 'AIR COILOVERS',
        'recaro': 'RECARO SEATS',
        'gouges': 'GOUGES DASH',
        'cluctch': 'CLUCTCH KIT',
        'air': 'SPORT AIR FILTER',
        'cage': 'ROOL CAGE',
        'make': "Make",
        'model': "Model",
        'engine': "Engine",
        'power': "Power output",
        'tablecaption': "Table of cars",
        'create_design': "Create Design",
        'signup_label': "I agree with",
        'signup_terms': "terms and conditions",
        'report_title': "Fill a report",
        'submit': "Submit",
        'subject': "Subject",
        'message': "Your message",
        'reply_check': "Receive email as soon as you get a reply",
        'languages' : "Languages",
        'label_email' : "Enter your email adress",
        'label_password' : "Enter your password",
        'label_subject' : "Enter the subject",
        'email_help' : "We'll never share your email with anyone else.",
        'invalid_email':"Please enter a valid email address",
        'invalid_password' : "Please enter a password",
        'invalid_subject' : "Subject is required",
        'invalid_message' : "Message field is required",
        'motorcycle_list' : "List of Motorcycles",
        'plane_list' : "List of Planes",
        'car_list' : "List of Cars",
        'footpage' : "PAGES",
        'short' : "SHORT HISTORY",
        'contact' : "CONTACTS"
    },
    'lt': {
        'spare parts': 'ATSARGIN??S DALYS',
        'aftermarket': 'ANTRIN?? RINKA',
        'howto': 'PAGALBA JUMS :)',
        'about': 'APIE',
        'gallery': 'M??S?? MODIFIKUOTOS MA??INOS',
        'h1': 'Sveiki Atvyk?? Geriausi?? ??rot?? Apygardoje!',
        'signin': 'PRISIJUNGTI',
        'signup': 'U??SIREGISTRUOTI',
        'username': 'Prisijungimo vardas',
        'password': 'Slapta??odis',
        'email': "Elektroninis pa??tas",
        'modalsignin': 'Prisijungti',
        'modalsignup': 'Susikurti paskyr??',
        'p': "??ia Galite Rasti Net Pa??ias Re??iausias Dalis!",
        'p1': "Netgi titanines galvos tarpines!",
        'reporth1': "Ra??ykite skund?? ??ia",
        'reporth2': "Paspauskite ant prane??ti mygtuko, kad prad??tum??te ra??yti skund??",
        'reportbtn': "PRANE??TI",
        'listof': "PREKI?? S??RA??AS",
        'shock': "AMORTIZATORIAI",
        'turbo': 'TURBINA',
        'coil': 'DEGIMO RIT??',
        'wrxcoil': 'WRX DEGIMO RIT??S',
        'front': 'PRIEKINIS BUFERIS',
        'break': 'STABD??I?? KALAD??S',
        'breakcal': 'STABD??I?? SUPORTAS',
        'discs': 'STABD??I?? DISKAI',
        'tie': 'VAIRO TRAUK??S',
        'springs': 'AMORTIZATORI?? SPYRUOKL??S',
        'exhaust': 'I??METIMO SISTEMA',
        'kosei': 'KOSEI RATAI',
        'bbs': 'BBS RATAI',
        'mini': 'MA??AS V??JO NUKREIPIKLIS :D',
        'big': 'DIDELIS V??JO NUKREIPIKLIS :D',
        'rack': 'STOGO KREP??YS',
        'coils': 'ORINIAI AMORTIZATORIAI',
        'recaro': 'RECARO S??DYN??S',
        'gouges': 'MATUOKLI?? ??STATYMO VIETA',
        'cluctch': 'SANKABOS KOMPLEKTAS',
        'air': 'SPORTINIS ORO FILTRAS',
        'cage': 'LANKAI',
        'make': "Gamintojas",
        'model': "Modelis",
        'engine': "Variklis",
        'power': "Galia",
        'tablecaption': "Automobili?? lentel??",
        'create_design': "Sukurkite dizain??",
        'signup_label': "Sutinku su ",
        'signup_terms': "taisykl??mis ir nuostatomis",
        'report_title': 'U??pildykite prane??im??',
        'submit': "Pateikti",
        'subject': "Prane??imo tema",
        'message': "J??s?? prane??imas",
        'reply_check': "Gauti prane??im??, kai ?? j??s?? form?? bus atsakyta",
        'languages' : "Kalbos",
        'label_email' : "??veskite savo elektronin?? pa??t??",
        'label_password' : "??veskite slapta??od??",
        'label_subject' : "??ra??ykite tem??",
        'email_help' : "J??s?? elektroninio pa??to nedalinsime niekam.",
        'invalid_email':"??veskite egzistuojant?? elektronin?? pa??t??",
        'invalid_password' : "Slapta??odis yra privalomas",
        'invalid_subject' : "Prane??imo tema yra privaloma",
        'invalid_message' : "Prane??imas yra privalomas",
        'motorcycle_list' : "Motocikl?? s??ra??as",
        'plane_list' : "L??ktuv?? s??ra??as",
        'car_list' : "Automobili?? s??ra??as",
        'footpage' : "PUSLAPIAI",
        'short' : "TRUMPA ISTORIJA",
        'contact' : "KONTAKTAI"
    }
};
$(function () {
    $('.dropdown-item').click(function () {
        
        localStorage.setItem(lang, $(this).attr('id'));
        window.location.reload();
    });
    $('.nav-link').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.group h1 span').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.group p span').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#reportmain span').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#reportmain button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#col th').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#mytable caption').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('[data-translate]').each(function (index, element) {
        $(this).attr('placeholder', arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.create button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.form-group label').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-title').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-body button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-footer label').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.form-group small').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#dropdownMenu').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.invalid-feedback').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.list-group button').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#footitems h5').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#footitems ul li p a').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#infobar h5').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('#contacts h5').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.container h2').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.container h3').each(function (index, element) {
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
});

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
});
