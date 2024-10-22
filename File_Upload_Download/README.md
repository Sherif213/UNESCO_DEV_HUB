# UNESCO Application Form (Parental Consent File)

## Features

- **File Download and Upload**: Users are required to download a consent file and upload a completed version of that file before they can submit the form.
- **Visual Feedback**: The page provides visual feedback indicating the status of the download and upload process (using icons and status messages).
- **Form Validation**: The form submit button is disabled until both the file has been downloaded and uploaded, preventing submission of incomplete applications.
- **Style and format**: Used the same style and fromat. Added a new container with slight modifications.
- **JavaScript Logic**: `logic.js` used to control the logic for downloading and uploading files. The file should be placed in the `/File_Upload_Download/` folder and linked properly in the HTML document. **You can change the location of the file accordingly**
- **Code Comments**: I added comments throughout the HTML and JavaScript files to explain key logic and styling decisions.

### Used the same technologies (html, css, js , bootstrap, etc)

### Steps to Use the File Upload/Download Feature:

- **Download/Upload the File**: Click on the download link provided on the form. Once downloaded.uploaded, the "Not Downloaded/Uploaded" message will change to "Downloaded/Uploaded" and the icon will switch from an "X" to a check mark.
- **Submit the Form**: The form submit button will only be enabled once both the download and upload actions are completed.
