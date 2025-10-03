import builds30figma from '/projects-builds30figma.jpg';
import arduino from '/projects-arduino.jpg';
import amazonClone from '/projects-amazon-clone.jpg';
import cs50x from '/projects-CS50x.jpg';
import pyPhotoEditor from '/projects-py-photo-editor.jpg';
import potatoProject from '/projects-potato-project.jpg';
import planSolo from '/projects-plan-solo.jpg';
import collabDraw from '/projects-collab-draw.jpg';
import top from '/projects-top.jpg';

function createProjectCard({ image, description, liveLink, codeLink }) {
    // create the project card container
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
    // create and append the project image
    const projectImage = document.createElement('img');
    projectImage.src = image;
    projectImage.alt = "Project image";
    projectImage.classList.add('project-image');
    
    // create and append the project description
    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    projectDescription.classList.add('project-description');
    
    // create and append the links (Live and Code)
    const projectLinks = document.createElement('div');
    projectLinks.classList.add('project-links');
    
    const createLink = (href, text) => {
        const link = document.createElement('a');
        link.href = href;
        link.target = "_blank";
        link.textContent = text;
        return link;
    };
    
    projectLinks.append(createLink(liveLink, "View Live"), createLink(codeLink, "View Code"));
    projectCard.append(projectImage, projectDescription, projectLinks);
    
    return projectCard;
}

export function projects() {
    const contentDiv = document.getElementById('content');
    
    // create a document fragment for performance
    const fragment = document.createDocumentFragment();
    
    // create and append the projects page container
    const projectsPage = document.createElement('div');
    projectsPage.id = "projects-page";
    fragment.appendChild(projectsPage);
    

    // I DONT NEED TO REPEAT ALL THIS STUFF, IT ALREADY IN THE NAVBAR!
    // // create and append the projects bar
    // const projectsBar = document.createElement('div');
    // projectsBar.id = "projects-bar";
    // projectsBar.textContent = "Projects";
    // projectsPage.appendChild(projectsBar);
    
    const projectData = [
        {
            image: planSolo,
            description: 'Plan-Solo provides a sleek and intuitive UI for task management. Features include input fields for task description, duration, and category, as well as a dynamic task list.',
            liveLink: 'https://plan-solo.vercel.app/',
            codeLink: 'https://github.com/shivankursharma018/plan-solo/'
        },
        {
            image: collabDraw,
            description: 'The "Collab-Draw" project is a real-time, collaborative whiteboard application designed to enable users to interact and draw together on a shared virtual canvas. This project aims to address the increasing need for online collaboration tools, especially in environments such as education, professional brainstorming sessions, and creative design.',
            liveLink: 'https://collab-draw-7yr3.onrender.com/',
            codeLink: 'https://github.com/shivankursharma018/collab-draw/'
        },
        {
            image: top,
            description: 'The Odin Project',
            liveLink: 'https://shivankursharma018.github.io/Odin-FullStack-JS/',
            codeLink: 'https://github.com/shivankursharma018/Odin-FullStack-JS/'
        },
        {
            image: potatoProject,
            description: 'Potato Disease Classification System is a project aimed at developing a deep learning model to accurately classify Late blight and Early blight diseases affecting potato crops. The system utilizes Convolutional Neural Networks (CNNs) to analyze images of potato plants and identify the presence of diseases.',
            liveLink: 'https://potato-disease-classification-system.onrender.com/',
            codeLink: 'https://github.com/shivankursharma018/Potato-Disease-Classification-System-using-Convolutional-Neural-Networks-CNN/'
        },
        {
            image: builds30figma,
            description: 'Group project, where I focused on designing the user interface for a food delivery app. Specifically, my role centered around creating the UI for the order page.',
            liveLink: 'https://shivankursharma018.github.io/NoddyBytes/design.html/',
            codeLink: 'https://github.com/shivankursharma018/NoddyBytes/'
        },
        {
            image: arduino,
            description: 'I learned to use Arduino UNO. Made projects like remote-controlled cars and sensor lights. This helped me learn about electronics and programming.',
            liveLink: 'https://github.com/shivankursharma018/Arduino-Workshop/',
            codeLink: 'https://github.com/shivankursharma018/Arduino-Workshop/tree/main/Arduino-Workshop/5.%20RC%20car.ino'
        },
    ];
    
    projectData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsPage.appendChild(projectCard);
    });
    
    contentDiv.appendChild(fragment);
}