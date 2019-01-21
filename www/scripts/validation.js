$(document).ready(function(){
  $("#contact_form").on("submit",function(){
    var formValid = true;

    var namevalidity = $("#name").prop("validity").valid;
    if(namevalidity){
      $("#nameValid").addClass("hidden");
    }
    else{
      formValid=false;
      $("#nameValid").removeClass("hidden");
    }

    var emailvalidity = $("#email").prop("validity").valid;
    if(emailvalidity){
      $("#emailValid").addClass("hidden");
    }
    else{
      formValid=false;
      $("#emailValid").removeClass("hidden");
    }

    var charityvalidity = $("#charity").prop("validity").valid;
    if(charityvalidity){
      $("#charityValid").addClass("hidden");
    }
    else{
      formValid=false;
      $("#charityValid").removeClass("hidden");
    }

    //learned from https://stackoverflow.com/questions/11534690/how-to-do-a-jquery-callback-after-form-submit
    $("#contact_form").bind('ajax:complete', function() {
      $("#completionMessage").removeClass("hidden");
    });

    return formValid;
  });
});
