function getflipstercontent() {
    $.get(xmlFolder + "flipster.xml").success(getflipsterSuccess).error(getflipsterFailed);

    function getflipsterSuccess(data) {

        var $flipsters = $(data).find('libraryType').find('libraryData');
        $flipsters.each(function(index, value) {
            var $Flipster = $(value);
            var image = $Flipster.find('libraImage').text();
            var imagePath = imagesFolder + image;
            var libraryPara = $Flipster.find('libraryPara').text();
            $(' #flip-items').append('<li data-flip-title="Red">\
                                           <img class="img" src="' + imagePath + '" alt="Los Angeles">\
                                           <p>' + libraryPara + '</p>\
                                     </li>')
        })

        renderFlipster("flipsterDemo");
    }

    function getflipsterFailed() {
        document.write('Xml not found');
        console.log('flipster xml loading failed or path not found');
    }
}

function renderFlipster(identifier) {

    $("#" + identifier + "").flipster({
        style: 'coverflow',
        fadeIn: 400,
        spacing: -0.09,
        pauseOnHover: true,
        start: 'center',
        nav: false,
        buttons: true,
        autoplay: false,
        loop: true,
        scrollwheel: false,
        touch: true,
        click: false
    });
}