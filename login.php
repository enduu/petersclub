<?php

include("conn.php");

session_start();
   
if($_SERVER["REQUEST_METHOD"] == "POST") {
   // username and password sent from form 
   
   $myusername = mysqli_real_escape_string($conn,$_POST['email']);
   $mypassword = mysqli_real_escape_string($conn,$_POST['password']); 
   
   $sql = "SELECT id FROM user WHERE name = '$myusername' and password = '$mypassword'";
   $result = mysqli_query($conn,$sql);
   $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
   $count = mysqli_num_rows($result);
   
   // If result matched $myusername and $mypassword, table row must be 1 row
 
   if($count == 1) {
      // session_register("myusername");
      $_SESSION['login_user'] = $myusername;
      //counts logs
      $updateCountSql = "UPDATE user SET log_count = log_count + 1 WHERE name = '$myusername'";
      mysqli_query($conn, $updateCountSql);

      header("location: home.php");
   }else {
      echo "Your Login Name or Password is invalid <a href='index.php'>Go back</a>";
   }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="shortcut icon" href="img/favs/favicon5.png" type="image/png">
    <title>Peter's Club</title>
</head>
<body class="loginp">
  
</body>
</html>