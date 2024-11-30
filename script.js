document.getElementById("showMessage").addEventListener("click", function() {
    var surpriseMessage = document.getElementById("surpriseMessage");
    surpriseMessage.style.display = "block";
});

document.getElementById("redirectButton").addEventListener("click", function() {
    // Redireciona para "pagina2.html"
    window.location.href = "pagina2.html";
});