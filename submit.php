<?php
$host = "localhost";    // MAMP default: localhost
$db   = "kontakt_db";   // jméno databáze
$user = "root";         // MAMP default: root
$pass = "root";         // MAMP default: root

// Připojení k databázi
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Získání dat z formuláře
$jmeno  = $conn->real_escape_string($_POST['jmeno']);
$email  = $conn->real_escape_string($_POST['email']);
$zprava = $conn->real_escape_string($_POST['zprava']);

// Vložení do tabulky
$sql = "INSERT INTO kontakty (jmeno, email, zprava) VALUES ('$jmeno', '$email', '$zprava')";

if ($conn->query($sql) === TRUE) {
    echo "Zpráva byla úspěšně odeslána!";
} else {
    echo "Chyba: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
