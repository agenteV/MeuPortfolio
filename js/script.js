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

let index = 0;
setInterval(() => {
    skills.forEach(skill => skill.classList.remove("active"));
    skills[index].classList.add("active");
    index = (index + 1) % skills.length;
}, 2000);

// Fim do código JavaScript