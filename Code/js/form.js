const form = document.getElementById('feedbackForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
const fileInput = document.getElementById('fileUpload');
const successMessage = document.getElementById('successMessage');
const userNameDisplay = document.getElementById('userName');
const charCount = document.getElementById('charCount');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const feedbackError = document.getElementById('feedbackError');
const fileError = document.getElementById('fileError');

// Allowed file types and size
const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'video/mp4'];
const maxFileSize = 10 * 1024 * 1024; // 10MB

// Real-time validation
nameInput.addEventListener('input', () => {
  nameError.classList.toggle('hidden', nameInput.value.trim() !== '');
});

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.classList.toggle('hidden', emailPattern.test(emailInput.value));
});

feedbackInput.addEventListener('input', () => {
  const feedbackLength = feedbackInput.value.length;
  charCount.textContent = feedbackLength;
  feedbackError.classList.toggle('hidden', feedbackLength > 0);
});

fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files);
  const invalidFile = files.some(
    file => !allowedTypes.includes(file.type) || file.size > maxFileSize
  );

  fileError.classList.toggle('hidden', !invalidFile);
});

// Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (
    nameInput.value.trim() &&
    emailInput.value.trim() &&
    feedbackInput.value.trim() &&
    fileError.classList.contains('hidden')
  ) {
    userNameDisplay.textContent = nameInput.value.trim();
    successMessage.classList.remove('hidden');
    form.reset();
    charCount.textContent = '0';
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('assignmentForm');
    const fileUpload = document.getElementById('fileUpload');
    const fileUploadLabel = document.querySelector('.file-upload-label span');

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Handle file upload label text
    fileUpload.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileUploadLabel.innerHTML = `${this.files.length} file(s) selected`;
            fileUploadLabel.parentElement.querySelector('i').className = 'fas fa-check';
        } else {
            fileUploadLabel.innerHTML = 'Choose Files or Drag & Drop';
            fileUploadLabel.parentElement.querySelector('i').className = 'fas fa-cloud-upload-alt';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            course: document.getElementById('course').value,
            title: document.getElementById('assignmentTitle').value,
            description: document.getElementById('description').value,
            files: fileUpload.files,
            student: currentUser,
            submissionDate: new Date().toISOString()
        };

        // Store submission in localStorage
        let submissions = JSON.parse(localStorage.getItem('assignments') || '[]');
        submissions.push(formData);
        localStorage.setItem('assignments', JSON.stringify(submissions));

        // Show success message
        alert('Assignment submitted successfully!');
        
        // Reset form
        form.reset();
        fileUploadLabel.innerHTML = 'Choose Files or Drag & Drop';
        fileUploadLabel.parentElement.querySelector('i').className = 'fas fa-cloud-upload-alt';
    });
});
