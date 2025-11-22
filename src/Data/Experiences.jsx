import { FaBootstrap, FaCss3, FaFigma, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiCanva, SiTailwindcss, SiVite } from "react-icons/si";

// local img
const vs_code = './image/vs-code.png';
const git = './image/git.png';

const ExperienceData = [
    // Frontend
    {
        id: 1, url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: FaHtml5, color: "#E34F26", target: "_blank", category: "frontend", name: "HTML"
    },
    {
        id: 2, url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: FaCss3, color: "#1572b6", target: "_blank", category: "frontend", name: "CSS"
    },
    {
        id: 3, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: FaJs, color: "#F7DF1E", target: "_blank", category: "frontend", name: "JavaScript"
    },
    {
        id: 4, url: "https://getbootstrap.com/", icon: FaBootstrap, color: "#7952B3", target: "_blank", category: "frontend", name: "Bootstrap"
    },
    {
        id: 5, url: "https://react.dev/", icon: FaReact, color: "#61DAFB", target: "_blank", category: "frontend", name: "React"
    },
    {
        id: 6, url: "https://tailwindcss.com/", icon: SiTailwindcss, color: "#38B2AC", target: "_blank", category: "frontend", name: "Tailwind CSS"
    },
    {
        id: 7, url: "https://vitejs.dev/", icon: SiVite, color: "#646CFF", target: "_blank", category: "frontend", name: "Vite"
    },

    // Tools
    {
        id: 11, url: "https://www.figma.com/", icon: FaFigma, color: "rgb(181,125,171)", target: "_blank", category: "tools", name: "Figma"
    },
    {
        id: 12, url: "https://github.com/", icon: FaGithub, color: '#181717', target: "_blank", category: "tools", name: "GitHub"
    },
    {
        id: 13, url: "https://git-scm.com/", img: git, alt: 'git', width: 100, target: "_blank", category: "tools", name: "Git"
    },
    {
        id: 14, url: "https://www.canva.com/", icon: SiCanva, color: "#00C4CC", target: "_blank", category: "tools", name: "Canva"
    },
    {
        id: 15, img: vs_code, alt: "postmen", url: "https://code.visualstudio.com/", width: 100, target: "_blank", category: "tools", name: "Vs Code"
    },
];

export default ExperienceData;