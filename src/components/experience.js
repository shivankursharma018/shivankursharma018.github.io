// import cipherbytesLogo from '/experience/cipherbytes.jpg';
// import celebalTechLogo from '/celebalTechLogo.jpg';

// export function experience() {
//     const contentDiv = document.getElementById('content');

//     const headBar = document.createElement('div');
//     headBar.id = "head-bar";
//     headBar.innerHTML = "experience";

//     contentDiv.appendChild(headBar);
// }

function createExperienceCard({ logo, company, dates, description, codeLink }) {
    const card = document.createElement('div');
    card.classList.add('experience-card');

    // left side (logo + text)
    const left = document.createElement('div');
    left.classList.add('experience-left');

    const logoWrap = document.createElement('div');
    logoWrap.classList.add('experience-logo-wrap');

    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoImg.alt = `${company} logo`;
    logoImg.classList.add('experience-logo');

    logoWrap.appendChild(logoImg);

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('experience-text');

    const companyName = document.createElement('h3');
    companyName.classList.add('experience-company');
    companyName.textContent = company;

    const desc = document.createElement('p');
    desc.classList.add('experience-description');
    desc.textContent = description;

    textWrapper.append(companyName, desc);

    if (codeLink) {
        const code = document.createElement('a');
        code.href = codeLink;
        code.target = "_blank";
        code.rel = "noopener";
        code.classList.add('experience-code-link');
        code.textContent = "GitHub ↗";

        textWrapper.appendChild(code);
    }

    left.append(logoWrap, textWrapper);

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
            logo: `${import.meta.env.BASE_URL}images/experience/infySpringboard.png`,
            title: 'AIML Intern',
            company: 'Infosys Springboard',
            dates: 'Feb 2026 - Mar 2026',
            description: 'Engineered a full-stack AI platform using FastAPI and Streamlit to automate academic paper analysis. Integrated transformer models for section-wise summarization and developed heuristic algorithms for writing quality metrics.',
            codeLink: 'https://github.com/shivankursharma018/paper-iq'
        },
        {
            logo: `${import.meta.env.BASE_URL}images/experience/celebalTechLogo.jpg`,
            title: 'Data Engineering Intern',
            company: 'Celebal Technologies',
            dates: 'Jun 2025 - Aug 2025',
            description: 'Built automated data pipelines with Azure Data Factory to ingest from REST APIs and relational databases into Azure Data Lake Storage. Implemented conditional data movement logic, parameter passing between pipelines and scheduled triggers twice daily, improving data ingestion efficiency and reliability.',
            codeLink: 'https://github.com/shivankursharma018/ADF-Data-Ingestion-Pipeline'
        },
        {
            logo: `${import.meta.env.BASE_URL}images/experience/cipherbytes.jpg`,
            title: 'Intern Web Developer',
            company: 'CipherBytes Technologies',
            dates: 'Jul 2024 - Aug 2024',
            description: 'I gained hands-on experience in API integration, and responsive web design. This internship taught practical approaches to frontend development and UI skills.',
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