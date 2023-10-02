
//função calcular saldo
function calcularSaldoJogador(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

//funcão calcular nivel do jogador
function rankJogador(saldo){
    let pontos = saldo
    let nivel

    if(pontos <= 10){
        nivel = "Nivel Ferro"
    }else if(pontos > 10 & pontos <= 20){
        nivel = "Nivel Bronze"
    }else if(pontos > 20 & pontos <= 50){
        nivel = "Nivel Prata"
    }else if(pontos > 50 & pontos <= 80){
        nivel = "Nivel Ouro"
    }else if (pontos > 80 & pontos <= 90){
        nivel = "Nivel Diamante"
    }else if(pontos > 90 & pontos < 100){
        nivel = "Nivel Lendário"
    }else{
        nivel = "Nivel Imortal"
    }

    return nivel
}

//pontosJogador recebe calculo da função calcularSaldoJogador
let pontosJogador = calcularSaldoJogador(85, 23)
//nivelJogador recebe resultado da função rankJogador tendo como parametro resultado da função calcularSaldoJogador
let nivelJogador = rankJogador(pontosJogador)

console.log(`O Jogador tem saldo de ${pontosJogador} pontos e está no ${nivelJogador}`)
