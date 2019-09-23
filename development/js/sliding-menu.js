/* Set the width of the side navigation to 300px */
function openNav() {
  document.getElementById("SideNav").style.width = "300px";
  $(SideNav).keyup(function(event){
  	if (event.keyCode == 27){
  		// Close the modal/menu
  		$(modal_or_menu_element).closeElement();

          	//  Return focus to the element that invoked it
  		$('a[href=#SideNavOpen]').focus();
  	}
  });
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("SideNav").style.width = "0px";
}

// This code would be placed in the method that opens the modal/menu:
