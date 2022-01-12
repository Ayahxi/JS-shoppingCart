//get data from local storgae
let getUser = localStorage.getItem("username");
let getEmail = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((i) => i.isMe === "Y");

//variables
let userDom2 = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productsLength = document.querySelector("#productsLength span");
userDom2.innerHTML = getUser;
userEmailDom.innerHTML = getEmail;
if (myProducts.length != 0) {
  productsLength.innerHTML = myProducts.length;
} else {
  productsLength.remove();
}
