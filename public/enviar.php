<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';       // Servidor SMTP
        $mail->SMTPAuth   = true;
        $mail->Username   = 'obrastabile@gmail.com';  // tu correo real
        $mail->Password   = '';     // App password si usas Gmail con 2FA
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('obrastabile@gmail.com', 'Obrastabile');
        $mail->addReplyTo($email, $nombre);
        $mail->addAddress('obrastabile@gmail.com');

        // Contenido del correo
        $mail->isHTML(false);
        $mail->Subject = "Nuevo mensaje de $nombre desde la web";
        $mail->Body    = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

        $mail->send();
        echo "Mensaje enviado con éxito 🚀";
    } catch (Exception $e) {
        echo "Error al enviar el mensaje ❌: {$mail->ErrorInfo}";
    }
} else {
    echo "Método no permitido";
}
?>
