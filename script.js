/*Calculadora de partidas rankeadas 
1-Criar função recebendo como parametro quantidade de vitorias e derrotas de um jogador
2-Depois retorne o resultado para uma variavel
3-O saldo de rankeadas deve ser feito atraves do calculo vitorias - derrotas

4-niveis
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

5-Saida do programa "O Jogador tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

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

//pontos do jogador recebe calculo da função
let pontosJogador = calcularSaldoJogador(85, 23)
//nivel recebe resultado da função rankJogador tendo como parametro resultado da função calcularSaldoJogador
let nivelJogador = rankJogador(pontosJogador)

console.log(`O Jogador tem saldo de ${pontosJogador} pontos e está no ${nivelJogador}`)
