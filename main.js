var resultado = document.querySelector('#resultado')
var userImage = document.querySelector('#userImage')
var cpuImage = document.querySelector('#cpuImage')
var percentwin = document.querySelector('#percent-win')
var attempts = 0
var wins = 0

function jogo (escolhaUser) {

    var escolhaCpu = getRandom()

    switch (escolhaUser) {

        case 1:
        //pedra

            if (escolhaCpu != escolhaUser){

                if(escolhaCpu == 2) {

                    resultado.innerHTML = 'Voce Perdeu'
                    alteraImage(1,2)
                    alteraPorcentagem(2)
                    
                }else{

                    resultado.innerHTML = 'Voce ganhou'
                    alteraPorcentagem(1)
                    alteraImage(1,3)

                }

            }else{

                resultado.innerHTML = 'Empate'
                alteraImage(1,1)

            }
            
        break

        case 2:
        //PAPEL
        
            if (escolhaCpu > escolhaUser){

                resultado.innerHTML = 'Voce Perdeu'
                alteraImage(2,3)
                alteraPorcentagem(2)

            }else{

                if (escolhaCpu == escolhaUser){

                    resultado.innerHTML = 'Empate'
                    alteraImage(2,2)
                    
                }else{

                    resultado.innerHTML = 'Voce ganhou'
                    alteraImage(2,1)
                    alteraPorcentagem(1)
                }
                
            }

        break

        case 3:
        //TESOURA

        if (escolhaCpu != escolhaUser){

            if(escolhaCpu == 1) {

                resultado.innerHTML = 'Voce Perdeu'
                alteraImage(3,1)
                alteraPorcentagem(2)

            }else{

                resultado.innerHTML = 'Voce ganhou'
                alteraImage(3,2)
                alteraPorcentagem(1)

            }

        }else{

            resultado.innerHTML = 'Empate'
            alteraImage(3,3)

        }
            
        break

    }

}

function getRandom (){

    return Math.floor(Math.random() * 3 + 1)

}

function alteraImage (img1, img2) {

    userImage.src = img1 + '.png'
    cpuImage.src  = img2 + '.png'

}

function alteraPorcentagem (resultado) {

    if (resultado == 1) {

        wins++
        attempts++
        percentwin.innerHTML = ((wins/attempts) *100 ).toFixed(0)

    }else if (resultado == 2) {

        attempts++
        percentwin.innerHTML = ((wins/attempts) *100 ).toFixed(0)

    }

}