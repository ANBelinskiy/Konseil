<?php
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (empty($_POST['userName']) ||
empty($_POST['userPhone']) ||
empty($_POST['userEmail']) ||
// empty($_POST['calendar']) ||
// empty($_POST['time']) ||
// empty($_POST['time2']) ||
// empty($_POST['userFrom']) ||
// empty($_POST['userTo']) ||
// empty($_POST['text']) ||
empty($_POST['checkbox']))
die('Mailer Error!');

$userName = trim(urldecode(htmlspecialchars($_POST['userName'])));
$userEmail = trim(urldecode(htmlspecialchars($_POST['userEmail'])));
$userPhone = trim(urldecode(htmlspecialchars($_POST['userPhone'])));

if (!empty($_POST['calendar'])) $calendar = trim(urldecode(htmlspecialchars($_POST['calendar'])));
if (!empty($_POST['time'])) $time = trim(urldecode(htmlspecialchars($_POST['time'])));
if (!empty($_POST['time2'])) $time2 = trim(urldecode(htmlspecialchars($_POST['time2'])));
if (!empty($_POST['userFrom'])) $userFrom = trim(urldecode(htmlspecialchars($_POST['userFrom'])));
if (!empty($_POST['userTo'])) $userTo = trim(urldecode(htmlspecialchars($_POST['userTo'])));
if (!empty($_POST['text'])) $userMessage = trim(urldecode(htmlspecialchars($_POST['text'])));



$subject = 'Booking application';

$message = $subject . ':<br>Name: ' . $userName .
'<br>Phone: ' . $userPhone .
'<br>E-mail: ' . $userEmail;

if (!empty($calendar)) $message .= '<br>Date: ' . $calendar;
if (!empty($time)) $message .= '<br>Start time: ' . $time;
if (!empty($time2)) $message .= '<br>End time: ' . $time2;
if (!empty($userFrom)) $message .= '<br>Where from: ' . $userFrom;
if (!empty($userTo)) $message .= '<br>Where to: ' . $userTo;
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

    $mail->setFrom('send@markz.ga', 'ROLLS ROYCE');
    $mail->addAddress('contact@location-rolls-royce.lu');
    // $mail->addAddress('oleksandrbielinskyi@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $message;

    $mail->send();
    echo "Success!";
} catch (Exception $e) {
    echo "Mailer Error: {$mail->ErrorInfo}";
}
