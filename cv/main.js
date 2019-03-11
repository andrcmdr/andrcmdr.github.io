var MenuData = [
    {content:'CV by format', header: false, menus: [
        {content:'<i class="fa fa-vcard-o"></i> Contacts (VCard)', header: false, url:'https://commandr.stream/vcard/'},
        {content:'sm_divider'},
        {content:'<i class="fa fa-file-image-o"></i> Web-SVG', header: true},
        {content:'<i class="fa fa-file-text-o"></i> CV in English', url:'https://commandr.stream/cv.en/'},
        {content:'<i class="fa fa-file-text-o"></i> CV in Russian', url:'https://commandr.stream/cv.ru/'},
        {content:'sm_divider'},
        {content:'<i class="fa fa-file-code-o"></i> Web-HTML', header: true},
        {content:'<i class="fa fa-file-text-o"></i> CV in English', url:'https://commandr.stream/cv.en.html'},
        {content:'<i class="fa fa-file-text-o"></i> CV in Russian', url:'https://commandr.stream/cv.ru.html'},
        {content:'sm_divider'},
        {content:'<i class="fa fa-file-pdf-o"></i> PDF', header: true},
        {content:'<i class="fa fa-file-text-o"></i> CV in English', url:'https://commandr.stream/cv.en.pdf'},
        {content:'<i class="fa fa-file-text-o"></i> CV in Russian', url:'https://commandr.stream/cv.ru.pdf'},
    ]},
    {content:'sm_divider'},
    {content:'CV in English', header: false, menus: [
        {content:'<i class="fa fa-file-image-o"></i> Web-SVG', url:'https://commandr.stream/cv.en/'},
        {content:'<i class="fa fa-file-code-o"></i> Web-HTML', url:'https://commandr.stream/cv.en.html'},
        {content:'<i class="fa fa-file-pdf-o"></i> PDF', url:'https://commandr.stream/cv.en.pdf'},
    ]},
    {content:'sm_divider'},
    {content:'CV in Russian', header: false, menus: [
        {content:'<i class="fa fa-file-image-o"></i> Web-SVG', url:'https://commandr.stream/cv.ru/'},
        {content:'<i class="fa fa-file-code-o"></i> Web-HTML', url:'https://commandr.stream/cv.ru.html'},
        {content:'<i class="fa fa-file-pdf-o"></i> PDF', url:'https://commandr.stream/cv.ru.pdf'},
    ]},
    {content:'sm_divider'},
    {content:'Contacts & Profiles', header: false, menus: [
        {content:'<i class="fa fa-vcard-o"></i> VCard', url:'https://commandr.stream/vcard/'},
        {content:'<i class="fa fa-envelope-o"></i> E-mail', url:'mailto:andrew@commandr.stream?subject=From%20Resume-CV'},
        {content:'<i class="fa fa-phone"></i> Mobile #', url:'callto:+996709773399'},
        {content:'<i class="fa fa-key"></i> KeyBase', url:'https://keybase.io/commandr'},
        {content:'<i class="fa fa-key"></i> GNUPG/PGP Public Key', url:'https://commandr.stream/commandr.pubkey.pem.asc'},
        {content:'<i class="fa fa-key"></i> SSH Public Key', url:'https://commandr.stream/commandr.pubkey.ssh'},
        {content:'<i class="fa fa-telegram"></i> Telegram', url:'https://telegram.me/andrcmdr'},
        {content:'<i class="fa fa-paper-plane-o"></i> Technologic Channel', url:'https://telegram.me/technologique'},
        {content:'<i class="fa fa-google-plus"></i> Hangouts', url:'https://commandr.stream/call'},
        {content:'<i class="fa fa-skype"></i> Skype', url:'skype:andy.bednoff?userinfo'},
        {content:'<i class="fa fa-linkedin-square"></i> LinkedIn', url:'https://linkedin.com/in/andrcmdr'},
        {content:'<i class="fa fa-github"></i> GitHub', url:'https://github.com/andrcmdr'},
        {content:'<i class="fa fa-gitlab"></i> GitLab', url:'https://gitlab.com/andrcmdr'},
        {content:'<i class="fa fa-bitbucket"></i> BitBucket', url:'https://bitbucket.org/andrcmdr'},
        {content:'<i class="fa fa-twitter"></i> Twitter', url:'https://twitter.com/andrcmdr'},
    ]},
    {content:'sm_divider'},
    {content:'Payment requisites', header: false, menus: [
        {content:'<div class="form-group"><label for="bitcoin-first"><i class="fa fa-btc"></i> Bitcoin:</label><div class="input-group"><input class="form-control" id="bitcoin-first" placeholder="123y1M7J5xxpiAatRZzpACsJqyeQojJxRy" value="123y1M7J5xxpiAatRZzpACsJqyeQojJxRy" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("bitcoin-first"); }},
        {content:'<div class="form-group"><div class="input-group"><input class="form-control" id="bitcoin-second" placeholder="19C3XAmPbbdHUbog1Kd4uevWmsmrgf16Fh" value="19C3XAmPbbdHUbog1Kd4uevWmsmrgf16Fh" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("bitcoin-second"); }},
        {content:'<div class="form-group"><label for="litecoin">Litecoin:</label><div class="input-group"><input class="form-control" id="litecoin" placeholder="LQBLv5LT84xcsgGsNEumEJkXSxqeLzLyNd" value="LQBLv5LT84xcsgGsNEumEJkXSxqeLzLyNd" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("litecoin"); }},
        {content:'<div class="form-group"><label for="dogecoin">Dogecoin:</label><div class="input-group"><input class="form-control" id="dogecoin" placeholder="DGf4oEEKzyT1QQuDb9KE4Mhawrswe8Bx3i" value="DGf4oEEKzyT1QQuDb9KE4Mhawrswe8Bx3i" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("dogecoin"); }},
        {content:'<div class="form-group"><label for="ethereum">Ethereum:</label><div class="input-group"><input class="form-control" id="ethereum" placeholder="0xeABBcEA63A23649F0Eb4B3D893714d880D05fd8A" value="0xeABBcEA63A23649F0Eb4B3D893714d880D05fd8A" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("ethereum"); }},
        {content:'<div class="form-group"><label for="ethereum-classic">Ethereum Classic:</label><div class="input-group"><input class="form-control" id="ethereum-classic" placeholder="0xeABBcEA63A23649F0Eb4B3D893714d880D05fd8A" value="0xeABBcEA63A23649F0Eb4B3D893714d880D05fd8A" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("ethereum-classic"); }},
        {content:'<div class="form-group"><label for="zcash">ZCash:</label><div class="input-group"><input class="form-control" id="zcash" placeholder="t1gJb5RC9ksTCjGu6yF5V3d32PpMj3LjGX1" value="t1gJb5RC9ksTCjGu6yF5V3d32PpMj3LjGX1" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("zcash"); }},
        {content:'<div class="form-group"><label for="stellar-lumen">Stellar Lumen:</label><div class="input-group"><input class="form-control" id="stellar-lumen" placeholder="GBCH2MR5BX2BNJ756GWBNJNJ4Q4APR4UVYTMOYX4VDWDDM2O4GWKLSRF" value="GBCH2MR5BX2BNJ756GWBNJNJ4Q4APR4UVYTMOYX4VDWDDM2O4GWKLSRF" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("stellar-lumen"); }},
        {content:'<div class="form-group"><label for="ripple">Ripple:</label><div class="input-group"><input class="form-control" id="ripple" placeholder="rKkU65jH4xL3wEUqrzzLds9W3bCEqxqKME" value="rKkU65jH4xL3wEUqrzzLds9W3bCEqxqKME" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("ripple"); }},
        {content:'<div class="form-group"><label for="dash">Dash:</label><div class="input-group"><input class="form-control" id="dash" placeholder="XqjXxBa6W1VdDPV21ptiBURJHEfMWy79EY" value="XqjXxBa6W1VdDPV21ptiBURJHEfMWy79EY" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("dash"); }},
        {content:'<div class="form-group"><label for="bitcoin-cash">Bitcoin Cash:</label><div class="input-group"><input class="form-control" id="bitcoin-cash" placeholder="qzpe36snpykdl60k9gwp8jxs4erq9ek6mypgagknn2" value="qzpe36snpykdl60k9gwp8jxs4erq9ek6mypgagknn2" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("bitcoin-cash"); }},
        {content:'<div class="form-group"><label for="bitcoin-sv">Bitcoin SV:</label><div class="input-group"><input class="form-control" id="bitcoin-sv" placeholder="qzpe36snpykdl60k9gwp8jxs4erq9ek6mypgagknn2" value="qzpe36snpykdl60k9gwp8jxs4erq9ek6mypgagknn2" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("bitcoin-sv"); }},
        {content:'<div class="form-group"><label for="paypal"><i class="fa fa-cc-paypal"></i> PayPal:</label><div class="input-group"><input class="form-control" id="paypal" placeholder="andrcmdr@commandr.stream" value="andrcmdr@commandr.stream" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("paypal"); }},
        {content:'<div class="form-group"><label for="visa"><i class="fa fa-cc-visa"></i> Visa:</label><div class="input-group"><input class="form-control" id="visa" placeholder="Available upon request to andrcmdr@commandr.stream" value="Available upon request to andrcmdr@commandr.stream" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("visa"); }},
        {content:'<div class="form-group"><label for="mastercard"><i class="fa fa-cc-mastercard"></i> MasterCard:</label><div class="input-group"><input class="form-control" id="mastercard" placeholder="Available upon request to andrcmdr@commandr.stream" value="Available upon request to andrcmdr@commandr.stream" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("mastercard"); }},
        {content:'<div class="form-group"><label for="bank-account"><i class="fa fa-university"></i> Bank Transfer (SWIFT, Wire Transfer):</label><div class="input-group"><input class="form-control" id="bank-account" placeholder="Available upon request to andrcmdr@commandr.stream" value="Available upon request to andrcmdr@commandr.stream" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("bank-account"); }},
        {content:'<div class="form-group"><label for="yandex-money">Yandex.Money:</label><div class="input-group"><input class="form-control" id="yandex-money" placeholder="410013855335708" value="410013855335708" type="text" readonly><div class="input-group-btn"><button class="btn btn-success" type="button"><i class="fa fa-clone"></i></button></div></div></div>', callback: function() { getText("yandex-money"); window.document.location.href='https://money.yandex.ru/to/410013855335708'; }},
    ]},
/*  {content:'sm_divider'},
    {content:'<div id="info">Click me!</div>', callback: function() {
        bDialog.alert('Thank you for visiting and being here!', null, {
            backdrop: true,
            messageType: 'success',
            language: 'en',
            animation: true,
            title: false,
        });
    }},
*/
];

$('#SelectMenuEmbed').selectMenu({
        lang : 'en',
        regular : true,
        embed : true,
        search : true,
        position : 'center',
        showField : 'content',
        keyField : 'id',
        title : '<div align="left" class="menu"><b>Andrew Bednoff :: Software Developer CV</b></div>',
        data : MenuData,
});

$('#info').click( function() {
    bDialog.alert('Thank you for visiting and being here!', null, {
        backdrop: true,
        messageType: 'success',
        language: 'en',
        animation: true,
        title: false,
    });
});

function getText(id) {
    var text = document.getElementById(id);
    text.select();
    document.execCommand("copy");
    bDialog.toast('Copied to clipboard: \n' + text.value, {
        language: 'en',
        animation: true,
        backdrop: true,
        messageType: 'success',
        position: 'bottomCenter',
        fullWidth: true,
        width: '1500',
        height: '500',
        title: false,
        closeTime: 3,
        dialogCloseButton: true,
        dialogMaxButton: false,
        scroll: true,
        drag: false,
        closeButton: true,
        show: true,
    });
};

/*
    bDialog.alert('Copied to clipboard: \n' + text.value, null, {
        backdrop: true,
        messageType: 'success',
        language: 'en',
        animation: true,
        title: false,
    });
*/

/*
        info (default)
        warning
        error
        success
        confirm (only work on alert dialog)
//
        topLeft
        topCenter
        topRight
        bottomLeft
        bottomCenter
        bottomRight (default)
*/

