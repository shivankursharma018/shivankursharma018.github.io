export default function footer() {
    const section = document.createElement("section")
    section.className = "section"

    const title = document.createElement("h2")
    title.textContent = "Links"

    const list = document.createElement("div")
    list.className = "link-list"
    // say that again :p

    const linksData = [
        {
            site: "Github",
            url: "https://github.com/shivankursharma018",
            userName: "@shivankursharma018 ↗"
        },
        {
            site: "E-Mail",
            url: "mailto:shivankursharma018@gmail.com",
            userName: "@shivankur sharma ↗"
        },
        {
            site: "Resume",
            url: "https://drive.google.com/file/d/1KAd7qCdW7BYvBluHnhxzLH40T2PIH_F3/view",
            userName: "drive link ↗"
        },
        {
            site: "LinkedIn",
            url: "https://www.linkedin.com/in/shivankursharma018",
            userName: "@Shivankur Sharma ↗"
        },
        {
            site: "Hashnode",
            url: "https://hashnode.com/@shivankur/",
            userName: "@shivankur ↗"
        }
    ]

    linksData.forEach(link => {

        const site = document.createElement("span")
        site.className = "footer-site"
        site.textContent = link.site

        const username = document.createElement("a")
        username.className = "footer-username"
        username.href = link.url
        username.textContent = link.userName
        username.target = "_blank"

        list.append(site, username)
    })
    
    section.append(title, list)
    return section
}