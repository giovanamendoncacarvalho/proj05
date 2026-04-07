let valor = Number (prompt("Insira o valor da sua compra:"))
let regiao = Number (prompt("Qual a sua região? (1-Sudeste; 2-Sul; 3-Outros)"))
let frete
let resultado = Number (valor + frete)

if (valor > 250){
    frete = 0
    alert ("Você ganhou frete grátis!")
    alert (`Valor a pagar: ${valor}`)
} else{
if (regiao === "1"){
frete = 10
}else if (regiao === "2"){
    frete = 20
}else 
    frete = 30
}
alert (`Resumo da compra: ${valor} + ${frete} = ${resultado}`) 