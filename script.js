function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos}. `

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FD6F2C'
        msg.innerHTML += 'Está de manhã'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#A16765'
        msg.innerHTML += 'Está de tarde'
    } else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#044965'
        msg.innerHTML += 'Está de noite'
    } 
}