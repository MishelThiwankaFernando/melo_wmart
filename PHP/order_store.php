<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "melow_mart";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the HTML form

$price = $_POST['Price'];
$size = $_POST['G-size'];
$quantity = $_POST['Quantity'];
$color = $_POST['Color'];

$sql = "INSERT INTO order_detail (Price, Sizes, Quantity, Color)
 VALUES ( '$price', '$size', $quantity, '$color')";

if ($conn->query($sql) === TRUE) {
   //
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>