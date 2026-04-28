import { ReactLogo, JsLogo, openSource, JavaLogo, css, Spring, MySql, Ts, TailwindCss, Git, p1, p2, p3, p4, vscode, gmail, linkedIn, gitHub, resume, resumedDoc, logoAnimation, p5 } from "../assets/images"
export const ProjectData = [
    
    {
        "projectTitle": "CiniHub", "techStacks": [ReactLogo, TailwindCss, JsLogo, Git], "projectLogo": p1, "description":
            "Movie discovery platform with dynamic search and detailed movie information. Displays ratings, cast, plot, year, and posters with responsive clean UI.",
        "url": "https://cinihub.netlify.app/"
    }, {
        "projectTitle": "Employee Management System", "techStacks": [ReactLogo, TailwindCss, JsLogo, Spring, MySql, Git], "projectLogo": p2, "description":
            "Supports employee CRUD, salary updates, and attendance tracking with secure access to personal data.", "url": "https://github.com/Thamil001/Employee-Management-System/tree/main/Employee-Management-System"
    }, {
        "projectTitle": "React Development Folder Structure", "techStacks": [openSource, Ts, vscode, Git], "projectLogo": p3, "description":
            "VS Code extension that hides non-essential files and shows only important React folders.Improves productivity by focusing on core directories like src and public across React setups",
        "isOpenSource": true,
        "url": "https://open-vsx.org/extension/ThamilthennarasuM/rdfs"
    },
    {
        "projectTitle": "RepoPulz",
        "techStacks": [ReactLogo, TailwindCss,JsLogo,gitHub],
        "projectLogo": p5,
        "description": "A real-time GitHub Issue Tracker Dashboard that helps developers track, filter, and manage repository issues efficiently. It provides a centralized view of GitHub issues with features like authentication, real-time filtering, and protected routes, improving developer productivity and workflow clarity.",
        "url": "https://repopulz.netlify.app/"
    }
]

export const pictureData = [
    { "url": ReactLogo, "name": "React", "stackUrl": "https://react.dev/" },
    { "url": JsLogo, "name": "JavaScript", "stackUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { "url": JavaLogo, "name": "Java", "stackUrl": "https://dev.java/" },
    { "url": Spring, "name": "SpringBoot", "stackUrl": "https://spring.io/" },
    { "url": MySql, "name": "My Sql", "stackUrl": "https://www.mysql.com/" }
    , { "url": Ts, "name": "TypeScript", "stackUrl": "https://www.typescriptlang.org/" },
    { "url": TailwindCss, "name": "TailwindCss", "stackUrl": "https://tailwindcss.com/" },
    { "url": Git, "name": "Git", "stackUrl": "https://git-scm.com/" }
]

export const contactsPicData = [
    { "picture": gmail, "name": "gmail", "url": "https://mail.google.com/mail/?view=cm&fs=1&to=thamilthennarasu@gmail.com&su=Portfolio Contact" },
    { "picture": linkedIn, "name": "Linked In", "url": "https://www.linkedin.com/in/thamilthennarasu/" },
    { "picture": gitHub, "name": "Git Hub", "url": "https://github.com/Thamil001" },
    { "picture": resume, "name": "resume", "url": resumedDoc }
]

export const animation = {
    "url": logoAnimation
}
