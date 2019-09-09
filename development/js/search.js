function openSearch() {
  document.getElementById("search-overlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("search-overlay").style.display = "none";
}

$(document).keyup(function(e) {
  if (e.which == 27) {
    $(".overlay").fadeOut(300);
  }
});

//slide out
