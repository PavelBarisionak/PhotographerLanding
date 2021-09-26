$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$subject = htmlspecialchars($subject);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$subject = urldecode($subject);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$subject = trim($subject);
$message = trim($message);

echo "<br>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $subject;
echo "<br>";
echo $message;

;
if (mail("vgurami@yandex.ru", "Тема:".$subject.", "ФИО:".$fio.". E-mail: ".$email ,"From: farid256@yandex.ru \r\n")))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>