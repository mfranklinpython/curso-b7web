function digitou(e) {
    if(e.keyCode == 13) { //keyCode 13 é a tecla Enter
        let texto = document.getElementById("campo").value;
        
        console.log(texto);
    }
}

function azul(){
    limpar()
    document.getElementById("titulo").classList.add('azul');
    //document.getElementById("titulo").classList.remove('vermelho');
    //document.getElementById("titulo").classList.remove('verde');
}
function vermelho(){
    limpar()
    document.getElementById("titulo").classList.add('vermelho');
    //document.getElementById("titulo").classList.remove('azul');
    //document.getElementById("titulo").classList.remove('verde');
}
function verde(){
    limpar()
    document.getElementById("titulo").classList.add('verde');
    //document.getElementById("titulo").classList.remove('vermelho');
    //document.getElementById("titulo").classList.remove('azul');
}
function limpar(){
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('verde');
}
function mostrarTelefone(elemento){
    elemento.style.display = 'none';
    document.getElementById("numtelefone").style.display = "block";
}