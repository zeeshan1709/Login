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
function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
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

const mobileInput = document.getElementById('mobile');


mobileInput.addEventListener('blur', function(event) {
  const mobileValue = event.target.value;

 
  const numericMobileValue = mobileValue.replace(/\D/g, '');

  if (mobileValue !== numericMobileValue) {
    alert('Mobile number should contain numeric digits only.');
    event.target.value = numericMobileValue; 
  }

  if (numericMobileValue.length !== 10) {
    alert('Mobile number should be 10 digits.');
  }
});


function updateProgressBar() {
  const progressBarWidth = (currentPage - 1) * 50;
  progress.style.width = `${progressBarWidth}%`;
}

function submitForm() {
  const universityInput = document.getElementById('university');
  const collegeInput = document.getElementById('college');
  const percentageInput = document.getElementById('percentage');

 
  if (universityInput.value.trim() === '' || collegeInput.value.trim() === '' || percentageInput.value.trim() === '') {
    alert('Please fill in all education details.');
    return; 
  }

}

