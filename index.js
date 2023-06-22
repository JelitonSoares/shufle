import chalk from 'chalk';
import jogadores from './jogadores.js';


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

function montaTime(arr){
    let redTeam = arr.slice(0, 5);
    let blueTeam = arr.slice(5, arr.length);

    return console.log(chalk.red(`Time Vermelho: ${redTeam}`) + chalk.blue(`\nTime Azul: ${blueTeam}`));
}

montaTime(shufle(jogadores, 0, jogadores.length - 1));