let valor = Number (prompt("Insira o valor do seu pedido:"))
let desconto = Number (valor - (valor * 0.10))


if (valor > 50) {
    let cartaofidelidade = (prompt("Você possui cartão fidelidade? (sim ou não)"))
    if (cartaofidelidade === "sim"){
    alert (`Você tem um desconto de 10%! Seu valor final é ${desconto}`)
    } else if (cartaofidelidade === "nao") {
    alert ("Você ganhou um cookie de brinde")
    }  
} else {
    alert (`valor a pagar: ${valor}`)
}