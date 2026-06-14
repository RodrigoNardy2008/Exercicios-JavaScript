function mostrarOcultar(){

    let texto = document.getElementById("texto");

    if(texto.style.display == "none"){
        texto.style.display = "block";
    }
    else{
        texto.style.display = "none";
    }
}

function mostrarTexto(){

    let valor =
    document.getElementById("campoTexto").value;

    document.getElementById("resultado").innerHTML =
    valor;
}

function limparTexto(){

    document.getElementById("resultado").innerHTML =
    "";
}

function respostaCorreta(){

    document.getElementById("mensagem").innerHTML =
    "Resposta correta!";
}

function respostaErrada(){

    document.getElementById("mensagem").innerHTML =
    "Resposta incorreta!";
}

function adicionarTarefa(){

    let texto =
    document.getElementById("tarefa").value;

    let item =
    document.createElement("li");

    item.textContent = texto;

    document.getElementById("lista")
    .appendChild(item);
}

function converter(){

    let celsius =
    Number(document.getElementById("celsius").value);

    let fahrenheit =
    (celsius * 9/5) + 32;

    document.getElementById("resultadoTemperatura")
    .innerHTML =
    fahrenheit + " °F";
}

function apagarSemaforo(){

    document.getElementById("vermelho")
    .style.backgroundColor = "gray";

    document.getElementById("amarelo")
    .style.backgroundColor = "gray";

    document.getElementById("verde")
    .style.backgroundColor = "gray";
}

function acenderVermelho(){

    apagarSemaforo();

    document.getElementById("vermelho")
    .style.backgroundColor = "red";
}

function acenderAmarelo(){

    apagarSemaforo();

    document.getElementById("amarelo")
    .style.backgroundColor = "yellow";
}

function acenderVerde(){

    apagarSemaforo();

    document.getElementById("verde")
    .style.backgroundColor = "green";
}

function gerarTabuada(){

    let numero =
    Number(document.getElementById("numero").value);

    let resultado = "";

    for(let i = 1; i <= 10; i++){

        resultado +=
        numero + " x " + i + " = " +
        (numero * i) + "<br>";
    }

    document.getElementById("tabuada")
    .innerHTML = resultado;
}