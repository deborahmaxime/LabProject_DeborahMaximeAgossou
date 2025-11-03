

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const role = document.getElementById("role");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
   
    username.value = username.value.trim();
    role.value = role.value.trim();
    email.value = email.value.trim();
    password.value = password.value.trim();

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const rolePattern = /^[A-Za-z\s]+$/;

    const namePattern = /^[A-Za-z\s]+$/;
    
    if (
      username.value === "" || role.value === "" || email.value === "" || password.value === "") {

      alert("Please, fill all the fields");
      e.preventDefault();
      return;

    }

    

    if (!namePattern.test(username.value)) {

      alert("Username should only contain letters and spaces.");
      e.preventDefault();
      return;

    }

    

    if (!rolePattern.test(role.value)) {

      alert("Available roles are Student, Faculty or Faculty Intern");
      e.preventDefault();
      return;

    }

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (!emailPattern.test(email.value)) {

      alert("Please enter a valid email address.");
      e.preventDefault();
      return;

    }

   

    if (!strongPassword.test(password.value)) {
      alert(
        "Password must be at least 8 characters, with uppercase, lowercase, number, and special characters"
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
