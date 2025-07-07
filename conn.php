<?php

// //localhost conn
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "petersworld";

// //online server conn
// $servername = "sql211.epizy.com";
// $username = "epiz_27699666";
// $password = "cFq7oQ29Onw";
// $dbname = "epiz_27699666_gym";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>