//get data from local storgae
let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");

//variables
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("editProfileForm");

//setting values of input
userInput.value = getUser;
userEmailInput.value = getEmail;

//events
editForm.addEventListener("submit", editProfileData);

function editProfileData(e) {
  e.preventDefault();
  localStorage.setItem("username", userInput.value);
  localStorage.setItem("email", userEmailInput.value);

  setTimeout(() => {
    window.location = "profile.html";
  }, 200);
}
