/*
----- Scope var ----- 

    * Escopo determina a visibilidade de alguma variável
    * Block statement
    
    //inicia bloco
    {
        //aqui é codigo dentro do bloco
    } 
    //fecha bloco

*/


//var é global, poderá funcionar fora de um escopo
//var é global e, também local

//var x
//hoisting ( jogar a variavel para cima do console.log )

    console.log('> existe x antes do bloco?',x) // fica undefined se for var

    {
        var x = 0
        //  x = 0
    }

    console.log('> existe x depois do bloco?',x)

