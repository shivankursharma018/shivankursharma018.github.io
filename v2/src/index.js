import { home } from "./home";
import { projects } from "./projects";
import { skills } from "./skills";

document.addEventListener('DOMContentLoaded', () => {
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
        'projects-btn': projects,
        'skills-btn': skills
    };

    Object.keys(sections).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            contentDiv.innerHTML = "";
            resetBorders(document.getElementById(id));
            sections[id]();
        });
    });
});
