function toggleScrollToTopButton() {
  var button = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  // Get the current scroll position
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Calculate the scroll amount per frame (smaller value for a smoother effect)
  var scrollStep = Math.floor(-currentScroll / 30);

  // Function to scroll the page smoothly
  function scroll() {
    if (currentScroll > 0) {
      currentScroll += scrollStep;
      window.scrollTo(0, currentScroll);
      requestAnimationFrame(scroll);
    }
  }

  // Start the smooth scrolling animation
  scroll();
}

window.onscroll = toggleScrollToTopButton;
