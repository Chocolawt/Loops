var classroom = {
name: "Mr. Howard Kam", 
class: "F103",
students:18
};
var userInput = prompt ("name", "class", "students");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "name") || (lowerCase === "class") || (lowerCase === "students")) {
window.alert(classroom[lowerCase]);
}
else {
	askAgain();
}
function askAgain() {
var classroom = {
name: "Mr. Howard Kam", 
class: "F103",
students:18
};
var userInput = prompt ("name", "class", "students");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "name") || (lowerCase === "class") || (lowerCase === "students")) {
window.alert(classroom[lowerCase]);
}
else {
	askAgain();
}
}
