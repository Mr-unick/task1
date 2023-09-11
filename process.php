<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    

    
    mail("contact@example.com", "New Contact Form Submission", "Name: $name\nEmail: $email\nMessage: $message");


    echo "Thank you for your message!";
}
?>
