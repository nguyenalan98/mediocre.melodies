<?php
// Written for students of Cornell's INFO 1300 by Grant Storey, 11/7/18
// Change this to your redirect page
$redirect = "contactDone.html";
// Change this to the email you want to send results to.
$sendToEmail = "info1300TESTMAIL@gmail.com";

//url for heroku deployment: https://guarded-thicket-46244.herokuapp.com/index.html
//password for email:Testmail1300

// Change this to the email you want to send results from (this can be fake but use something that will make sense to your client).
$sendFromEmail = "websiteContactForm@mediocremelodies.com";
// Optionally change this to the desired subject line for emails
$subject = "Contact Form for Mediocre Melodies";
// DO NOT CHANGE ANYTHING BELOW THIS LINE
// ==================================================================
// based on SendGrid example
// https://devcenter.heroku.com/articles/sendgrid#php-example
require 'vendor/autoload.php';
if ($redirect == "") {
  echo("ERROR: you must set the redirect variable at the top of the submit php file.");
} else if ($sendToEmail == "") {
  echo("ERROR: you must set the destination email variable at the top of the submit php file.");
} else if ($sendFromEmail == "") {
  echo("ERROR: you must set the source email variable at the top of the submit php file.");
} else {
  $messageArray = array("The following information was submitted:\n");
  // Add each of the form inputs to the message
  foreach ($_REQUEST as $key => $value) {
    if ($key === "PHPSESSID") {
      continue;
    }
    if (substr($key, 0, strlen("SQLiteManager")) === "SQLiteManager") {
      continue;
    }
    $keyValue = htmlspecialchars($key) . ":  ";
    $printValue = $value;
    // if this is an array, need to print it differently
    if (is_array($value)) {
      $printValue = join(", ", $value);
    }
    $keyValue .= htmlspecialchars($printValue);
    array_push($messageArray, $keyValue);
  }
  $message = join("\n", $messageArray);
  $from = new SendGrid\Email(null, $sendFromEmail);
  $subject = $subject;
  $to = new SendGrid\Email(null, $sendToEmail);
  $content = new SendGrid\Content("text/plain", $message);
  $mail = new SendGrid\Mail($from, $subject, $to, $content);
  $apiKey = getenv('SENDGRID_API_KEY');
  $sg = new \SendGrid($apiKey);
  $response = $sg->client->mail()->send()->post($mail);
  // Redirect to specified location
  header("Location: " . $redirect);
  return;
  // echo $response->statusCode();
  // echo $response->headers();
  // echo $response->body();
  }
?>
