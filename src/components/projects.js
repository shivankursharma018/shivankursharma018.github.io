export const projectsData = [
  {
    name: "RSS Parser",
    image: "rss-parser.png",
    description: 'A Node.js/Express backend service that fetches, bypasses CORS, and converts raw RSS/XML feeds into clean, frontend-ready JSON.',
    live: 'https://rss-parser-plum.vercel.app/',
    code: 'https://github.com/shivankursharma018/rss-parser/'
  },
  {
    name: "Collab-Draw",
    image: "collab-draw.jpg",
    description: 'A real-time, collaborative whiteboard application designed to enable users to interact and draw together on a shared virtual canvas.',
    live: 'https://collab-draw-7yr3.onrender.com/',
    code: 'https://github.com/shivankursharma018/collab-draw/'
  },
  {
    name: "Plan-Solo",
    image: "plan-solo.jpg",
    description: 'Plan-Solo provides a sleek and intuitive UI for task management. Features include input fields for task description, duration, and category, as well as a dynamic task list.',
    live: 'https://plan-solo.vercel.app/',
    code: 'https://github.com/shivankursharma018/plan-solo/'
  },
  {
    name: "The Odin Project",
    image: "top.jpg",
    description: 'The Odin Project',
    live: 'https://shivankursharma018.github.io/Odin-FullStack-JS/',
    code: 'https://github.com/shivankursharma018/Odin-FullStack-JS/'
  },
  {
    name: "Potato Disease Classification System using CNNs",
    image: "potato-plant.jpg",
    description: 'Deep learning project aimed at accurate classification of Late blight and Early blight diseases affecting potato crops. The system utilizes CNNs to identify the presence of diseases.',
    live: 'https://potato-disease-classification-system.onrender.com/',
    code: 'https://github.com/shivankursharma018/Potato-Disease-Classification-System-using-Convolutional-Neural-Networks-CNN/'
  },
  {
    name: "NoddyBytes UI Design",
    image: "builds30figma.jpg",
    description: 'Group project, where I focused on designing the user interface for a food delivery app. Specifically, my role centered around creating the UI for the order page.',
    live: 'https://shivankursharma018.github.io/NoddyBytes/design.html',
    code: 'https://github.com/shivankursharma018/NoddyBytes/'
  },
  {
    name: "Arduino Projects",
    image: "arduino.jpg",
    description: 'Learned to use Arduino UNO. Made projects like remote-controlled cars and sensor lights. This helped me learn about electronics and programming.',
    live: 'https://github.com/shivankursharma018/Arduino-Workshop/',
    code: 'https://github.com/shivankursharma018/Arduino-Workshop/tree/main/Arduino-Workshop/5.%20RC%20car.ino'
  }
]

export function projects(){
  const container = document.createElement("section")
  container.className = "section"

  const title = document.createElement("h2")
  title.textContent = "Projects"

  const grid = document.createElement("div")
  grid.className = "projects-grid"

  projectsData.forEach(project => {
    const card = document.createElement("div")
    card.className = "project-card"

    const img = document.createElement("img")
    img.src = `${import.meta.env.BASE_URL}images/projects/${project.image}`
    img.alt = project.name
    img.className = "project-img"

    const name = document.createElement("h3")
    name.textContent = project.name

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
    card.append(img, name, desc, links)
    grid.appendChild(card)
  })

  container.append(title, grid)

  return container
}