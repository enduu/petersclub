window.onload = function() {
    const recordButton = document.getElementById('recordButton');
    const stopButton = document.getElementById('stopButton');
    const status = document.getElementById('status');
    const audioElement = document.getElementById('audioElement');
    const uploadForm = document.getElementById('uploadForm');

    let mediaRecorder;
    let audioChunks = [];
    let latestRecordingBlob = null;

    recordButton.addEventListener('click', startRecording);
    stopButton.addEventListener('click', stopRecording);
    uploadForm.addEventListener('submit', uploadAudio);

    function startRecording() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.addEventListener('dataavailable', function(event) {
                    audioChunks.push(event.data);
                });

                mediaRecorder.addEventListener('stop', function() {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    audioElement.src = URL.createObjectURL(audioBlob);
                });

                mediaRecorder.start();
                recordButton.disabled = true;
                stopButton.disabled = false;
                status.innerText = 'Status: Recording';
            })
            .catch(function(err) {
                console.error('Error recording audio: ', err);
            });
    }

// Function to handle the upload of recorded audio
async function uploadAudio(event, username) {
    event.preventDefault();

    if (!latestRecordingBlob) {
        console.error('No audio recording available to upload.');
        return;
    }

    try {
        // Generate a unique filename
        const timestamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').split('.')[0];
        const filename = `${username}_${timestamp}.wav`;

        // Create FormData and append the latest recording Blob with the unique filename
        const formData = new FormData();
        formData.append('audioFile', latestRecordingBlob, filename);

        // Send FormData to the server using fetch
        const response = await fetch('/e-hippo2022/upload.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Audio uploaded successfully!');
        } else {
            alert('Error uploading audio.');
        }
    } catch (error) {
        console.error('Error uploading audio:', error.message);
    }
}

// Attach an event listener to the form submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = 'Carlo'; // Specify the username here
    uploadAudio(event, username); // Call uploadAudio function with the username
});

    function stopRecording() {
        mediaRecorder.stop();
        recordButton.disabled = false;
        stopButton.disabled = true;
        status.innerText = 'Status: Idle';
    }

// Function to handle the upload of recorded audio
// async function uploadAudio(event, username) {
//     event.preventDefault();

//     // Access the recorded audio data from the audioElement
//     const audioElement = document.getElementById('audioElement');
//     const audioData = audioElement.src;

//     try {
//         // Create a Blob object from the Blob URL
//         const audioBlob = await fetch(audioData).then(response => response.blob());

//         // Generate a unique filename
//         const timestamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').split('.')[0];
//         const filename = `${username}_${timestamp}.wav`;

//         // Create FormData and append the audio Blob with the unique filename
//         const formData = new FormData();
//         formData.append('audioFile', audioBlob, filename);

//         // Send FormData to the server using fetch
//         const response = await fetch('/e-hippo2022/upload.php', {
//             method: 'POST',
//             body: formData
//         });

//         if (response.ok) {
//             alert('Audio uploaded successfully!');
            
//             // Remove the source of the audio element, keeping the element in the DOM
//             audioElement.src = '';
//         } else {
//             alert('Error uploading audio.');
//         }
//     } catch (error) {
//         console.error('Error uploading audio:', error.message);
//     }
// }

// Attach an event listener to the form submission
// document.getElementById('uploadForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const username = 'Carlo'; // Specify the username here
//     uploadAudio(event, username); // Call uploadAudio function with the username
// });
    
    // Function to convert a data URI to a Blob object
    function dataURItoBlob(dataURI) {
        // Split the data URI into its components (prefix and base64 data)
        const parts = dataURI.split(',');
    
        // Check if the data URI is in the expected format
        if (parts.length !== 2 || parts[0].indexOf('data:') !== 0) {
            throw new Error('Invalid data URI format');
        }
    
        // Extract the base64-encoded data and MIME type
        const base64Data = parts[1];
        const mimeString = parts[0].split(':')[1].split(';')[0];
    
        // Decode the base64 data
        const byteCharacters = atob(base64Data);
    
        // Convert the decoded data into an ArrayBuffer
        const byteArray = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteArray[i] = byteCharacters.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: mimeString });
    
        return blob;
    }
    
    
};