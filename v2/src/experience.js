// export function experience() {
//     const contentDiv = document.getElementById('content');

//     const headBar = document.createElement('div');
//     headBar.id = "head-bar";
//     headBar.innerHTML = "experience";

//     contentDiv.appendChild(headBar);
// }
function createExperienceCard({ logo, title, company, dates, description, liveLink, codeLink }) {
    // Create the experience card container
    const experienceCard = document.createElement('div');
    experienceCard.classList.add('experience-card');
    
    // Create and append the company logo (optional)
    const experienceLogo = document.createElement('img');
    experienceLogo.src = logo;
    experienceLogo.alt = `${company} Logo`;
    experienceLogo.classList.add('experience-logo');
    
    // Create and append the job title
    const experienceTitle = document.createElement('h3');
    experienceTitle.classList.add('experience-title');
    experienceTitle.textContent = title;
    
    // Create and append the company name
    const experienceCompany = document.createElement('p');
    experienceCompany.classList.add('experience-company');
    experienceCompany.textContent = company;
    
    // Create and append the date range (e.g., Start and End dates)
    const experienceDates = document.createElement('p');
    experienceDates.classList.add('experience-dates');
    experienceDates.textContent = dates;
    
    // Create and append the description
    const experienceDescription = document.createElement('p');
    experienceDescription.classList.add('experience-description');
    experienceDescription.textContent = description;
    
    // Optionally, create and append links (e.g., Company website or GitHub repo)
    const experienceLinks = document.createElement('div');
    experienceLinks.classList.add('experience-links');
    
    const createLink = (href, text) => {
        const link = document.createElement('a');
        link.href = href;
        link.target = "_blank";
        link.textContent = text;
        return link;
    };
    
    // Create and append live and code links (if provided)
    if (liveLink) experienceLinks.appendChild(createLink(liveLink, 'View Live'));
    if (codeLink) experienceLinks.appendChild(createLink(codeLink, 'View Code'));
    
    // Append all child elements to the experience card
    experienceCard.append(experienceLogo, experienceTitle, experienceCompany, experienceDates, experienceDescription, experienceLinks);
    
    return experienceCard;
}

export function experience() {
    const contentDiv = document.getElementById('content');
    
    // Create a document fragment for performance
    const fragment = document.createDocumentFragment();
    
    // Create and append the experience page container
    const experiencePage = document.createElement('div');
    experiencePage.id = "experience-page";
    fragment.appendChild(experiencePage);
    
    // Create and append the experience bar
    const experienceBar = document.createElement('div');
    experienceBar.id = "experience-bar";
    experienceBar.textContent = "Experience";
    experiencePage.appendChild(experienceBar);
    
    // Example experience data (this can be dynamically fetched or passed as a parameter)
    const experienceData = [
        {
            logo: 'path/to/logo1.jpg',
            title: 'Software Engineer',
            company: 'Company One',
            dates: 'Jan 2020 - Dec 2021',
            description: 'Developed software solutions and collaborated with cross-functional teams to deliver high-quality products.',
            liveLink: 'https://companyone.com',
            codeLink: 'https://github.com/companyone'
        },
        {
            logo: 'path/to/logo2.jpg',
            title: 'Web Developer',
            company: 'Company Two',
            dates: 'Mar 2018 - Dec 2019',
            description: 'Built and maintained websites, ensuring optimal performance and responsiveness.',
            liveLink: 'https://companytwo.com',
            codeLink: 'https://github.com/companytwo'
        },
        {
            logo: 'path/to/logo3.jpg',
            title: 'Frontend Developer',
            company: 'Company Three',
            dates: 'Aug 2016 - Feb 2018',
            description: 'Focused on front-end development, including HTML, CSS, and JavaScript, to create seamless user experiences.',
            liveLink: 'https://companythree.com',
            codeLink: 'https://github.com/companythree'
        }
    ];
    
    // Create and append experience cards
    experienceData.forEach(experience => {
        const experienceCard = createExperienceCard(experience);
        experiencePage.appendChild(experienceCard);
    });
    
    // Append the entire fragment to the DOM at once
    contentDiv.appendChild(fragment);
}
