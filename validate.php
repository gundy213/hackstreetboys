<?php
$servername = 'localhost';
$username = 'root';
$password = "";
$dbname = "contactus";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// define variables and set to empty values
$fNameErr = $lNameErr = $emailErr = "";
$fName = $lName = $email = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["firstname"])) {
    $fNameErr = "First name is required";
  } else {
    $fName = test_input($_POST["firstname"]);
	echo $fName;
  }
  
  if (empty($_POST["lastname"])) {
    $lNameErr = "Last name is required";
  } else {
    $lName = test_input($_POST["lastname"]);
	echo $lName;
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
	echo $email;
  }
    
  if (empty($_POST["subject"])) {
    $message = "";
  } else {
    $message = test_input($_POST["subject"]);
  }
  
  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$sql = "INSERT INTO info (fName, lName, email, message)
VALUES ('$fName','$lName','$email','$message')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>