export function about() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  // page container
  const aboutPage = document.createElement('div');
  aboutPage.id = 'about-page';
  aboutPage.className = 'about-container';

  // heading - DO I NEED ONE???
  const heading = document.createElement('h2');
  heading.textContent = 'About Me';
  heading.className = 'about-heading';

  // profile text
  const aboutText = document.createElement('p');
  aboutText.className = 'about-text';
  aboutText.textContent =
    "Hi, I'm Shivankur Sharma, a full-stack developer passionate about building " +
    "clean, functional, and user-focused applications. I enjoy working with " +
    "JavaScript, React, and exploring new technologies like AI & backend development. " +
    "Beyond coding, I like solving real-world problems through creative solutions.";

  // skills title
  const skillsTitle = document.createElement('h3');
  skillsTitle.textContent = 'Skills & Interests';
  skillsTitle.className = 'skills-title';

  // skills list container
  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-container';

  const skills = [
  // Programming Languages
  { name: 'Python', icon: 'logos:python' },
  { name: 'JavaScript', icon: 'logos:javascript' },
  { name: 'C', icon: 'logos:c' },
  { name: 'C++', icon: 'logos:c-plusplus' },

  // Web Development
  { name: 'HTML', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'React.js', icon: 'logos:react' },
  { name: 'Next.js', icon: 'logos:nextjs-icon' },
  { name: 'Node.js', icon: 'logos:nodejs-icon' },
  { name: 'Vite', icon: 'logos:vitejs' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },

  // Databases
  { name: 'MongoDB', icon: 'logos:mongodb' },
  { name: 'Firebase', icon: 'logos:firebase' },
  { name: 'MySQL', icon: 'logos:mysql' },

  // APIs & Backend
  { name: 'REST API', icon: 'logos:rest' },
  { name: 'FastAPI', icon: 'logos:fastapi' },
  { name: 'Socket.io', icon: 'logos:socket-io' },

  // Tools & Platforms
  { name: 'Postman', icon: 'logos:postman-icon' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Linux', icon: 'logos:linux-tux' },
  { name: 'Azure', icon: 'logos:microsoft-azure' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'GSAP', icon: 'logos:greensock' },

  // Data Science & AI
  { name: 'NumPy', icon: 'logos:numpy' },
  { name: 'Pandas', icon: 'logos:pandas' },
  { name: 'Scikit-learn', icon: 'logos:scikit-learn' },
  { name: 'PyTorch', icon: 'logos:pytorch' },
  { name: 'Streamlit', icon: 'logos:streamlit' },
];

  // sauce?? check mine https://gitroll.io/profile/s98PIhgKu6jBbGtLGJsUT/stacks

  // create skill items
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
      <iconify-icon icon="${skill.icon}" width="24" height="24"></iconify-icon>
      <span>${skill.name}</span>
    `;
    skillsContainer.appendChild(skillItem);
  });

  // append everything
  aboutPage.append(heading, aboutText, skillsTitle, skillsContainer);
  contentDiv.appendChild(aboutPage);
}
