let valorcarro = Number (prompt("Insira o valor do carro:"))
let pagamento = (prompt("A forma de pagamento será no PIX, Crédito (até 24x) ou Financiamento (até 48x)?"))
let pix = Number (valorcarro - (valorcarro * 0.15))
let credito = Number (valorcarro + (valorcarro * 0.05))
let financiamento = Number (valorcarro + (valorcarro * 0.20))
let parcelas = Number (prompt("Em quantas parcelas? (crédito até 24x e financiamento até 48x)"))
let valorparcelascredito = Number (credito/parcelas)
let valorparcelasfinanciamento = Number (financiamento/parcelas)

if (pagamento == "pix"){
    alert (`Você ganhou 15% de desconto e seu valor final é R$ ${pix}`)
}

else if (pagamento == "credito"){
    alert (`Será adicionado 5% de juros ao valor inicial e o seu valor final será R$ ${credito}`)
    alert (`O valor de suas parcelas é R$ ${valorparcelascredito}`)
}

else if (pagamento == "financiamento"){
    alert (`Será adicionado 20% de juros ao valor inicial e o seu valor final será R$ ${financiamento}`)
    alert (`O valor de suas parcelas é R$ ${valorparcelasfinanciamento}`)
}

