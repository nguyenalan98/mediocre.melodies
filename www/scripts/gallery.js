//When the document is ready
$(document).ready(function() {

  var images = [
    "media/mediocre_melody_poster.jpg", //0
    "media/mediocre_melody_group_photo.JPG", //1
    "media/performance1.jpg", //2
    "media/performance2.jpg", //3
    "media/performance3.jpg", //4
    "media/performance4.jpg", //5
    "media/meeting1.jpg", //6
    "media/meeting2.jpg", //7
    "media/meeting3.jpg", //8
    "media/singing1.jpg", //9
    "media/singing2.jpg", //10
    "media/singing3.jpg", //11
    "media/fungroup.jpg", //12
    "media/formalgroup.jpg" //13
  ];

  // index of the image that is currently displayed
  var currentIndex = 0;

  // if the left button is clicked
  $("#left-button").click(function(){

    //if the image is first, go to last image
    if(currentIndex == 0) {
      currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }

    //change the image
    $("#slideshow-image").attr("src",images[currentIndex]);
  });

  //if the right button is clicked
  $("#right-button").click(function(){

    //if the image is last, go to first image
    if (currentIndex == images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    //change the image
    $("#slideshow-image").attr("src",images[currentIndex]);

  });

  //if the image is clicked, change the photo of the slideshow and move to slideshow
  $("#mediocre_melody_poster").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[0]);
    currentIndex = 0;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#mediocre_melody_group_photo").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[1]);
    currentIndex = 1;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#performance1").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[2]);
    currentIndex = 2;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#performance2").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[3]);
    currentIndex = 3;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#performance3").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[4]);
    currentIndex = 4;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#performance4").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[5]);
    currentIndex = 5;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#meeting1").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[6]);
    currentIndex = 6;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#meeting2").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[7]);
    currentIndex = 7;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#meeting3").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[8]);
    currentIndex = 8;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#singing1").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[9]);
    currentIndex = 9;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#singing2").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[10]);
    currentIndex = 10;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#singing3").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[11]);
    currentIndex = 11;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#fungroup").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[12]);
    currentIndex = 12;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1000);
  });

  $("#formalgroup").click(function(){
    //change the image
    $("#slideshow-image").attr("src",images[13]);
    currentIndex = 13;
    //scroll to the image
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1500);
  });

  //full screen slideshow image when clicked on
  $("#slideshow-image").click(function(){
    //display the image
    $("#expanding-image-container").removeClass("hidden");
    //set the slideshow image as expanding image
    $("#expanding-image").attr("src",images[currentIndex]);
    //scorll to image
    $('html, body').animate({scrollTop: $("#expanding-image").offset().top}, 1500);
  });

  //when the close button is clicked, hide the expanded image
  $("#closebutton").click(function(){
    //add hidden class to expanding image container
    $("#expanding-image-container").addClass("hidden");
    //scorll to slideshow
    $('html, body').animate({scrollTop: $("#slideshow-image").offset().top}, 1500);
  });

});
