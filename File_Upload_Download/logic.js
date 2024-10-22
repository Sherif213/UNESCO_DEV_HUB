const downCheckIcon = document.getElementById("down-check-icon");
const upCheckIcon = document.getElementById("up-check-icon");
const downloadStatus = document.getElementById("downloadStatus");
const uploadStatus = document.getElementById("uploadStatus");
const submitBtn = document.getElementById("submitBtn");

let isDownloaded = false;
let isUploaded = false;

// Helper function to update status and icon
function updateStatus(statusElement, iconElement, isComplete) {
  if (isComplete) {
    statusElement.innerText =
      statusElement.id === "downloadStatus" ? "Downloaded" : "Uploaded";
    statusElement.classList.remove("text-danger");
    statusElement.classList.add("text-success");
    iconElement.classList.remove("bi-x-circle", "text-danger");
    iconElement.classList.add("bi-check-circle", "text-success");
  }
  checkFormStatus();
}

// Track download link click
document
  .getElementById("download_file")
  .addEventListener("click", function (e) {
    // e.preventDefault(); // Uncomment to prevent download during testing
    isDownloaded = true;
    updateStatus(downloadStatus, downCheckIcon, isDownloaded);
  });

// Track file upload
document.getElementById("upload_file").addEventListener("change", function () {
  isUploaded = this.files.length > 0;
  updateStatus(uploadStatus, upCheckIcon, isUploaded);
});

// Submit button is disabled by default
// Enable the submit button only if both conditions are met
function checkFormStatus() {
  submitBtn.disabled = !(isDownloaded && isUploaded);
}

// Reset button to clear form status
document.getElementById("resetBtn").addEventListener("click", function () {
  isDownloaded = false;
  isUploaded = false;
  downloadStatus.innerText = "Not Downloaded";
  downloadStatus.classList.remove("text-success");
  downloadStatus.classList.add("text-danger");
  downCheckIcon.classList.remove("bi-check-circle", "text-success");
  downCheckIcon.classList.add("bi-x-circle", "text-danger");

  uploadStatus.innerText = "Not Uploaded";
  uploadStatus.classList.remove("text-success");
  uploadStatus.classList.add("text-danger");
  upCheckIcon.classList.remove("bi-check-circle", "text-success");
  upCheckIcon.classList.add("bi-x-circle", "text-danger");

  checkFormStatus();
});
