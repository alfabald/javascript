function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#fbb04a'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#d1b792'
    } else {
        // Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#434b63'
    }
} 
