<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Recording App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <button id="recordButton">Record</button>
        <button id="stopButton" disabled>Stop</button>
        <p id="status">Status: Idle</p>
        <audio id="audioElement" controls></audio>
        <form id="uploadForm" enctype="multipart/form-data">
            <input id="uploadButton" type="submit" value="Upload Recorded Audio">
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
