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
    
    // create and append the projects bar
    const projectsBar = document.createElement('div');
    projectsBar.id = "projects-bar";
    projectsBar.textContent = "Projects";
    projectsPage.appendChild(projectsBar);
    
    const projectData = [
        {
            image: 'path/to/image1.jpg',
            description: 'This is project 1 description.',
            liveLink: 'https://live-project1.com',
            codeLink: 'https://github.com/project1'
        },
        {
            image: 'path/to/image2.jpg',
            description: 'This is project 2 description.',
            liveLink: 'https://live-project2.com',
            codeLink: 'https://github.com/project2'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        },
        {
            image: 'path/to/image3.jpg',
            description: 'This is project 3 description.',
            liveLink: 'https://live-project3.com',
            codeLink: 'https://github.com/project3'
        }
    ];
    
    projectData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsPage.appendChild(projectCard);
    });
    
    contentDiv.appendChild(fragment);
}