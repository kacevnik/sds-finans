<?php

require 'PHPMailer/PHPMailerAutoload.php';

// ==== Принудительный захват массива переменных ==========================
// ==== раскомментировать, если письма отправляются без значений полей ====
$text       = '';
$adminEmail = 'natali.sidorenkova.87@mail.ru';
$email      = $_POST['email'];     		if($email){$text      = 'E-mail пользователя: '.$email.'<br>';}
$phone      = $_POST['phone'];     		if($phone){$text      = $text.'Телефон пользователя: '.$phone.'<br>';}
$name       = $_POST['name'];     		if($name){$text       = $text.'Имя пользователя: '.$name.'<br>';}
$count_area = $_POST['count_area'];     if($count_area){$text = $text.'Количество комнат: '.$count_area.'<br>';}
$sqd        = $_POST['sqd'];       	    if($sqd){$text        = $text.'Площадь: '.$sqd.'<br>';}
$price      = $_POST['price'];          if($price){$text      = $text.'Стоимость: '.$price.'<br>';}
$summa      = $_POST['summa'];          if($summa){$text      = $text.'Желаемая сумма для ипотеки: '.$summa.'<br>';}
$vnos       = $_POST['vnos'];           if($vnos){$text       = $text.'Первоначальный взнос для ипотеки: '.$vnos.'<br>';}
$time       = $_POST['time'];           if($time){$text       = $text.'Срок ипотеки для ипотеки: '.$time.'<br>';}
$bank       = $_POST['bank'];           if($bank){$text       = $text.'Банк: '.$bank.'<br>';}
$form       = $_POST['form'];



$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'zhk.veneciya@mail.ru';           // SMTP username
$mail->Password = 'Z9564665z';                        // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('zhk.veneciya@mail.ru', 'ЖК Венеция');
$mail->addAddress($adminEmail, $adminEmail);          // Add a recipient            

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $form;
$mail->Body    = $text;


if(!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    //echo 'Message has been sent';
}