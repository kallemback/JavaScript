function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/menino.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', './img/homem_jovem.jpg')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src', './img/homem_adulto.jpg')
            }else {
                //Idoso
                img.setAttribute('src', './img/homem_velho.jpg')
            }
        
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', '/img/menina.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', '/img/mulher_jovem.jpg')
            }else if (idade < 50 ){
                //Adulto
                img.setAttribute('src', '/img/mulher_adulta.jpg')
            }else {
                //Idoso
                img.setAttribute('src', '/img/mulher_velha.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}
