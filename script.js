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
    uploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = 'Carlo'; // Specify the username here
        uploadAudio(event, username); // Call uploadAudio function with the username
    });

    function startRecording() {
        // Clear previous recordings
        audioChunks = [];
    
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                mediaRecorder = new MediaRecorder(stream);
    
                mediaRecorder.addEventListener('dataavailable', function(event) {
                    audioChunks.push(event.data);
                });
    
                mediaRecorder.addEventListener('stop', function() {
                    latestRecordingBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    audioElement.src = URL.createObjectURL(latestRecordingBlob);
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
    

    function stopRecording() {
        mediaRecorder.stop();
        recordButton.disabled = false;
        stopButton.disabled = true;
        status.innerText = 'Status: Idle';
    }

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
};
