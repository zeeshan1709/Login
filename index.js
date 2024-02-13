document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const personalDetailsForm = document.getElementById("personal-details-form");
    const educationDetailsForm = document.getElementById("education-details-form");
    const registerBtn = document.getElementById("register-btn");
    const nextBtn = document.getElementById("next-btn");
    const submitBtn = document.getElementById("submit-btn");
    const prevPersonalBtn = document.getElementById("prev-personal-btn");
    const prevEducationBtn = document.getElementById("prev-education-btn");
  
   
    registerBtn.addEventListener("click", function () {
      
      registrationForm.style.display = "none";
      personalDetailsForm.style.display = "block";
    });
  
    
    nextBtn.addEventListener("click", function () {
      personalDetailsForm.style.display = "none";
      educationDetailsForm.style.display = "block";
    });
  

    prevPersonalBtn.addEventListener("click", function () {
      personalDetailsForm.style.display = "none";
      registrationForm.style.display = "block";
    });
  
    
    prevEducationBtn.addEventListener("click", function () {
      educationDetailsForm.style.display = "none";
      personalDetailsForm.style.display = "block";
    });
  

    submitBtn.addEventListener("click", function () {
      educationDetailsForm.style.display = "none";
      alert("Form submitted successfully!");
    });
  });
  