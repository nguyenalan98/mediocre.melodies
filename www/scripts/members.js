// When the document is ready
$(document).ready(function() {
  // List of images
  var images = [
    "media/Filler.jpg", // index 0
    "media/Filler.jpg", // index 1
    "media/Filler.jpg", // index 2
    "media/Filler.jpg", // index 3
    "media/Filler.jpg",  // index 4
    "media/Filler.jpg" //index 5
  ];

  // The index of the image that is currently displayed
  var currentIndex = 0;

  // When the next button is clicked
  $("#slideshowNext").click(function () {
    // YOUR CODE HERE
    if (currentIndex==3){
        currentIndex=0;
    }
    else{
    currentIndex=currentIndex+3;
    }
    $("brother1").attr("src",images[currentIndex]);
    $("brother2").attr("src",images[currentIndex+1]);
    $("brother3").attr("src",images[currentIndex+2]);
  });
    // END OF YOUR CODE
});
