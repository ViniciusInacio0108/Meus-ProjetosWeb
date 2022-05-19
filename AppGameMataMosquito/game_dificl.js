// altura e largura da tela

var altura = 0
var largura = 0

function tamanhoTelaGame() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

tamanhoTelaGame()

    // var contador e criar um loop para ir diminuindo e atualizando no DOM

var contador = 89 // quantidade varia com nivel da fase

function cronometro() { // funcao de cronometro ainda sem tirar vida por segundo
    setInterval(() => {
        document.getElementById("cronometro").textContent = "Tempo restante: "+contador
        console.log(contador)
        contador -= 1

        if (contador === 0) {
            document.location.href = "./vitoria.html"
        }
    }, 1000);
}



cronometro()

    // variavel mosca que vai receber a criacao do elemento dentro do DOM
    
var mosca = document.createElement("img") // elemento mosca criador

    // um func para spawnar a mosca quando chamada com todos os seus atributos

var vidas = 3

function criarMosca() {
    
    document.body.appendChild(mosca) // mosca criada dentro DOM
    mosca.src = "./imagens/mosca.png"
    mosca.style.width = ((Math.random() * 100) + 50) +"px"
    mosca.style.top = ((Math.random() * altura) - 150) +"px"
    mosca.style.left = ((Math.random() * largura) - 150) +"px"
    mosca.style.position = "absolute"
    mosca.id = "mosca"

    // colocar a mosca para n sair da tela
    if (mosca.style.left < "0") {
        mosca.style.left = "0"
    }

    if (mosca.style.top < "0") {
        mosca.style.top = "0"
    }

    console.log("tamanho da mosca: "+mosca.style.width)
    console.log("eixoX da mosca: "+mosca.style.left)
    console.log("eixoY da mosca: "+mosca.style.top)

    return mosca
}

    // func de spawn aleatorio

var vidas = 4 // coloquei 4 vidas pq ele sempre ta perdendo uma no inicio, entao eu corrigi assim

var clicado = false

function spawnAleatorio() {
    
    // se n existir criar
    if(document.getElementById("mosca") === null) {
        criarMosca()
    }

    // se existir verificar se clicou e contabilizar ou n os pontos
    else {
        mosca.addEventListener("click", e => {
            document.getElementById("mosca").parentNode.removeChild(document.getElementById("mosca"))
            vidas = vidas
            clicado = true
        })
        if (clicado === false){
            vidas -= 1
            document.getElementById("mosca").parentNode.removeChild(document.getElementById("mosca"))
        }
        else if (clicado === true) {
            clicado = false
        }
        
    }
}

// set interval para ficar rodando a func de spawn, fazendo com que ele fique um pouco na tela e repita a func de novo
setInterval(() => {
    spawnAleatorio()
    console.log(vidas)

    // coracoes cheio ou vazios
    if (vidas === 2) {
        document.getElementById("coracao3").src = "./imagens/coracao_vazio.png"
    }

    else if (vidas === 1) {
        document.getElementById("coracao2").src = "./imagens/coracao_vazio.png"
    }


    //se acabarem as vidas fim de game
    if (vidas === 0) {
        document.location.href = "./derrota.html"
    }
}, 2000); // aqui podemos controlar a duracao na tela como tambem a velocidade que ele aparece

