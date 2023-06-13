var valores = [ 8 ,1, 7, 3, 7, 5]
/*
for (var pos=0; pos < valores.length; pos++){
    console.log( `A posição ${pos} tem o valor ${valores[pos]} `)
}
*/
for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}