import Img from '../dist/assets/images/profile.jpg';

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