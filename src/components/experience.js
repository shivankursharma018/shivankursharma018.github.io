import cipherbytesLogo from '/exp-cipherbytes.jpg';
import celebalTechLogo from '/celebalTechLogo.jpg';

// export function experience() {
//     const contentDiv = document.getElementById('content');

//     const headBar = document.createElement('div');
//     headBar.id = "head-bar";
//     headBar.innerHTML = "experience";

//     contentDiv.appendChild(headBar);
// }
function createExperienceCard({ logo, company, dates, description }) {
    const card = document.createElement('div');
    card.classList.add('experience-card');

    // left side (logo + text)
    const left = document.createElement('div');
    left.classList.add('experience-left');

    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = `${company} logo`;
    logoImg.classList.add('experience-logo');

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('experience-text');

    const companyName = document.createElement('h3');
    companyName.classList.add('experience-company');
    companyName.textContent = company;

    const desc = document.createElement('p');
    desc.classList.add('experience-description');
    desc.textContent = description;

    textWrapper.append(companyName, desc);
    left.append(logoImg, textWrapper);

    // right side (dates)
    const right = document.createElement('div');
    right.classList.add('experience-right');

    const dateText = document.createElement('p');
    dateText.classList.add('experience-dates');
    dateText.textContent = dates;

    right.appendChild(dateText);

    // append to card
    card.append(left, right);
    return card;
}


export function experience() {
    const contentDiv = document.getElementById('content');
    
    // create a document fragment for performance
    const fragment = document.createDocumentFragment();
    
    // create and append the experience page container
    const experiencePage = document.createElement('div');
    experiencePage.id = "experience-page";
    fragment.appendChild(experiencePage);
    
    // I DONT NEED TO REPEAT ALL THIS STUFF, IT ALREADY IN THE NAVBAR!
    // // create and append the experience bar
    // const experienceBar = document.createElement('div');
    // experienceBar.id = "experience-bar";
    // experienceBar.textContent = "Experience";
    // experiencePage.appendChild(experienceBar);
    
    // example experience data (this can be dynamically fetched or passed as a parameter)
    const experienceData = [
        {
            logo: celebalTechLogo,
            title: 'Data Engineering Intern',
            company: 'Celebal Technologies',
            dates: 'Jun 2025 - Aug 2025',
            description: 'Built automated data pipelines with Azure Data Factory to ingest from REST APIs and relational databases into Azure Data Lake Storage. Implemented conditional data movement logic, parameter passing between pipelines and scheduled triggers twice daily, improving data ingestion efficiency and reliability.',
            codeLink: 'https://github.com/shivankursharma018/ADF-Data-Ingestion-Pipeline'
        },
        {
            logo: cipherbytesLogo,
            title: 'Intern Web Developer',
            company: 'CipherBytes Technologies',
            dates: 'Jul 2024 - Aug 2024',
            description: 'I gained hands-on experience in DOM manipulation, API integration, and responsive web design. This internship strengthened my frontend development skills and taught me practical approaches to creating interactive, user-friendly web applications.',
            liveLink: 'https://shivankursharma018.github.io/CBT-CIP/',
            codeLink: 'https://github.com/shivankursharma018/CBT-CIP/'
        },
        // {
        //     logo: 'path/to/logo2.jpg',
        //     title: 'Web Developer',
        //     company: 'Company Two',
        //     dates: 'Mar 2018 - Dec 2019',
        //     description: 'Built and maintained websites, ensuring optimal performance and responsiveness.',
        //     liveLink: 'https://companytwo.com',
        //     codeLink: 'https://github.com/companytwo'
        // },
    ];
    
    // Create and append experience cards
    experienceData.forEach(experience => {
        const experienceCard = createExperienceCard(experience);
        experiencePage.appendChild(experienceCard);
    });
    
    // Append the entire fragment to the DOM at once
    contentDiv.appendChild(fragment);
}