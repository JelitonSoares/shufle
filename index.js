const { jogadores } = require('./jogadores.js');
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

function shufle(arr, de, ate){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        trocaLugar(arr, i, sorteia(de, ate));

    }

    return arr;
}


function sorteia(de, ate){
    return Math.floor(Math.random() * (ate - de + 1) + de);
}

function trocaLugar(arr, iCurrent, iNext){
    let atual = arr[iCurrent];
    let proximo = arr[iNext];
    arr[iCurrent] = proximo;
    arr[iNext] = atual;

    return arr;
}



console.log(shufle(jogadores, 0, jogadores.length - 1));