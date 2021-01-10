<?php
$name = $_POST['name'];
$emailFrom = $_POST['email'];
$message = $_POST['message'];

$emailTo = 'chilucdiep@gmail.com';
$emailSubject = 'Portfolio Form Email';
$headers = 'From: '.$name;

mail($emailTo, $emailSubject, $message, $headers);

?>

