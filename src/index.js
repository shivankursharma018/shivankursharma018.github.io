import { home } from './components/home.js'
import { projects } from './components/projects.js'
import footer from './components/footer.js'

const homeBtn = document.getElementById("home-btn")
const projectsBtn = document.getElementById("projects-btn")
const themeBtn = document.getElementById("theme-toggle")

// Radial Theme Toggle Logic
themeBtn.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Set coordinates for CSS animation
  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);

  // Fallback for browsers that don't support the API
  if (!document.startViewTransition) {
    toggleTheme();
    return;
  }

  document.startViewTransition(() => toggleTheme());
});

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
}

// Navigation Logic
homeBtn.addEventListener("click", () => home())
projectsBtn.addEventListener("click", () => projects())

home()

// Mount footer
const footerContainer = document.getElementById("footer")
footerContainer.appendChild(footer())
