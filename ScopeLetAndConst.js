/*
----- Scope let e const ----- 

    * Escopo determina a visibilidade de alguma variável
    * Block statement
    
    //inicia bloco
    {
        //aqui é codigo dentro do bloco
    } 
    //fecha bloco

*/

// const e let são locais e só funcionam no escopo onde foi criada

    // console.log('> existe y antes do bloco?',y) ! ERRO !

    {
        // console.log('> existe y antes?',y) ! ERRO !
        let y = 1
        console.log('> existe y?',y)
    }

    // console.log('> existe y depois do bloco?',y) ! ERRO !

