function getmytodo() {
    $.get(xmlFolder + "mytodo.xml")
        .success(readmytodoCompleted)
        .error(readmytodoFailed);
}


function readmytodoCompleted(data) {



    var $mytodo = $(data).find('mytodoType').find('mytodoData');
    var $mytodoTitles = $(data).find('mytodoTitles').text();
    $("#mytodopanelheading").append('<h4 class="heading"><b>' + $mytodoTitles + '</b></h4>');

    $mytodo.each(function(index, value) {

        $mytodoStatus = $(value);


        var mytodoImage = $mytodoStatus.find('mytodoImage').text();
        var ImagePath = imagesFolder + mytodoImage;

        var mytodoInprogress = $mytodoStatus.find('mytodoInprogress').text();

        var mytodoHeading = $mytodoStatus.find('mytodoHeading').text();

        var mytodoDate = $mytodoStatus.find('mytodoDate').text();


        var mytodoStart = $mytodoStatus.find('mytodoStart').text();





        $("#mytodo .panel-body").append('<div class="col-md-12  pad-null  ">\
                                           <div class="col-md-12 col-sm-12 col-xs-12 pad-null  ">\
                                              <div class="col-md-3 col-sm-3 col-xs-3  mytodoImage ">\
                                       <img src="' + ImagePath + '"  width=90px height=90px/></div>\
                                       <div class="col-md-9 col-sm-9 col-xs-9  ">\
                                       <div class="col-md-12"><button class= "mytodoInprogress" id="pointer">' + mytodoInprogress + '</button> </div>\
                                       <div class="col-md-12 col-sm-9  col-xs-9  "> <h5 class= "mytodoHeading">' + mytodoHeading + '</h5></div>\
                                       <div class="col-md-12   ">\
                                       <div class="col-md-9 col-sm-9 col-xs-9"> <p class= "mytodoData">' + mytodoDate + '</p></div>\
                                       <div class="col-md-3 col-sm-3 col-xs-3 "> <button class= "mytodoStart">' + mytodoStart + '</button></div>\
                                       </div></div></div></div>')
    })


    var mytodoInprogress = $('.mytodoInprogress').length



    for (var i = 0; i < mytodoInprogress; i++) {

        var text = document.getElementsByClassName("mytodoInprogress")[i].innerText;
        if (text == "INPROGRESS") {
            document.getElementsByClassName("mytodoInprogress")[i].classList.add("inprogress")
        } else if (text == "REGISTRED") {
            document.getElementsByClassName("mytodoInprogress")[i].classList.add("registered")
        }
    }

}

function readmytodoFailed() {
    var message = "My to do  Path is Not Found";
    document.write(message);
}