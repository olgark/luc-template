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

$("#information-button").click(function(){
  $("#information-menu").animate({
    right: '0px',
    opacity: '1'
  });
});

$("#information-button").mouseout(function(){
  $("#information-menu").animate({
    right: '-250px',
    opacity: '1'
  });
});
