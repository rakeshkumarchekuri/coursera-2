function getimage() {
    $.get(xmlFolder + "image.xml")
        .success(readImageCompleted)
        .error(readImageFailed);
}

function readImageCompleted(data) {


    // var image, imageText, imgDescription, button, infor, infor1, infor2, infor3;

    var $Training = $(data).find('imageData').find('imageType');
    $Training.each(function(index, value) {

        var $TrainingStatus = $(value);


        var picture = $TrainingStatus.find('picture').text();
        var imagePath = imagesFolder + picture;


        // picture = "images/" + $TrainingStatus.find("picture").text();

        $(".Image").append('<div class="col-md-12  image-main"><img class="image-main" src="' + imagePath + '"  width=100% height=753px/></div>')



    })




}

function readImageFailed() {
    var message = "Image Path is Not Found";
    document.write(message);
}