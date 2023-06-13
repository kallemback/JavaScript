var num = [5, 8, 2, 9 , 3]
num [7] = 7
// [numero "3" = posição ] = "12" = elemento.
//num.push(1)
//num.sort()
console.log( `O vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é  ${num[0]}`)
let pos = num.indexOf(2)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor esta na posição ${pos}`)
}

 