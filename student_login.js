

document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.querySelector("form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    
    email.value = email.value.trim();
    password.value = password.value.trim();

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    
    if (email.value === "" || password.value === "") {
      
      alert("All fields are required.");
      e.preventDefault();
      return;
      
    }



    if (!emailPattern.test(email.value)) {

      alert("Please enter a valid email address");
      e.preventDefault();

      return;
    }


    // Strong password validation
    // at least 8 characters long , with uppercase, lowercase, number, and special characters

    if (!strongPassword.test(password.value)) {

      alert(
        "Password must be at least 8 characters long , with uppercase, lowercase, number, and special characters"
      );
      e.preventDefault();

      return;
    }

    
    if (password.value.length < 8) {

      alert("Password must be at least 8 characters long");
      e.preventDefault();
      return;

    }


  });

});



