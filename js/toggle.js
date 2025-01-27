// Theme Toggle Script
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-button");
  const body = document.body;
  const toggleIcon = document.getElementById("toggle-icon");

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    toggleIcon.src =
      savedTheme === "light-mode"
        ? "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
        : "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
  } else {
    body.classList.add("dark-mode"); // Default theme
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("light-mode")) {
      toggleIcon.src = "https://img.icons8.com/ios-filled/50/000000/moon-symbol.png";
      localStorage.setItem("theme", "light-mode");
    } else {
      toggleIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png";
      localStorage.setItem("theme", "dark-mode");
    }
  });
});

 // Check for saved theme in localStorage
 const savedTheme = localStorage.getItem("theme");

 // Apply the saved theme or default to dark mode
 if (savedTheme) {
   document.body.className = savedTheme;
 } else {
   document.body.className = "dark-mode"; // Default to dark mode
 }

 // Function to toggle between themes
 function toggleTheme() {
   const currentTheme = document.body.className;
   const newTheme = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";

   document.body.className = newTheme; // Apply the new theme
   localStorage.setItem("theme", newTheme); // Save the theme to localStorage
 }



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 60; // Adjust this based on your navbar height
      const topPosition = target.offsetTop - offset;

      window.scrollTo({
          top: topPosition,
          behavior: 'smooth'
      });
  });
});



// Function to check if the element is in the viewport
function checkVisibility() {
  const projects = document.querySelector('#projects');
  const rect = projects.getBoundingClientRect();
  
  // Check if the element is in the viewport
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    projects.classList.add('visible');
  } else {
    projects.classList.remove('visible');
  }
}

// Run the function when the page loads and when the user scrolls
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);


document.querySelector(".dropdown-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  const content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const videoFile = button.getAttribute("data-video");
      const videoPageURL = `video.html?video=${encodeURIComponent(videoFile)}`;
      window.open(videoPageURL, "_blank");
    });
  });
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('nav ul').classList.toggle('active');
});

