<?php
 require("class.phpmailer.php");

$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['mail'];
$address = $_POST['address'];
$city = $_POST['city'];
$telefono = $_POST['telefono'];
$zip = $_POST['zip'];
$archivo = $_FILES['archivo'];
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com";
$mail->From = "jcarlos.membrenos@gmail.com";
$mail->AddAddress('ruizpaze@gmail.com', 'NextNet');
$mail->FromName = "Job Application";
$mail->Port = 25;
$mail->Subject = "Work Application";
$body = "Mornig Sr.";
$body .= "Nombre: $name rn";
$body .= "Apellidos: $lastname rn";
$body .= "E-mail: $emailr n";
$body .= "Direccion: $address rn";
$body .= "Ciudad: $city rn";
$body .= "Telefono: $telefono rn";
$body .= "ZIP: $zip rn";
$mail->Body = $body;
//adjuntamos un archivo
$mail->AddAttachment($archivo['tmp_name'], $archivo['name']);
$bien = $mail->Send();

if($bien)
{
	echo'Envio realizado correctamente';
}
else
{
	echo 'Ocurrio un error';
}

?>