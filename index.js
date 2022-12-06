let firstname = "";
let lastname = "";
let email = "";
let address = "";
let phonenumber = "";
let password = "";

const containsLetter = (word) => {
  return /^[a-zA-Z]+$/.test(word);
};
const button = document.getElementById("submit-btn");

button.addEventListener("click", () => {
  firstname = document.getElementById("firstname").value;
  lastname = document.getElementById("lastname").value;
  email = document.getElementById("email").value;
  address = document.getElementById("address").value;
  phonenumber = document.getElementById("phonenumber").value;
  password = document.getElementById("password").value;

  if (
    firstname === "" ||
    lastname === "" ||
    address === "" ||
    phonenumber === "" ||
    email === "" ||
    password === ""
  ) {
    alert("Any Fields cannot be empty");
  }

  if (phonenumber.length !== 10) {
    alert("Enter Valid PhoneNumber");
  }
  if (!containsLetter(firstname)) {
    alert("Enter Valid First Name");
  }
  if (firstname.length < 6) {
    alert("First Name should not be less than 6 characters");
  }
  if (password.length < 6) {
    alert(" Password should not be less than 6 characters");
  }
  console.log("Mission Accomplished");
});
