const content = document.getElementById("content")

export function projects(){

  content.innerHTML = ""

  const container = document.createElement("section")
  container.className = "section"

  const title = document.createElement("h2")
  title.textContent = "Projects"

  const grid = document.createElement("div")
  grid.className = "projects-grid"

  const projectData = [
    {
      name: "RSS Parser",
      image: "rss-parser.png",
      description: "Backend service converting RSS/XML feeds into clean JSON.",
      live: "https://rss-parser-plum.vercel.app/",
      code: "https://github.com/shivankursharma018/rss-parser/"
    },
    {
      name: "Plan Solo",
      image: "plan-solo.jpg",
      description: "Minimal task planner with categories and duration.",
      live: "https://plan-solo.vercel.app/",
      code: "https://github.com/shivankursharma018/plan-solo/"
    },
    {
      name: "Collab Draw",
      image: "collab-draw.jpg",
      description: "Real-time collaborative whiteboard using websockets.",
      live: "https://collab-draw-7yr3.onrender.com/",
      code: "https://github.com/shivankursharma018/collab-draw/"
    },
    {
      name: "Amazon Clone",
      image: "amazon-clone.jpg",
      description: "Frontend clone of Amazon UI.",
      live: "https://shivankursharma018.github.io/",
      code: "https://github.com/shivankursharma018/"
    },
    {
      name: "Py Photo Editor",
      image: "py-photo-editor.jpg",
      description: "Python GUI tool for editing images.",
      live: "https://github.com/shivankursharma018/py-photo-editor",
      code: "https://github.com/shivankursharma018/py-photo-editor"
    },
    {
      name: "Arduino Projects",
      image: "arduino.jpg",
      description: "Experiments with Arduino sensors and RC cars.",
      live: "https://github.com/shivankursharma018/Arduino-Workshop/",
      code: "https://github.com/shivankursharma018/Arduino-Workshop/"
    }
  ]

  projectData.forEach(project => {

    const card = document.createElement("div")
    card.className = "project-card"

    const img = document.createElement("img")
    img.src = `${import.meta.env.BASE_URL}images/projects/${project.image}`
    img.alt = project.name

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

  content.appendChild(container)

}