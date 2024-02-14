let currentPage = 1;
const progress = document.getElementById('progress');

function nextPage() {
  if (currentPage === 1) {
    if (!validateStep1()) {
      return;
    }
  } else if (currentPage === 2) {
    if (!validateStep2()) {
      return;
    }
  }

  currentPage++;
  showPage(currentPage);
  updateProgressBar();
}

function previousPage() {
  currentPage--;
  showPage(currentPage);
  updateProgressBar();
}

function validateStep1() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Password and confirm password do not match.');
    return false;
  }

  return true;
}

function validateStep2() {
  const fullname = document.getElementById('fullname').value;
  const address = document.getElementById('address').value;
  const mobile = document.getElementById('mobile').value;

  if (fullname.trim() === '' || address.trim() === '' || mobile.trim() === '') {
    alert('Please fill in all fields with valid information.');
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function showPage(pageNumber) {
  for (let i = 1; i <= 3; i++) {
    const page = document.getElementById(`page${i}`);
    if (i === pageNumber) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  }
}

function updateProgressBar() {
  const progressBarWidth = (currentPage - 1) * 50;
  progress.style.width = `${progressBarWidth}%`;
}

function submitForm() {
  alert('Form submitted successfully!');
}
