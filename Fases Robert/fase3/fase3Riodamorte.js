function btn(){
    function resposta (escolha){
        if ( escolha =="1") {
            window.location.href="../fase5voceganhou/fase5voceganhou.html";
        }
        else{
            window.location.href="../fase4voceperdeu/fase4voceperdeu.html";
        }
    }
    var escolha = prompt ("Faça sua escolha! 1 ou 2");
    resposta (escolha);
}