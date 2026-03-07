export default function about(){

  const section = document.createElement("section")
  section.className = "section"

  const title = document.createElement("h2")
  title.textContent = "About"

  const text = document.createElement("p")
  text.textContent =
    "I'm Shivankur. A full-stack developer passionate about building clean, functional, and user-focused applications. " + 
    "I enjoy working with JavaScript, React, and exploring new technologies like AI & backend development. ";
    // "Beyond coding, I like solving real-world problems through creative solutions.";

  section.append(title,text)

  return section
}