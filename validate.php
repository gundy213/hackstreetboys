
<?php

if(!empty($_REQUEST))
{
      //  echo '<pre>'; print_r($_REQUEST); die('END');
        $post = [
            'secret' => 'REDACTED',
            'response' => $_REQUEST['g-recaptcha-response'],
        ];
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,"https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);

        curl_close ($ch);
        echo '<pre>'; print_r($server_output);
		$result = json_decode($server_output);
		
		if($result->success != 1) {
			die(header("Location: https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
		}

$servername = 'localhost';
$username = 'root';
$password = "Password";
$dbname = "contact_us";

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
  }
  
  if (empty($_POST["lastname"])) {
    $lNameErr = "Last name is required";
  } else {
    $lName = test_input($_POST["lastname"]);
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }
    
  if (empty($_POST["subject"])) {
    $message = "";
  } else {
    $message = test_input($_POST["subject"]);
  }
  
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
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();

header("Location: https://staffmonitoring.net/thank-you.html");
?>
