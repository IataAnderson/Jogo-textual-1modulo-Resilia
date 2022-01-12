function btn(){
    function resposta (escolha){
        if ( escolha =="1") {
            window.location.href="../fase5-voceganhou/fase5voceganhou.html";
        }
        else{
            window.location.href="../fase4-vocêperdeu/fase4voceperdeu.html";
        }
    }
    var escolha = prompt ("Faça sua escolha! 1 ou 2");
    resposta (escolha);
}
