<?php 
ini_set( 'display_errors', 1 );
	$name= $_POST['name'];
	$lastname = $_POST['lastname'];
    error_reporting( E_ALL );
    $from = "jcarlos.membrenos@gmail.com";
    $to = "ruizpaze@gmail.com";
    $subject = "Work Application";
    $message = "Send By: Name:" . $name . "Apellidos: " . $lastname ;
    $headers = "From:" . $from;

    mail($to,$subject,$message, $headers, $content);
    echo "The email message was sent.";
 ?>