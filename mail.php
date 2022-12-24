<?php
//get data from form  
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subjects = $_POST['subject'];

$to = "bokelusi@gmail.com";
$subject = "Mail From contacts form on your website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message "\r\n subject =" . $subjects;
$headers = "From: noreply@keddy.tech" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thanks.html")
?>