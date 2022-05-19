function iniciar() {
    var nivel = document.getElementById("nivel")
    var selecione = document.getElementById("Selecione")

    if (document.getElementById("nivel").value === "Selecione") {
        alert("Precisa selecionar um nível de dificuldade!")
    }

    if (document.getElementById("nivel").value === "Normal") {
        window.location.href="./game_normal.html"
    }

    if (document.getElementById("nivel").value === "Dificil") {
        window.location.href="./game_dificil.html"
    }

    if (document.getElementById("nivel").value === "Chuck") {
        window.location.href="./game_chuck.html"
    }

}