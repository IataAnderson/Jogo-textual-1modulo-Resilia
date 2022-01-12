function btn(){
    function resposta (escolha){
        if ( escolha =="1") {
            window.location.href="../Venceu/scorpionvenceu.html";
        }
        else{
            window.location.href="../perdeu/perdeuscorpion.html";
        }
    }
    var escolha = prompt ("Faça sua escolha! 1 ou 2");
    resposta (escolha);
}