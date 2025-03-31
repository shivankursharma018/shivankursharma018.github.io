import { home } from "./home.js";
import { projects } from "./projects.js";
import { experience } from "./experience.js";
import { about } from "./about.js";
import backgroundImg from './assets/images/background.jpg';

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.background = `url(${backgroundImg}) no-repeat center center/cover`;
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