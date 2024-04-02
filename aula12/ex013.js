var agora = new Date()
var diaSemana = agora.getDay()


/* Se não definir, a pré-definição de get.Day é:
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta 
4 = Quinta
5 = Sexta
6 = Sábado
*/

// console.log(diaSemana)

switch(diaSemana) {
    case 0:
        console.log('Segunda')
        break
    case 1:
        console.log('Terça')
        break
    case 2:
        console.log('Quarta')
        break
    case 3:
        console.log('Quinta')
        break
    case 4:
        console.log('Sexta')
        break
    case 5:
        console.log('Sábado')
        break
    case 6:
        console.log('Domingo')
        break
    default:
        console.log('[Erro] Dia inválido!')
        break
}