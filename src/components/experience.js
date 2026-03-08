const experienceData = [
  {
      logo: `${import.meta.env.BASE_URL}images/experience/infySpringboard.png`,
      title: 'AIML Intern',
      company: 'Infosys Springboard',
      dates: 'Feb - Mar 2026',
      description: 'Helped team build an AI platform to automate academic paper analysis. Integrated transformer models for section-wise summarization and assessing quality metrics.',
      tools: ['Python', 'FastAPI', 'Streamlit', 'Transformers'],
      codeLink: 'https://github.com/shivankursharma018/paper-iq'
  },
  {
      logo: `${import.meta.env.BASE_URL}images/experience/celebalTechLogo.jpg`,
      title: 'Data Engineering Intern',
      company: 'Celebal Technologies',
      dates: 'Jun - Aug 2025',
      description: 'Built automated data pipelines with Azure Data Factory to ingest from REST APIs and relational databases into Azure Data Lake Storage. Implemented parameter passing between pipelines and scheduled triggers.',
      tools: ['SQL', 'Azure Data Factory', 'Databricks', 'Python', 'Pandas'],
      codeLink: 'https://github.com/shivankursharma018/ADF-Data-Ingestion-Pipeline'
  },
  {
      logo: `${import.meta.env.BASE_URL}images/experience/cipherbytes.jpg`,
      title: 'Intern Web Developer',
      company: 'CipherBytes Technologies',
      dates: 'Jul - Aug 2024',
      description: 'Gained hands-on experience in API integration, and responsive web design. This internship taught practical approaches to frontend development and UI skills.',
      tools: ['JavaScript', 'CSS', 'HTML', 'API'],
      codeLink: 'https://github.com/shivankursharma018/CBT-CIP/'
  },
]

export default function experience(){

  const section = document.createElement("section")
  section.className = "section"

  const title = document.createElement("h2")
  title.textContent = "Experience"

  const list = document.createElement("div")
  list.className = "experience-list"

    experienceData.forEach(exp => {

        const item = document.createElement("div")
        item.className = "experience-item"

        const dates = document.createElement("div")
        dates.className = "experience-dates"
        dates.textContent = exp.dates

        const title = document.createElement("div")
        title.className = "experience-title"
        title.textContent = exp.title

        const logo = document.createElement("img")
        logo.src = exp.logo

        const company = document.createElement("div")
        company.className = "experience-company"
        company.textContent = exp.company

        const desc = document.createElement("p")
        desc.className = "experience-description"
        desc.textContent = exp.description

        const tools = document.createElement("p")
        tools.className = "experience-tools"
        tools.textContent = exp.tools.join(` ${String.fromCharCode(183)} `);

        const link = document.createElement("a")
        link.className = "experience-link"
        link.href = exp.codeLink
        link.target = "_blank"
        link.textContent = "GitHub ↗"

        item.append(dates, title, logo, company, desc, tools, link)

        list.appendChild(item)
    })    
    section.append(title,list)

  return section
}