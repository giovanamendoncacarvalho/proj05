let valor = Number (prompt("Insira o valor da sua compra:"))
let regiao =  (prompt("Qual a sua região? (1-Sudeste; 2-Sul; 3-Outros)"))

if (valor > 250){
    alert ("Você ganhou frete grátis!")
    alert (`Valor a pagar: R$${valor}`)
} else{
if (regiao === "1"){
    alert (`O frete é R$10,00! Valor a pagar: R$${valor + 10}`)
}
else if (regiao === "2"){
    alert (`O frete é R$20,00! Valor a pagar: R$${valor + 20}`)
}
else if (regiao === "3"){
    alert (`O frete é R$30,00! Valor a pagar: R$${valor + 30}`)
}}