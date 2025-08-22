// Desenvolvido por Allan Hoffmann Trombim

let amigos = []
function adicionarAmigo(){
    let amigo = document.getElementById("amigo");
    const amigoPlaceHolder = amigo.placeholder;
    let verificaNumero = /\d/.test(amigo.value);

    if(amigo.value && !verificaNumero){
        
        amigos.push(amigo.value)
        amigo.value = "" 
        let listaAmigoshtml = document.getElementById("listaAmigos")
        let itemLista = document.createElement("li");

        itemLista.textContent = amigos.at(-1);
        listaAmigoshtml.append(itemLista);
    }else{

        amigo.classList.add('erro');
        amigo.placeholder = "Nome inválido"
        amigo.value = "";
        setTimeout(function() {
            amigo.classList.remove('erro');
            amigo.placeholder = amigoPlaceHolder;

        }, 1800); 
    }
    
}
function generateRandomNumber(initialNumber,finalNumber){
    let secretNumber = Math.floor(Math.random() * (finalNumber - initialNumber + 1)) + initialNumber;
    
    return secretNumber
  
}

function sortearAmigo(){

    let amigoSorteado = amigos[generateRandomNumber(0,amigos.length-1)]
    let indice = amigos.indexOf(amigoSorteado);
    let listaResultado = document.getElementById("resultado");
    let itemListaResultado = document.createElement("li");
    let listaAmigoshtml = document.getElementById("listaAmigos")

    
    
    itemListaResultado.textContent = amigoSorteado;
    if(amigos.length == 0){
        itemListaResultado.textContent = "Todos os nomes foram sorteados";
        listaResultado.style.color = "red"
        listaAmigoshtml.innerHTML = '';
    }
    listaResultado.append(itemListaResultado);

    listaAmigoshtml.style.display = "none";

    setTimeout(function() {
        listaAmigoshtml.style.display = "flex";
        itemListaResultado.remove();
        amigos.splice(indice,1)
        listaResultado.style.color = "#05DF05"

    }, 1250);
}
