function getpromoted() {
    $.get(xmlFolder + "promoted.xml")
        .success(readpromotedCompleted)
        .error(readpromotedFailed);
}


function readpromotedCompleted(data) {


    // var image, imageText, imgDescription, button, infor, infor1, infor2, infor3;

    var $promoted = $(data).find('promotedType').find('promotedData');
    var $promotedTitles = $(data).find('promotedTitles').text();
    $("#promotedpanelheading").append('<h4 class="heading"><b>' + $promotedTitles + '</b></h4>');

    $promoted.each(function(index, value) {

        var $promotedStatus = $(value);


        var promotedImage = $promotedStatus.find('promotedImage').text();
        var promotedImage = imagesFolder + promotedImage;

        var promotedHeading = $promotedStatus.find('promotedHeading').text();

        var promotedPara = $promotedStatus.find('promotedPara').text();

        // quicklinksImage = $quicklinksStatus.find('quicklinksImage').text();
        // quicklinksPara = $quicklinksStatus.find('quicklinksPara').text();
        // resourcesTitleb = $ResourcesStatus.find('resourcesTitleb').text();

        // resourcesTitlec = $ResourcesStatus.find('resourcesTitlec').text();
        // resourcesTitled = $ResourcesStatus.find('resourcesTitled').text();

        // resourcesTitlee = $ResourcesStatus.find('resourcesTitlee').text();
        // resourcesTitlef = $ResourcesStatus.find('resourcesTitlef').text();




        $("#promoted .panel-body").append('<div class="col-md-12  pad-null promoted-flex">\
                                              <div class="col-md-2 col-sm-2 col-xs-2 promoted-list pad-null ">\
                                       <img src="' + promotedImage + '"  width=30px height=30px/></div>\
                                       <div class="col-md-10 col-sm-10 col-xs-10 pad-null "><h3 class= "quicklinksPara pad-null">' + promotedHeading + '</h3> \
                                       <p class= "quicklinksPara pad-null">' + promotedPara + '</p></div></div>')
    })




}

function readpromotedFailed() {
    var message = "Quick links  Path is Not Found";
    document.write(message);
}