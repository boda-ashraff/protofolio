const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

// Check if the user has a preference for dark mode or light mode
const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set the initial mode based on the user's preference or system setting
if (isDarkMode) {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

// Toggle between dark mode and light mode when the button is clicked
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
});

// Store the user's preference in local storage
const storedMode = localStorage.getItem("mode");
if (storedMode === "dark" || (storedMode === null && isDarkMode)) {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

// Update local storage whenever the mode is toggled
toggleButton.addEventListe