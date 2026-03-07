import about from './about.js'
import experience from './experience.js'

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

  ///////////////
  const heroText = document.createElement("div")
  heroText.className = "hero-text"

  const name = document.createElement("h3")
  name.textContent = "Shivankur Sharma"

  const contacts = document.createElement("div")
  contacts.className = "contacts"

  const socials = [
    ["Github","https://github.com/shivankursharma018"],
    ["LinkedIn","https://www.linkedin.com/in/shivankursharma018"],
    ["X","https://x.com/sdotsharma018"]
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

export function home(){

  content.innerHTML = ""

  const fragment = document.createDocumentFragment()

  fragment.append(
    hero(),
    about(),
    experience(),
    // footer()
  )

  content.appendChild(fragment)
}