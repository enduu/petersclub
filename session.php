<?php
session_start();

if (!isset($_SESSION['login_username'])) {
    header("Location: login.php");
    exit;
}

$users = include 'users.php';
$currentUser = null;

foreach ($users as $user) {
    if ($user['username'] === $_SESSION['login_username']) {
        $currentUser = $user;
        break;
    }
}

if (!$currentUser) {
    echo "User not found.";
    exit;
}
?>