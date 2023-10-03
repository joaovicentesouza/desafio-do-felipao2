function calcularRank (vitoriaJogador, derrotasJogador){
    saldoRanked = vitoriaJogador - derrotasJogador;
    let rankJogador = "";

    if (saldoRanked <= 10){
        rankJogador = "Ferro";
    }

    else if(saldoRanked >= 11 && saldoRanked <= 20){
        rankJogador = "Bronze";
    }

    else if(saldoRanked >= 21 && saldoRanked <= 50){
        rankJogador = "Prata";
    }

    else if(saldoRanked >=51 && saldoRanked <= 80){
        rankJogador = "Ouro";
    }

    else if(saldoRanked >= 81 && saldoRank <= 90){
        rankJogador = "Diamante";
    }

    else if(saldoRank >= 91 && saldoRank <= 100){
        rankJogador = "Lendário";
    }

    else{
        rankJogador = "Imortal";
    }

    let mensagem = `O Herói tem saldo de ${vitoriaJogador} e está no nível de ${rankJogador}`;
    return mensagem;
}

let vit = 70;
let der = 20;

let resultado = calcularRank(vit, der);
console.log(resultado);