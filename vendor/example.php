<?php

require_once('phpmailer/class.phpmailer.php');
require_once('phpmailer/class.smtp.php');


$mail = new PHPMailer(); 

$mail->CharSet = 'UTF-8';

$mail->IsSMTP();

$mail->SMTPAuth = true;

$mail->SMTPSecure = 'tls';


$mail->Host = 'smtp.gmail.com';

$mail->Port = 587;

$mail->Username   = "ruizpaze@gmail.com";

$mail->Password   = "78944728Mama";

$email_to = "jcarlos.membrenos@gmail.com";
$email_subject = $_POST['asunto'];
$email_copy = $_POST['email'];
$body = $_POST['comments'];
$name = $_POST['nombre'];

$mail->SetFrom($email_copy, $name);


$mail->AddReplyTo($email_copy,$name);

$mail->AddAddress($email_to, 'nombre');  

$mail->Subject = $email_subject;

$mail->IsHTML(false);
$mail->body($body);


if(!$mail­>Send()) {
echo "Error al enviar el mensaje: " . $mail­>ErrorInfo;
} else {
echo "Mensaje enviado!!";
}
?>