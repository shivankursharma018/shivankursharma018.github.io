import about from './about.js'
import experience from './experience.js'
import { projectsData } from './projects.js'

const content = document.getElementById("content")

function hero() {
  const container = document.createElement("section")
  container.className = "hero"

  const imgHolder = document.createElement("div")
  imgHolder.className = "img-holder"

  const img = document.createElement("img")
  img.src = `${import.meta.env.BASE_URL}images/profile.jpg`
  img.className = "profile-img"
  imgHolder.appendChild(img)

  const heroText = document.createElement("div")
  heroText.className = "hero-text"

  const name = document.createElement("h2")
  name.textContent = "Shivankur Sharma"

  const contacts = document.createElement("a")
  contacts.className = "contacts"

  const socials = [
    [`Product focused developer - Github`,"https://github.com/shivankursharma018"],
    [`Sharing what i learn on X`,"https://x.com/sdotsharma018"]
  ]

  socials.forEach(([name,url])=>{
    const a = document.createElement("a")
    a.href = url
    a.textContent = name
    a.target = "_blank"
    contacts.appendChild(a)
  })

  heroText.append(name, contacts)
  container.append(imgHolder, heroText)
  return container
}


function topProjects() {
  const section = document.createElement("section")
  section.className = "section"

  const title = document.createElement("h2")
  title.textContent = "Selected Works"

  const grid = document.createElement("div")
  grid.className = "projects-grid"

  // take first 3 projects
  const projectData = projectsData.slice(0,3)

  projectData.forEach(project => {
    const card = document.createElement("div")
    card.className = "project-card"

    // card will span 2 columns
    card.style.gridColumn = "span 2";
    
    const img = document.createElement("img")
    img.src = `${import.meta.env.BASE_URL}images/projects/${project.image}`
    img.alt = project.name
    img.className = "project-img"

    const name = document.createElement("h3")
    name.textContent = project.name

    const tools = document.createElement("span")
    tools.textContent = project.tools ? `${project.tools.join(` ${String.fromCharCode(183)} `)}` : ""

    const desc = document.createElement("p")
    desc.textContent = project.description

    const links = document.createElement("div")
    links.className = "project-links"

    const live = document.createElement("a")
    live.href = project.live
    live.textContent = "Live"
    live.target = "_blank"

    const code = document.createElement("a")
    code.href = project.code
    code.textContent = "Code"
    code.target = "_blank"

    links.append(live, code)


    card.append(img, name, tools, desc, links)
    grid.appendChild(card)
  })

  section.append(title, grid)
  return section
}

// home page function
export function home() {
  content.innerHTML = ""

  const fragment = document.createDocumentFragment()
  fragment.append(
    hero(),
    about(),
    experience(),
    topProjects()
  )

  content.appendChild(fragment)
}