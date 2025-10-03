import Img from '/profile.jpg';

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
    github.innerHTML = "GITHUB";

    const linkedin = document.createElement('a');
    linkedin.href = "https://www.linkedin.com/in/shivankursharma018/";
    linkedin.target = "_blank";
    linkedin.innerHTML = "LINKEDIN";

    const twitter = document.createElement('a');
    twitter.href = "https://x.com/sdotsharma018";
    twitter.target = "_blank";
    twitter.innerHTML = "X";

    const hashnode = document.createElement('a');
    hashnode.href = "https://hashnode.com/@shivankur/";
    hashnode.target = "_blank";
    hashnode.innerHTML = "HASHNODE";

    contacts.append(contactsBtn(github), contactsBtn(twitter), contactsBtn(linkedin), contactsBtn(hashnode));
    return contacts;
}

function resumeBtn() {
    const resumeBtn = document.createElement('button');
    resumeBtn.innerHTML = "RESUME";

    resumeBtn.addEventListener('click', () => {
        window.open("public/resume_shivankur.pdf", "_blank");
    });

    return resumeBtn;
}

const contentDiv = document.getElementById('content');
export function home() {
    // creates an off-screen container
    const fragment = document.createDocumentFragment();
    fragment.append(
        imgElement(),
        titleName(),
        description(),
        contacts(),
        resumeBtn()
    );

    // append everything at once
    contentDiv.innerHTML = "";
    contentDiv.appendChild(fragment);
}