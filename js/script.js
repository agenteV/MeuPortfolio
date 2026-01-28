const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const skills = document.querySelectorAll(".skill-card");
// Tema salvo
const savedTheme = localStorage.getItem("theme");

// Tema do sistema
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "light" || (!savedTheme && !systemDark)) {
    root.classList.add("light");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    root.classList.toggle("light");
    const isLight = root.classList.contains("light");
    toggle.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});
// Animação de habilidades
let index = 0;
setInterval(() => {
    skills.forEach(skill => skill.classList.remove("active"));
    skills[index].classList.add("active");
    index = (index + 1) % skills.length;
}, 2000);
// Animação do cursor
const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
    light.style.top = `${e.clientY}px`;
    light.style.left = `${e.clientX}px`;
});

// Tradução simples
const langToggle = document.getElementById("lang-toggle");
const translations = {
    pt: {
        heroTitle: "Vitor Diamantino",
        heroSubtitle: "Dev Full Stack",
        heroText: "Apaixonado por tecnologia, desenvolvimento e inovação. Busco minha primeira oportunidade como estagiário em TI.",
        btnProjects: "Ver Projetos",
        btnContact: "Contato",

        skillsTitle: "Skills & Tecnologias",
        projectsTitle: "Projetos",
        experienceTitle: "Experiências",
        contactTitle: "Contato",
        footerText: "© 2026 — Desenvolvido por Vitor",
        aboutMe: "Sobre mim",
        textAboutMe1: "Sou estudante de Sistemas de Informação na FIAP School, com interesse em desenvolvimento e tecnologia. Ao longo da minha jornada acadêmica, participei de diversos projetos que me permitiram aplicar meus conhecimentos em lógica de programação, desenvolvimento web e análise de dados.",
        textAboutMe2: "Estou em busca da minha primeira oportunidade como estagiário em TI, onde posso contribuir com minhas habilidades e aprender ainda mais.",

        skilltextSQL: "Banco de dados, modelagem de dados e consultas.",
        skilltextCSS: "Criação de layouts modernos, responsivos e animados.",
        skilltextJS: "Lógica de programação, manipulação do DOM e interatividade.",
        skilltextJava: "Programação orientada a objetos, desenvolvimento web e mobile.",
        skilltextCsharp: "Desenvolvimento de aplicações desktop e web com .NET.",

        projectsH31: "Projeto de Gerenciamento de Compras",
        projectText1: "Aplicação web para gerenciar compras, com funcionalidades de adicionar, editar e remover itens.",
        projectsH32: "Projeto Acadêmico",
        projectText2: "Aplicação desenvolvida para aplicar conceitos de sistemas.",

        exH31: "Estágio em TI — FIAP School - 2024",
        exText1: "Apoio no desenvolvimento de projetos internos e manutenção de sistemas.",
        exH32: "HS Prevent - Auxiliar a Prevenção a Fraudes - 2025",
        exText2: "Análise de dados e identificação de padrões de fraude.",
    },

    en: {
        heroTitle: "Vitor Diamantino",
        heroSubtitle: "Dev Full Stack",
        heroText: "Passionate about technology, development, and innovation. Seeking my first opportunity as an IT Intern.",
        btnProjects: "View Projects",
        btnContact: "Contact",

        skillsTitle: "Skills & Technologies",
        projectsTitle: "Projects",
        experienceTitle: "Experience",
        contactTitle: "Contact",
        footerText: "© 2026 — Developed by Vitor",
        aboutMe: "About Me",
        textAboutMe1: "I am a Systems Information student at FIAP School, with an interest in development and technology. Throughout my academic journey, I have participated in various projects that allowed me to apply my knowledge in programming logic, web development, and data analysis.",
        textAboutMe2: "I am seeking my first opportunity as an IT intern, where I can contribute my skills and learn even more.",

        skilltextSQL: "Database, data modeling, and queries.",
        skilltextCSS: "Creating modern, responsive, and animated layouts.",
        skilltextJS: "Programming logic, DOM manipulation, and interactivity.",
        skilltextJava: "Object-oriented programming, web and mobile development.",
        skilltextCsharp: "Development of desktop and web applications with .NET.",

        projectsH31: "Purchase Management Project",
        projectText1: "Web application to manage purchases, with functionalities to add, edit, and remove items.",
        projectsH32: "Academic Project",
        projectText2: "Application developed to apply system concepts.",

        exH31: "IT Intern — FIAP School - 2024",
        exText1: "Support in the development of internal projects and system maintenance.",
        exH32: "HS Prevent - Fraud Prevention Assistant - 2025",
        exText2: "Data analysis and identification of fraud patterns.",
        
    }
};


const langIcon = langToggle.querySelector("img");

let currentLang = localStorage.getItem("lang") || "pt";

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    langIcon.src = lang === "pt"
        ? "/assets/Flag_of_Brazil.svg"
        : "/assets/Flag_of_the_United_States.svg";
}

applyLanguage(currentLang);

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
});






// Fim do código JavaScript