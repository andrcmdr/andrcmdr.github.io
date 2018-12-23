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
    {content:'Contacts', header: false, menus: [
        {content:'<i class="fa fa-vcard-o"></i> VCard', url:'https://commandr.stream/vcard/'},
        {content:'<i class="fa fa-envelope-o"></i> E-mail', url:'mailto:andrew@commandr.stream?subject=From%20Resume-CV'},
        {content:'<i class="fa fa-phone"></i> Mobile #', url:'callto:+996709773399'},
        {content:'<i class="fa fa-telegram"></i> Telegram', url:'https://telegram.me/andrcmdr'},
        {content:'<i class="fa fa-paper-plane-o"></i> Technologic Channel', url:'https://telegram.me/technologique'},
        {content:'<i class="fa fa-google-plus"></i> Hangouts', url:'http://web.commandr.stream/call'},
        {content:'<i class="fa fa-skype"></i> Skype', url:'skype:andy.bednoff?userinfo'},
        {content:'<i class="fa fa-linkedin-square"></i> LinkedIn', url:'https://linkedin.com/in/andrcmdr'},
        {content:'<i class="fa fa-github"></i> GitHub', url:'https://github.com/andrcmdr'},
        {content:'<i class="fa fa-gitlab"></i> GitLab', url:'https://gitlab.com/andrcmdr'},
        {content:'<i class="fa fa-bitbucket"></i> BitBucket', url:'https://bitbucket.org/andrcmdr'},
        {content:'<i class="fa fa-twitter"></i> Twitter', url:'https://twitter.com/andrcmdr'},
    ]},
/*  {content:'sm_divider'},
    {content:'<div id="info">Click me!</div>', callback : function(){
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

$('#info').click(function(){
    bDialog.alert('Thank you for visiting and being here!', null, {
        backdrop: true,
        messageType: 'success',
        language: 'en',
        animation: true,
        title: false,
    });
});

