// Create user constructor
function User(email, password, firstName, lastName, age, g1, g2, g3) {
  this.email = email;
  this.password = password;
  this.fName = firstName;
  this.lName = lastName;
  this.age = age;
  this.g1 = g1;
  this.g2 = g2;
  this.g3 = g3;

  this.getGPA = (Number(this.g1) + Number(this.g2) + Number(this.g3))/3;
}


// Get values from the inputs using jQuery
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGrade1 = $("#txtGrade1");
let inputGrade2 = $("#txtGrade2");
let inputGrade3 = $("#txtGrade3");


function isValid(aUser) {
  let validation = true;
  // Add your validation logic here
  return validation;
}

function validateUser() {
  var validation = true

    if (inputEmail.val() === "") {
      alert("Please enter a valid email address.");
      validation = false;
    }
    if (inputPassword.val() === "") {
      alert("Please enter a password.");
      validation = false;
    }
    if (inputFirstName.val() === "") {
      alert("Please enter your first name.");
      validation = false;
    }
    if (inputLastName.val() === "") {
      alert("Please enter your last name.");
      validation = false;
    }
    if (isNaN(inputAge.val() || user.age <= 0)) {
      alert("Please enter a valid age.");
      validation = false;
    }
    if (isNaN(inputGrade1.val()) || user.g1 < 0 || user.g1 > 4) {
      alert("Please enter a valid grade for CH39-102.");
      validation = false;
    }
    if (isNaN(inputGrade2.val() || user.g2 < 0 || user.g2 > 4)) {
      alert("Please enter a valid grade for CH39-103.");
      validation = false;
    }
    if (isNaN(inputGrade3.val()) || user.g3 < 0 || user.g3 > 4) {
      alert("Please enter a valid grade for CH39-104.");
      validation = false;
    }
    return validation;
}


function saveUser(user) {
  let userList = readUsers();
  userList.push(user);
  let val = JSON.stringify(userList);
  localStorage.setItem(KEY, val);
}

function register() {

  // Create new user
  let newUser = new User(
    inputEmail.val().trim(),
    inputPassword.val().trim(),
    inputFirstName.val().trim(),
    inputLastName.val().trim(),
    inputAge.val(),
    inputGrade1.val(),
    inputGrade2.val(),
    inputGrade3.val()
  );

  // Display the new user on the console
  console.log(newUser);

  // Save the user (implement the saveUser function)
  saveUser(newUser);
  // Clear the form after registration
  $('form')[0].reset();
}


function init() {
  // Bind the register function to the register button click event
  $("#registerBtn").click(register);
  $("main").on("click", function() {
    $("header").css({
      "background-color": "gray"
    });
  });
}

$(document).ready(init);
