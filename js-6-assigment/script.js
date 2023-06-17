function submitForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;

  alert("Submitted Data:\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email);
  
}

var mainContent = document.getElementById("main-content");

var childElements = mainContent.children;
for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i]);
}

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

document.getElementById("first-name").value = "Aiman";

document.getElementById("last-name").value = "Khan";
document.getElementById("email").value = "ummeaiman12@gmail.com";

var formContentElement = document.getElementById("form-content");
console.log("Node type of element with ID 'form-content':", formContentElement.nodeType);

var lastNameElement = document.getElementById("lastName");
console.log("Node type of element with ID 'lastName':", lastNameElement.nodeType);
console.log("Child node of element with ID 'lastName':", lastNameElement.firstChild.nodeType);
lastNameElement.firstChild.nodeValue = "Last Name: Updated Value";

var firstChild = mainContent.firstElementChild;
var lastChild = mainContent.lastElementChild;
console.log("First child of element with ID 'main-content':", firstChild);
console.log("Last child of element with ID 'main-content':", lastChild);
var nextSibling = lastNameElement.nextElementSibling;
var previousSibling = lastNameElement.previousElementSibling;
console.log("Next sibling of element with ID 'lastName':", nextSibling);
console.log("Previous sibling of element with ID 'lastName':", previousSibling);
var emailElement = document.getElementById("email");
var parentNode = emailElement.parentNode;
var nodeType = emailElement.nodeType;
console.log("Parent node of element with ID 'email':", parentNode);
console.log("Node type of element with ID 'email':", nodeType);