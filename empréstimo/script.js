let salario = Number (prompt("Insira o seu salário:"))
let parcela = Number (prompt("Qual o valor você quer pagar por parcela?"))

if (parcela > (salario * 0.3)){
    alert ("Empréstimo Negado: Parcela muito alta")
} else {
    alert ("Empréstimo Pré-aprovado")
}