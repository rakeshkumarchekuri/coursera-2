function getperformance() {
    $.get(xmlFolder + "performance.xml")
        .success(readperformanceCompleted)
        .error(readperformanceFailed);
}


function readperformanceCompleted(data) {


    // var image, imageText, imgDescription, button, infor, infor1, infor2, infor3;

    var $performance = $(data).find('performanceType').find('performanceData');
    var $performanceTitles = $(data).find('performanceTitles').text();
    $("#performancepanelheading").append('<h4 class="heading"><b>' + $performanceTitles + '</b></h4>');

    $performance.each(function(index, value) {

        var $performanceStatus = $(value);


        performanceImagea = $performanceStatus.find('performanceImagea').text();
        performanceImagea = imagesFolder + performanceImagea;
        performanceHeadinga = $performanceStatus.find('performanceHeadinga').text();
        performanceImg = $performanceStatus.find('performanceImg').text();
        performanceImg = imagesFolder + performanceImg;
        // performanceImg = $performanceStatus.find('performanceImg').text();



        performanceImageb = $performanceStatus.find('performanceImageb').text();
        performanceImageb = imagesFolder + performanceImageb;
        performanceHeadingb = $performanceStatus.find('performanceHeadingb').text();

        performanceHeadingc = $performanceStatus.find('performanceHeadingc').text();

        performanceHeadingd = $performanceStatus.find('performanceHeadingd').text();

        performanceHeadinge = $performanceStatus.find('performanceHeadinge').text();

        // var promotedPara = $promotedStatus.find('promotedPara').text();

        // quicklinksImage = $quicklinksStatus.find('quicklinksImage').text();
        // quicklinksPara = $quicklinksStatus.find('quicklinksPara').text();
        // resourcesTitleb = $ResourcesStatus.find('resourcesTitleb').text();

        // resourcesTitlec = $ResourcesStatus.find('resourcesTitlec').text();
        // resourcesTitled = $ResourcesStatus.find('resourcesTitled').text();

        // resourcesTitlee = $ResourcesStatus.find('resourcesTitlee').text();
        // resourcesTitlef = $ResourcesStatus.find('resourcesTitlef').text();




        $("#performance .panel-body").append('<div class="performance-block col-md-12 col-sm-12 col-xs-12">\
                                                <div class="card1 performance-cards col-md-12 col-sm-12 ">\
                                                    <span class="completed goal-content"><i class="fas fa-check-circle"></i>' + performanceHeadinga + '</span>\
                                                    <img src=" ' + performanceImg + '"/>\
                                                </div>\
                                                <div class="card2 performance-cards col-md-12 col-sm-12 ">\
                                                   <span class="completed goal-content"><i class="fas fa-check-circle"></i>' + performanceHeadingb + '</span>\
                                                   <img src=" ' + performanceImg + '"/>\
                                                </div>\
                                                <div class="card3 performance-cards col-md-12 col-sm-12 ">\
                                                    <span class="inProgress goal-content">' + performanceHeadingc + '</span>\
                                                    <img src=" ' + performanceImg + '"/>\
                                                </div>\
                                                <div class="card4 performance-cards col-md-12 col-sm-12">\
                                                    <span class="notYetStarted goal-content">' + performanceHeadingb + '</span>\
                                                    <img src=" ' + performanceImg + '"/>\
                                                </div>\
                                                <div class="card5 performance-cards col-md-12 col-sm-12">\
                                                    <span class="notYetStarted goal-content">' + performanceHeadinge + '</span>\
                                                    <img src=" ' + performanceImg + '"/>\
                                                </div>\
                                            </div>')
    })




}

function readperformanceFailed() {
    var message = "Performance links  Path is Not Found";
    document.write(message);
}