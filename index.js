let currentPage = 1;
const progress = document.getElementById('progress');


updateProgressBar();

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
  updateProgressBar();
  showPage(currentPage);
}

function previousPage() {
  currentPage--;
  updateProgressBar();
  showPage(currentPage);
}


function validateStep1() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const tickIcon = document.getElementById('tick-icon');

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return false;
  }

  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;

  if (!specialCharRegex.test(password) ||
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !numberRegex.test(password)) {
    alert('Password must contain at least one special character, one uppercase letter, one lowercase letter, and one number.');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Password and confirm password do not match.');
    tickIcon.style.display = 'none'; 
    return false;
  }

  tickIcon.style.display = 'inline'; 
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
