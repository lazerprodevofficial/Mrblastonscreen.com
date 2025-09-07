
$(document).ready(function () {
  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    $("body").addClass("dark-mode");
    $("#theme-toggle").text("Light Mode");
  } else {
    $("#theme-toggle").text("Dark Mode");
  }

  // Toggle on button click
  $("#theme-toggle").click(function () {
    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $(this).text("Light Mode");
      localStorage.setItem("theme", "dark");
    } else {
      $(this).text("Dark Mode");
      localStorage.setItem("theme", "light");
    }
  });
});


$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".nav-links").toggleClass("show");
  });

  // Optional: auto-hide menu after clicking a link
  $(".nav-links a").click(function () {
    $(".nav-links").removeClass("show");
  });
});
