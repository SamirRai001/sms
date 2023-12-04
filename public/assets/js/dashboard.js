// Dashoard toggle
$(document).ready(function () {
  $("#toggle-left-Button").click(function () {
    $("#left-sidebar").toggleClass("toggle-left-sidebar");
    $("#whole-content").toggleClass("toggle-whole-content");
    $(".s-f-name").toggleClass("toggle-s-f-name");
    $(".s-h-name").toggleClass("toggle-s-h-name");
    $(".dropdown-icon").toggleClass("dropdown-icon-toggle");
    $(".sidebar-drop-down").toggleClass("sidebar-drop-down-toggle");
  });
});

// Dropdown toggle
$(document).ready(function () {
  // Toggle dropdown on click
  $('ul li:has(ul)').click(function (e) {
    e.stopPropagation(); // Prevent parent link click

    // Close all other dropdowns
    $('ul li:has(ul) ul').not($(this).find('ul')).slideUp();
    $('ul li:has(ul)').not($(this)).find('.dropdown-icon').removeClass('open');

    // Toggle current dropdown and rotate icon
    $(this).find('ul').slideToggle();
    $(this).find('.dropdown-icon').toggleClass('open');
  });

  // Close dropdown on click outside
  $(document).click(function () {
    $('ul li:has(ul) ul').slideUp();
    $('ul li:has(ul) .dropdown-icon').removeClass('open');
  });
});

// Navbar drop down
function toggleDropdown() {
  var dropdownContent = document.getElementById("myDropdown");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}