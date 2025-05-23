<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include PHPMailer files
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$config = parse_ini_file('config.ini');
// Check if config loaded
if (!$config) {
    die("Configuration file not found.");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = $config['MAIL_HOST'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['MAIL_USERNAME'];
        $mail->Password   = $config['MAIL_PASSWORD'];
        $mail->SMTPSecure = $config['MAIL_ENCRYPTION'];
        $mail->Port       = $config['MAIL_PORT'];


        // Recipients
        $mail->setFrom($_POST['email']," My Portfolio Get In Touch");
        $mail->addAddress('sherpmurimi1@gmail.com'); 

        $mail->addReplyTo($_POST['email'], $_POST['name']);

    
        // Content
        $mail->isHTML(false);
        $mail->Subject = $_POST['subject'];
        $mail->Body    = "Name: " . $_POST['name'] . "\n" .
                         "Email: " . $_POST['email'] . "\n" .
                         "Message: " . $_POST['message'];

        $mail->send();
        echo "✅ Thank you! Your message has been sent.";
    } catch (Exception $e) {
        if (strpos($mail->ErrorInfo,"SMTP connet() failed") !== false) {
            echo"Network error check your connection. ";
        
        } else {
        
        }
        
        
    }
} else {
    echo "Invalid request.";
}
?>
