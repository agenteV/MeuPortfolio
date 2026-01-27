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
        heroTitle: "Olá, eu sou o Vitor 👋",
        heroText: "Apaixonado por tecnologia, desenvolvimento e inovação.",
        contactTitle: "Contato"
    },
    en: {
        heroTitle: "Hi, I'm Vitor 👋",
        heroText: "Passionate about technology, development and innovation.",
        contactTitle: "Contact"
    }
};

let currentLang = localStorage.getItem("lang") || "pt";
applyLanguage(currentLang);

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
});

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });

    langToggle.textContent = lang === "pt" ? "🇧🇷" : "🇺🇸";
}




// Fim do código JavaScript