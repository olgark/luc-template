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
  document.getElementById("SideNav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("SideNav").style.width = "0px";
}

var sideNavEscape = "SideNav";
window.onkeyup = function (event) {
if (event.keyCode == 27) {
document.getElementById(sideNavEscape).style.width = "0px";
}
}

var sideNavOpen = "SideNav";
window.onkeyup = function (event) {
if (event.keyCode == 27) {
document.getElementById(sideNavOpen).style.width = "250px";
}
}
