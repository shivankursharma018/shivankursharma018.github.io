import Img from './assets/images/profile.jpg';
import backgroundImg from './assets/images/background.jpg';

function applyStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        #content {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 40px;
            text-align: center;
            backdrop-filter: blur(8px); /* Keeps content readable */
        }

        /* White Text */
        h1, p, a, button {
            color: white;
            text-decoration: none;
        }

        .profile-img {
            width: 250px;
            height: 200px;
            border-radius: 25px;
            object-fit: cover;
        }

        button {
            background: transparent;
            border: 2px solid white;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

function imgElement() {
    const imgElement = document.createElement('img');
    imgElement.classList.add('profile-img');
    imgElement.src = Img;
    imgElement.alt = "Profile Picture";
    return imgElement;
}

function titleName() {
    const titleName = document.createElement('h1');
    titleName.innerHTML = "Shivankur Sharma";
    return titleName;
}

function description() {
    const description = document.createElement('p');
    description.innerHTML = "I am a full stack developer";
    return description;
}

function contacts() {

    function contactsBtn(btnName) {
        const contactsBtn = document.createElement('button');
        contactsBtn.appendChild(btnName);
        return contactsBtn;
    }

    const contacts = document.createElement('div');
    const github = document.createElement('a');
    github.href = "https://github.com/shivankursharma018/";
    github.target = "_blank";
    github.innerHTML = "Github";

    const linkedin = document.createElement('a');
    linkedin.href = "https://www.linkedin.com/in/shivankursharma018/";
    linkedin.target = "_blank";
    linkedin.innerHTML = "LinkedIn";

    const hashnode = document.createElement('a');
    hashnode.href = "https://hashnode.com/@shivankur/";
    hashnode.target = "_blank";
    hashnode.innerHTML = "hashnode";

    contacts.append(contactsBtn(github), contactsBtn(linkedin), contactsBtn(hashnode));
    return contacts;
}

function resumeBtn() {
    const resumeBtn = document.createElement('button');
    resumeBtn.innerHTML = "Resume";
    return resumeBtn;
}

const contentDiv = document.getElementById('content');

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.background = `url(${backgroundImg}) no-repeat center center/cover`;
    applyStyles();
});

export function home() {
    const fragment = document.createDocumentFragment(); // Creates an off-screen container
    fragment.append(
        imgElement(),
        titleName(),
        description(),
        contacts(),
        resumeBtn()
    );
    contentDiv.innerHTML = "";
    contentDiv.appendChild(fragment); // appends everything at once
}