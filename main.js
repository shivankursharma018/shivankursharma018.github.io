/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nfunction about() {\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    const headBar = document.createElement('div');\r\n    headBar.id = \"head-bar\";\r\n    headBar.innerHTML = \"about me\";\r\n\r\n    contentDiv.appendChild(headBar);\r\n}\n\n//# sourceURL=webpack://v2/./src/about.js?");

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3421fcaf704e87f05b5d.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/background.jpg?");

/***/ }),

/***/ "./src/assets/images/profile.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/profile.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4e082b938e305dcd903.jpg\";\n\n//# sourceURL=webpack://v2/./src/assets/images/profile.jpg?");

/***/ }),

/***/ "./src/experience.js":
/*!***************************!*\
  !*** ./src/experience.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experience: () => (/* binding */ experience)\n/* harmony export */ });\n// export function experience() {\r\n//     const contentDiv = document.getElementById('content');\r\n\r\n//     const headBar = document.createElement('div');\r\n//     headBar.id = \"head-bar\";\r\n//     headBar.innerHTML = \"experience\";\r\n\r\n//     contentDiv.appendChild(headBar);\r\n// }\r\nfunction createExperienceCard({ logo, title, company, dates, description, liveLink, codeLink }) {\r\n    // Create the experience card container\r\n    const experienceCard = document.createElement('div');\r\n    experienceCard.classList.add('experience-card');\r\n    \r\n    // Create and append the company logo (optional)\r\n    const experienceLogo = document.createElement('img');\r\n    experienceLogo.src = logo;\r\n    experienceLogo.alt = `${company} Logo`;\r\n    experienceLogo.classList.add('experience-logo');\r\n    \r\n    // Create and append the job title\r\n    const experienceTitle = document.createElement('h3');\r\n    experienceTitle.classList.add('experience-title');\r\n    experienceTitle.textContent = title;\r\n    \r\n    // Create and append the company name\r\n    const experienceCompany = document.createElement('p');\r\n    experienceCompany.classList.add('experience-company');\r\n    experienceCompany.textContent = company;\r\n    \r\n    // Create and append the date range (e.g., Start and End dates)\r\n    const experienceDates = document.createElement('p');\r\n    experienceDates.classList.add('experience-dates');\r\n    experienceDates.textContent = dates;\r\n    \r\n    // Create and append the description\r\n    const experienceDescription = document.createElement('p');\r\n    experienceDescription.classList.add('experience-description');\r\n    experienceDescription.textContent = description;\r\n    \r\n    // Optionally, create and append links (e.g., Company website or GitHub repo)\r\n    const experienceLinks = document.createElement('div');\r\n    experienceLinks.classList.add('experience-links');\r\n    \r\n    const createLink = (href, text) => {\r\n        const link = document.createElement('a');\r\n        link.href = href;\r\n        link.target = \"_blank\";\r\n        link.textContent = text;\r\n        return link;\r\n    };\r\n    \r\n    // Create and append live and code links (if provided)\r\n    if (liveLink) experienceLinks.appendChild(createLink(liveLink, 'View Live'));\r\n    if (codeLink) experienceLinks.appendChild(createLink(codeLink, 'View Code'));\r\n    \r\n    // Append all child elements to the experience card\r\n    experienceCard.append(experienceLogo, experienceTitle, experienceCompany, experienceDates, experienceDescription, experienceLinks);\r\n    \r\n    return experienceCard;\r\n}\r\n\r\nfunction experience() {\r\n    const contentDiv = document.getElementById('content');\r\n    \r\n    // Create a document fragment for performance\r\n    const fragment = document.createDocumentFragment();\r\n    \r\n    // Create and append the experience page container\r\n    const experiencePage = document.createElement('div');\r\n    experiencePage.id = \"experience-page\";\r\n    fragment.appendChild(experiencePage);\r\n    \r\n    // Create and append the experience bar\r\n    const experienceBar = document.createElement('div');\r\n    experienceBar.id = \"experience-bar\";\r\n    experienceBar.textContent = \"Experience\";\r\n    experiencePage.appendChild(experienceBar);\r\n    \r\n    // Example experience data (this can be dynamically fetched or passed as a parameter)\r\n    const experienceData = [\r\n        {\r\n            logo: 'path/to/logo1.jpg',\r\n            title: 'Software Engineer',\r\n            company: 'Company One',\r\n            dates: 'Jan 2020 - Dec 2021',\r\n            description: 'Developed software solutions and collaborated with cross-functional teams to deliver high-quality products.',\r\n            liveLink: 'https://companyone.com',\r\n            codeLink: 'https://github.com/companyone'\r\n        },\r\n        {\r\n            logo: 'path/to/logo2.jpg',\r\n            title: 'Web Developer',\r\n            company: 'Company Two',\r\n            dates: 'Mar 2018 - Dec 2019',\r\n            description: 'Built and maintained websites, ensuring optimal performance and responsiveness.',\r\n            liveLink: 'https://companytwo.com',\r\n            codeLink: 'https://github.com/companytwo'\r\n        },\r\n        {\r\n            logo: 'path/to/logo3.jpg',\r\n            title: 'Frontend Developer',\r\n            company: 'Company Three',\r\n            dates: 'Aug 2016 - Feb 2018',\r\n            description: 'Focused on front-end development, including HTML, CSS, and JavaScript, to create seamless user experiences.',\r\n            liveLink: 'https://companythree.com',\r\n            codeLink: 'https://github.com/companythree'\r\n        }\r\n    ];\r\n    \r\n    // Create and append experience cards\r\n    experienceData.forEach(experience => {\r\n        const experienceCard = createExperienceCard(experience);\r\n        experiencePage.appendChild(experienceCard);\r\n    });\r\n    \r\n    // Append the entire fragment to the DOM at once\r\n    contentDiv.appendChild(fragment);\r\n}\r\n\n\n//# sourceURL=webpack://v2/./src/experience.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _assets_images_profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/profile.jpg */ \"./src/assets/images/profile.jpg\");\n\r\n\r\nfunction imgElement() {\r\n    const imgElement = document.createElement('img');\r\n    imgElement.classList.add('profile-img');\r\n    imgElement.src = _assets_images_profile_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    imgElement.alt = \"Profile Picture\";\r\n    return imgElement;\r\n}\r\n\r\nfunction titleName() {\r\n    const titleName = document.createElement('h1');\r\n    titleName.innerHTML = \"Shivankur Sharma\";\r\n    return titleName;\r\n}\r\n\r\nfunction description() {\r\n    const description = document.createElement('p');\r\n    description.innerHTML = \"I am a full stack developer\";\r\n    return description;\r\n}\r\n\r\nfunction contacts() {\r\n\r\n    function contactsBtn(btnName) {\r\n        const contactsBtn = document.createElement('button');\r\n        contactsBtn.appendChild(btnName);\r\n        return contactsBtn;\r\n    }\r\n\r\n    const contacts = document.createElement('div');\r\n    const github = document.createElement('a');\r\n    github.href = \"https://github.com/shivankursharma018/\";\r\n    github.target = \"_blank\";\r\n    github.innerHTML = \"Github\";\r\n\r\n    const linkedin = document.createElement('a');\r\n    linkedin.href = \"https://www.linkedin.com/in/shivankursharma018/\";\r\n    linkedin.target = \"_blank\";\r\n    linkedin.innerHTML = \"LinkedIn\";\r\n\r\n    const hashnode = document.createElement('a');\r\n    hashnode.href = \"https://hashnode.com/@shivankur/\";\r\n    hashnode.target = \"_blank\";\r\n    hashnode.innerHTML = \"hashnode\";\r\n\r\n    contacts.append(contactsBtn(github), contactsBtn(linkedin), contactsBtn(hashnode));\r\n    return contacts;\r\n}\r\n\r\nfunction resumeBtn() {\r\n    const resumeBtn = document.createElement('button');\r\n    resumeBtn.innerHTML = \"Resume\";\r\n    return resumeBtn;\r\n}\r\n\r\nconst contentDiv = document.getElementById('content');\r\nfunction home() {\r\n    const fragment = document.createDocumentFragment(); // Creates an off-screen container\r\n    fragment.append(\r\n        imgElement(),\r\n        titleName(),\r\n        description(),\r\n        contacts(),\r\n        resumeBtn()\r\n    );\r\n    contentDiv.innerHTML = \"\";\r\n    contentDiv.appendChild(fragment); // appends everything at once\r\n}\n\n//# sourceURL=webpack://v2/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _experience_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.js */ \"./src/experience.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/background.jpg */ \"./src/assets/images/background.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    document.body.style.background = `url(${_assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_4__}) no-repeat center center/cover`;\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();\r\n\r\n    const buttons = document.querySelectorAll('button');\r\n    const contentDiv = document.getElementById('content');\r\n\r\n    function resetBorders(activeButton) {\r\n        buttons.forEach(btn => btn.style.border = \"\");\r\n        activeButton.style.border = \"2px dashed white\";\r\n        activeButton.style.transition = \"border 0.3s ease\";\r\n    }\r\n\r\n    const sections = {\r\n        'home-btn': _home_js__WEBPACK_IMPORTED_MODULE_0__.home,\r\n        'experience-btn': _experience_js__WEBPACK_IMPORTED_MODULE_2__.experience,\r\n        'projects-btn': _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects,\r\n        'about-btn': _about_js__WEBPACK_IMPORTED_MODULE_3__.about\r\n    };\r\n\r\n    Object.keys(sections).forEach(id => {\r\n        document.getElementById(id).addEventListener('click', () => {\r\n            contentDiv.innerHTML = \"\";\r\n            resetBorders(document.getElementById(id));\r\n            sections[id]();\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://v2/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\nfunction createProjectCard({ image, description, liveLink, codeLink }) {\r\n    // create the project card container\r\n    const projectCard = document.createElement('div');\r\n    projectCard.classList.add('project-card');\r\n    \r\n    // create and append the project image\r\n    const projectImage = document.createElement('img');\r\n    projectImage.src = image;\r\n    projectImage.alt = \"Project image\";\r\n    projectImage.classList.add('project-image');\r\n    \r\n    // create and append the project description\r\n    const projectDescription = document.createElement('p');\r\n    projectDescription.textContent = description;\r\n    projectDescription.classList.add('project-description');\r\n    \r\n    // create and append the links (Live and Code)\r\n    const projectLinks = document.createElement('div');\r\n    projectLinks.classList.add('project-links');\r\n    \r\n    const createLink = (href, text) => {\r\n        const link = document.createElement('a');\r\n        link.href = href;\r\n        link.target = \"_blank\";\r\n        link.textContent = text;\r\n        return link;\r\n    };\r\n    \r\n    projectLinks.append(createLink(liveLink, \"View Live\"), createLink(codeLink, \"View Code\"));\r\n    projectCard.append(projectImage, projectDescription, projectLinks);\r\n    \r\n    return projectCard;\r\n}\r\n\r\nfunction projects() {\r\n    const contentDiv = document.getElementById('content');\r\n    \r\n    // create a document fragment for performance\r\n    const fragment = document.createDocumentFragment();\r\n    \r\n    // create and append the projects page container\r\n    const projectsPage = document.createElement('div');\r\n    projectsPage.id = \"projects-page\";\r\n    fragment.appendChild(projectsPage);\r\n    \r\n    // create and append the projects bar\r\n    const projectsBar = document.createElement('div');\r\n    projectsBar.id = \"projects-bar\";\r\n    projectsBar.textContent = \"Projects\";\r\n    projectsPage.appendChild(projectsBar);\r\n    \r\n    const projectData = [\r\n        {\r\n            image: 'path/to/image1.jpg',\r\n            description: 'This is project 1 description.',\r\n            liveLink: 'https://live-project1.com',\r\n            codeLink: 'https://github.com/project1'\r\n        },\r\n        {\r\n            image: 'path/to/image2.jpg',\r\n            description: 'This is project 2 description.',\r\n            liveLink: 'https://live-project2.com',\r\n            codeLink: 'https://github.com/project2'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        },\r\n        {\r\n            image: 'path/to/image3.jpg',\r\n            description: 'This is project 3 description.',\r\n            liveLink: 'https://live-project3.com',\r\n            codeLink: 'https://github.com/project3'\r\n        }\r\n    ];\r\n    \r\n    projectData.forEach(project => {\r\n        const projectCard = createProjectCard(project);\r\n        projectsPage.appendChild(projectCard);\r\n    });\r\n    \r\n    contentDiv.appendChild(fragment);\r\n}\n\n//# sourceURL=webpack://v2/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;