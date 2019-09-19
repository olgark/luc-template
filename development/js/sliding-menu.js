/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
//function openNav() {
//  document.getElementById("mySidenav").style.width = "250px";
//  document.getElementById("main-wrapper").style.marginLeft = "250px";
//}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
//function closeNav() {
//  document.getElementById("mySidenav").style.width = "0";
//  document.getElementById("main-wrapper").style.marginLeft = "0";
//}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("SideNav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("SideNav").style.width = "0px";
}

// Get the input field
var input = document.getElementById("SideNavOpen");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("SideNavOpen").click();
  }
});

var sideNavEscape = "SideNav";
window.onkeyup = function (event) {
if (event.keyCode == 27) {
document.getElementById(sideNavEscape).style.width = "0px";
}
}
