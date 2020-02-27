<?php
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (empty($_POST['page']) || empty($_POST['nameUser']) || empty($_POST['surnameUser']) || empty($_POST['phoneUser']) || empty($_POST['emailUser']) || empty($_POST['messUser'])) die('Mailer Error!');

$page = trim(urldecode(htmlspecialchars($_POST['page'])));
$nameUser = trim(urldecode(htmlspecialchars($_POST['nameUser'])));
$surnameUser = trim(urldecode(htmlspecialchars($_POST['surnameUser'])));
$phoneUser = trim(urldecode(htmlspecialchars($_POST['phoneUser'])));
$emailUser = trim(urldecode(htmlspecialchars($_POST['emailUser'])));
$messUser = trim(urldecode(htmlspecialchars($_POST['messUser'])));

$subject = 'Callback';

$message = $subject . 
':<br>Page: ' 
. $page . 
':<br>Name: ' 
. $nameUser . 
'<br>Surname: ' 
. $surnameUser .
'<br>Phone: ' 
. $phoneUser . 
'<br>E-mail: ' 
. $emailUser .
'<br>Message: ' 
. $messUser;

if (!empty($userMessage)) $message .= '<br>Message: ' . $userMessage;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host       = 'smtp.yandex.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'send@markz.ga';
    $mail->Password   = '543y5hrwsed';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom('send@markz.ga', 'Conseil');
    $mail->addAddress('contact@location-rolls-royce.lu');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    echo "Success!";
} catch (Exception $e) {

    echo "Mailer Error: {$mail->ErrorInfo}";
}
