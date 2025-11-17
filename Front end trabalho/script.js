
if (!localStorage.getItem("visited")) {
    alert("Bem-vindo ao site da NOVA! 🚀");
    localStorage.setItem("visited", "true");
}

// Modo escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
