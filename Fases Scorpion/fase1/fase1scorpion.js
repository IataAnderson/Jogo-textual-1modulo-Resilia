function btn(){
    function resposta (escolha){
        if ( escolha =="1") {
            window.location.href="../perdeu/perdeuscorpion.html";
        }
        else{
            window.location.href="../fase2/fase2scorpion.html";
        }
    }
    var escolha = prompt ("Faça sua escolha! 1 ou 2");
    resposta (escolha);
}