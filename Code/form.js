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
