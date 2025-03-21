import { home } from "./home";
import { projects } from "./projects";
import { experience } from "./experience";

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
        'experience-btn': experience,
        'projects-btn': projects
    };

    Object.keys(sections).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            contentDiv.innerHTML = "";
            resetBorders(document.getElementById(id));
            sections[id]();
        });
    });
});
