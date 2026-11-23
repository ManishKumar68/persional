<?php

$servername = getenv('DB_HOST') ?: 'localhost';
$username = getenv('DB_USER') ?: 'root';
$password = getenv('DB_PASSWORD') ?: '';
$dbname = getenv('DB_NAME') ?: 'clgdb';
$dbport = getenv('DB_PORT') ?: null;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $dbport ?: ini_get('mysqli.default_port'));

if ($conn->connect_error) {
    http_response_code(500);
    die('Connection failed: ' . $conn->connect_error);
}
?>
