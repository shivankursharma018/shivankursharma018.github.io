import { home } from "./home";
import { projects } from "./projects";
import { skills } from "./skills";

document.addEventListener('DOMContentLoaded', () => {
    home();

    const homeBtn = document.getElementById('home-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const skillsBtn = document.getElementById('skills-btn');
    const contentDiv = document.getElementById('content');

    homeBtn.addEventListener('click', () => {
        contentDiv.innerHTML = "";
        home();
    });

    projectsBtn.addEventListener('click', () => {
        contentDiv.innerHTML = "";
        projects();
    });

    skillsBtn.addEventListener('click', () => {
        contentDiv.innerHTML = "";
        skills();
    });
});