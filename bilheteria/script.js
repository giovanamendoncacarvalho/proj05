let idade = Number (prompt("Insira a sua idade:"))
let estudante = (prompt("Você é estudante? (sim/não)"))

if (idade < 12 || idade > 60 || estudante == "sim"){
    alert ("O valor do ingresso é R$20,00")
}else{
    alert ("O valor do ingresso é R$40,00")
}