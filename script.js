

// DESAFIO 1
// =========

// Faça uma função que receba um parâmetro retorne uma string
// Caso o parâmetro for um número retorne uma string dizendo que isso é um numero
// Caso o parâmtetro for uma string retorne uma string dizendo que isso é uma string

function mariana() {
    console.log('Olá!');
    return 'oie'
};

// function validateParameter(parameter) {
//     if (parameter = number) {
// return console.log("it's a number");
//     }
//     else (parameter = string) 
//  return console.log("it's a string");
    
// }

// const validateParameter = validateParameter

function defineElements() {
    const elemento = elemento
}


//escopo 

function validateParameter (pipoca) {
    if (typeof pipoca == 'number')  {
        return console.log('Isso é um número!');
    } else if (typeof pipoca == 'string') {
        return console.log('Isso é uma String');
    } else if (typeof pipoca == 'function') {
        return console.log('Isso é uma Função');
    }
}

validateParameter('string');



// uma funcao - 3 parametros 
// se o 1 for um numero maior q 18 retorna maior de idade

// se for menor de 18 dizer q é menor

function validarPessoa(x,y,z) {
    const idade = x

    if (idade >= 18){
        return console.log('pessoa maior de idade')
    } else { 
        return console.log('pessoa menor de idade')
    }
}

validarPessoa(65);
validarPessoa(13);

function validarSeEntraNaFesta(x,y,z) {
    const idade = x
    const sexo = z

    if (idade >= 18){
       if (sexo == 'feminino') {
        return console.log('menina entra na festa e pega 80.')
       } else if (sexo == 'masculino') {
        return console.log('menino entra na festa e paga 100')
       }
    } else { 
        return console.log('pessoa independente do sexo, não entra na festa.')
    }
}

validarSeEntraNaFesta(35, null,'feminino')


/////////////////////

// if (o que avaliar) {
    // o que fazer se a avaliação for verdadeira 
// } else if (o que avaliar) {
    // o que fazer se a avaliação for verdadeira 
// } else {
    // o que fazer se a avaliação for verdadeira 
// }