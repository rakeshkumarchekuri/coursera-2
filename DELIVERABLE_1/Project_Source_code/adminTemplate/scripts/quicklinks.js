function getquicklinks() {
    $.get(xmlFolder + "quicklinks.xml")
        .success(readquicklinksCompleted)
        .error(readquicklinksFailed);
}


function readquicklinksCompleted(data) {


    // var image, imageText, imgDescription, button, infor, infor1, infor2, infor3;

    var $quicklinks = $(data).find('quicklinksType').find('quicklinksData');
    var $quicklinksTitles = $(data).find('quicklinksTitles').text();
    $("#quicklinkspanelheading").append('<h4 class="heading"><b>' + $quicklinksTitles + '</b></h4>');

    $quicklinks.each(function(index, value) {

        var $quicklinksStatus = $(value);


        var quicklinksImage = $quicklinksStatus.find('quicklinksImage').text();
        var quicklinksImage = imagesFolder + quicklinksImage;

        var quicklinksPara = $quicklinksStatus.find('quicklinksPara').text();

        // quicklinksImage = $quicklinksStatus.find('quicklinksImage').text();
        // quicklinksPara = $quicklinksStatus.find('quicklinksPara').text();
        // resourcesTitleb = $ResourcesStatus.find('resourcesTitleb').text();

        // resourcesTitlec = $ResourcesStatus.find('resourcesTitlec').text();
        // resourcesTitled = $ResourcesStatus.find('resourcesTitled').text();

        // resourcesTitlee = $ResourcesStatus.find('resourcesTitlee').text();
        // resourcesTitlef = $ResourcesStatus.find('resourcesTitlef').text();




        $("#quicklinks .panel-body").append('<div class="col-md-12  pad-null">\
                                             <div class="col-md-12  pad-null quicklinks-flex">\
                                             <div class="col-md-2 col-sm-2 col-xs-2 quicklinksimage pad-null">\
                                       <img src="' + quicklinksImage + '"  width=27px height=30px/></div>\
                                       <div class="col-md-10 col-sm-10 col-xs-10 pad-null"><h4 class= "quicklinksPara">' + quicklinksPara + '</h4></div></div> </div>')
    })




}

function readquicklinksFailed() {
    var message = "Quick links  Path is Not Found";
    document.write(message);
}