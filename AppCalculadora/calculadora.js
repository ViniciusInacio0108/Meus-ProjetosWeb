var Display = document.getElementById("Display")


function calcular(tipo, valor) {
    if (tipo === "acao") {
        if(valor === "ac") {
            Display.value = ""
        }

        if (valor === "=") {
            var valorCampo = Display.value
            Display.value = eval(valorCampo) // eval serve para ele pegar uma string e transfomar em leitura válida para js. ou seja, ele vai ler com a devida interpretacao do que é cada tipo de dado
            console.log(eval(valorCampo))
        }

        else if(valor === "*" || valor === '+' || valor === '-' || valor === '=' || valor === '.' || valor === '/') { 
            Display.value += valor
        }
    }

    else if (tipo === "num") {
        Display.value += valor
    }
}
