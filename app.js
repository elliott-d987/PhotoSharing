document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('https://functionphotoapp.azurewebsites.net/api/UploadMedia?code=YOUR_FUNCTION_KEY', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('File uploaded successfully!');
        } else {
            const errorText = await response.text();
            alert('File upload failed: ' + errorText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('File upload failed: ' + error.message);
    }
});

