function validateForm() {

  // CLEAR ALL ERRORS
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("birthError").innerHTML = "";
  document.getElementById("sexError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("userError").innerHTML = "";
  document.getElementById("passError").innerHTML = "";
  document.getElementById("confirmError").innerHTML = "";
  document.getElementById("ecoError").innerHTML = "";
  document.getElementById("actionError").innerHTML = "";
  document.getElementById("effortError").innerHTML = "";
  document.getElementById("successMessage").innerHTML = "";

  let isValid = true;


// simple function for the event
function checkName() {
  let name = document.getElementById("fullname").value;
  if (name.length < 2) {
    document.getElementById("nameError").innerHTML = "Please enter at least 2 characters.";
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
}



  // PERSONAL INFORMATION
  let name = document.getElementById("fullname").value;
  if (name === "" || name.length < 2) {
    document.getElementById("nameError").innerHTML = "Enter at least 2 characters";
    isValid = false;
  }

  let birth = document.getElementById("birthdate").value;
  if (birth === "") {
    document.getElementById("birthError").innerHTML = "Required";
    isValid = false;
  }

  let sex = document.getElementsByName("sex");
  let chosenSex = false;

  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      chosenSex = true;
    }
  }

  if (chosenSex === false) {
    document.getElementById("sexError").innerHTML = "Select one";
    isValid = false;
  }

  // ACCOUNT DETAILS
  let email = document.getElementById("email").value;
  if (email === "" || email.includes("@") === false || email.includes(".") === false) {
    document.getElementById("emailError").innerHTML = "Invalid email";
    isValid = false;
  }

  let username = document.getElementById("username").value;
  if (username.length < 8 || username.length > 20) {
    document.getElementById("userError").innerHTML = "8–20 characters";
    isValid = false;
  }

  let password = document.getElementById("password").value;
  if (password.length < 10) {
    document.getElementById("passError").innerHTML = "At least 10 characters";
    isValid = false;
  }

  let confirm = document.getElementById("confirm").value;
  if (confirm !== password) {
    document.getElementById("confirmError").innerHTML = "Passwords do not match";
    isValid = false;
  }

  // TOPIC QUESTIONS
  let eco = document.getElementById("ecosystem").value;
  if (eco === "") {
    document.getElementById("ecoError").innerHTML = "Choose one";
    isValid = false;
  }

  let actions = document.getElementsByName("actions");
  let checked = false;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].checked) {
      checked = true;
    }
  }

  if (checked === false) {
    document.getElementById("actionError").innerHTML = "Select at least one";
    isValid = false;
  }

  let effort = document.getElementsByName("effort");
  let chosen = false;

  for (let i = 0; i < effort.length; i++) {
    if (effort[i].checked) {
      chosen = true;
    }
  }

  if (chosen === false) {
    document.getElementById("effortError").innerHTML = "Select one";
    isValid = false;
  }

  // SUCCESS MESSAGE
  if (isValid === true) {
    document.getElementById("successMessage").innerHTML = "🎉 Welcome to Wild&Green!";
  }

  // STOP PAGE RELOAD
  return false;



}
