<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    $users = include 'users.php';

    foreach ($users as $user) {
        if ($user['username'] === $username && $user['password'] === $password) {
            $_SESSION['login_username'] = $username;
            // Optionally update logCount here and save to file
            header("Location: dashboard.php");
            exit;
        }
    }

    $error = "Invalid username or password.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="css/animate.min.css">
    <link rel="stylesheet" href="css/click.css">
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="shortcut icon" href="img/favs/favicon5.png" type="image/png">
    <title>Peter's Club</title>
</head>
<body class="purpleb2">
    <div class="loading-container">
        <!-- <img class="logo_splash_intro" src="img/loader-main2-white.svg" alt=""> -->
        <div class="loader"></div>
    </div>
    <div class="signin full-white-cont full-white-cont-nb">
        <div class="conttext">
            <img src="img/petersworld.png" alt="" class="topillus">
            <p class='pres'><span class='fl'>Welcome to</span>Peter's Club</p>
        </div>
        <div class="contform">
            <form class="sform" method="POST">
                <label for="username">Username:</label>
                <input name="username" id="email" type="text" required />
                <label for="password">Password:</label>
                <input name="password" id="password" type="password" required />
                <!-- <span class="forgot" id="forgot">I forgot my password</span> -->
                <button id="submit" class="button main" type="submit">Login</button>
            </form>
            <?php if (!empty($error)) echo "<p>$error</p>"; ?>
        </div>
            <!-- <div class="septxt">
                <span>Not a member? <a href = "mailto: support@ehippo.com">Contact us</a></span>
            </div> -->
    </div>
    <script src="js/jquery-1.8.3.min.js"></script>
    <script src="js/loading.js"></script>
</body>
</html>