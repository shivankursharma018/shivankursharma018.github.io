import { home } from "./components/home.js";
import { projects } from "./components/projects.js";
import { experience } from "./components/experience.js";
import { about } from "./components/about.js";
// import backgroundImg from '/background.jpg';

const fill = document.getElementById("scroll-indicator-fill");

function updateScrollIndicator() {
  const scrollTop = window.scrollY;
  const max =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = max > 0 ? (scrollTop / max) * 100 : 0;

  fill.style.height = progress + "%";
}

window.addEventListener("scroll", updateScrollIndicator);
window.addEventListener("resize", updateScrollIndicator);

updateScrollIndicator();


document.addEventListener("DOMContentLoaded", () => {
    const bgUrl = `${import.meta.env.BASE_URL}images/background.jpg`;
    document.body.style.background = `url(${bgUrl}) no-repeat center center / cover`;
    home();

    const buttons = document.querySelectorAll('button');
    const contentDiv = document.getElementById('content');

    function resetBorders(activeButton) {
        buttons.forEach(btn => btn.style.border = "");
        activeButton.style.border = "2px dashed white";
        activeButton.style.transition = "border 0.3s ease";
    }

    const sections = {
        'home-btn': home,
        'experience-btn': experience,
        'projects-btn': projects,
        'about-btn': about
    };

    Object.keys(sections).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            contentDiv.innerHTML = "";
            resetBorders(document.getElementById(id));
            sections[id]();
        });
    });
});