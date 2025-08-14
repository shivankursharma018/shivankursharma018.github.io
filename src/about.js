export function about() {
    const contentDiv = document.getElementById('content');

    const headBar = document.createElement('div');
    headBar.id = "head-bar";
    headBar.innerHTML = "about me";

    contentDiv.appendChild(headBar);
}