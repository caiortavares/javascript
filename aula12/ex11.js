var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 17) {
    console.log('Menor de idade')
}
else if(idade < 18 || idade > 65) {
        console.log('Voto opcional')
}
else {
    console.log('Voto obrigatório')
}
