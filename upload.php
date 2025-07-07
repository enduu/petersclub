<?php
// Allow cross-origin requests from specific origins
header('Access-Control-Allow-Origin: http://localhost:81/e-hippo2022/'); // Replace with your frontend origin
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Set Referrer Policy to "origin-when-cross-origin"
header('Referrer-Policy: origin-when-cross-origin');

$uploadDir = 'uploads/';
$uploadFile = $uploadDir . basename($_FILES['audioFile']['name']);

// Check if file was uploaded without errors
if (isset($_FILES['audioFile']) && $_FILES['audioFile']['error'] === UPLOAD_ERR_OK) {
    // Move the uploaded file to the specified directory
    if (move_uploaded_file($_FILES['audioFile']['tmp_name'], $uploadFile)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(400);
}
?>
