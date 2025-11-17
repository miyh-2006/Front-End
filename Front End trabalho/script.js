
if (!localStorage.getItem("visited")) {
    alert("Bem-vindo ao site da NOVA! 🚀");
    localStorage.setItem("visited", "true");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
function toggleConteudo() {
    const box = document.getElementById("conteudo-extra");

    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
