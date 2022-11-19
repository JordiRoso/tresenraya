let esJugadorX = true
console.log( 'jugadorx', esJugadorX) 


const playerClick = (ev)=> {
   

let namex = document.getElementById("jugador1_start").value;
let nameo = document.getElementById("jugador2_start").value;
   

let box = ev.target
let boxValue = ev.target.innerHTML
 

    if (boxValue == "" ) {
        if (esJugadorX){
            box.innerHTML = '❌'
            turnox.innerHTML = nameo + " Es tu turno"
            esJugadorX = false
            
        }
        else {

            box.innerHTML = '⭕️'
            turnox.innerHTML = namex + " Es tu turno"
            esJugadorX = true
        }
    }
    
let box11Value = document.getElementById('box11') .innerHTML
let box12Value = document.getElementById('box12') .innerHTML
let box13Value = document.getElementById('box13') .innerHTML

let box21Value = document.getElementById('box21') .innerHTML
let box22Value = document.getElementById('box22') .innerHTML
let box23Value = document.getElementById('box23') .innerHTML

let box31Value = document.getElementById('box31') .innerHTML
let box32Value = document.getElementById('box32') .innerHTML
let box33Value = document.getElementById('box33') .innerHTML



let uiBox11 = document.getElementById ('box11')
let uiBox12 = document.getElementById ('box12')
let uiBox13 = document.getElementById ('box13')
let uiBox21 = document.getElementById ('box21')
let uiBox22 = document.getElementById ('box22')
let uiBox23 = document.getElementById ('box23')
let uiBox31 = document.getElementById ('box31')
let uiBox32 = document.getElementById ('box32')
let uiBox33 = document.getElementById ('box33')




  

       if ((box11Value == '❌') && (box12Value  == '❌') && ( box13Value == '❌')) {
        document.getElementById('imprimir').innerHTML = namex 
        +" Ganador 🏆🏆🏆 "
        uiBox11.innerHTML =  '<img src="img/imageonline/winfondo/00.png" alt="">' 
        uiBox12.innerHTML =  '<img src="img/imageonline/winfondo/10.png" alt="">'
          
        uiBox12.innerHTML =  '<img src="img/imageonline/winfondo/10.png" alt="">'
        uiBox13.innerHTML =  '<img src="img/imageonline/winfondo/20.png" alt="">'
        uiBox21.innerHTML =  '<img src="img/imageonline/winfondo/01.png" alt="">' 
        uiBox22.innerHTML =  '<img src="img/imageonline/winfondo/11.png" alt="">'
        uiBox23.innerHTML =  '<img src="img/imageonline/winfondo/21.png" alt="">'
        uiBox31.innerHTML =  '<img src="img/imageonline/winfondo/02.png" alt="">' 
        uiBox32.innerHTML =  '<img src="img/imageonline/winfondo/12.png" alt="">'
        uiBox33.innerHTML =  '<img src="img/imageonline/winfondo/22.png" alt="">'
        turnox.innerHTML = ""


        
    }
       if ((box21Value == 'X') && (box22Value  == 'X') && ( box23Value == 'X')) {
            document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
            box11Value = document.getElementById('box11') .innerHTML = ""
            box12Value = document.getElementById('box12') .innerHTML = ""
            box13Value = document.getElementById('box13') .innerHTML = ""

            box21Value = document.getElementById('box21') .innerHTML = ""
            box22Value = document.getElementById('box22') .innerHTML = ""
            box23Value = document.getElementById('box23') .innerHTML = ""

            box31Value = document.getElementById('box31') .innerHTML = ""
            box32Value = document.getElementById('box32') .innerHTML = ""
            box33Value = document.getElementById('box33') .innerHTML = ""

        
        }


         if ((box31Value == 'X') && (box32Value  == 'X') && ( box33Value == 'X')) {
            document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
             
            box11Value = document.getElementById('box11') .innerHTML = ""
            box12Value = document.getElementById('box12') .innerHTML = ""
            box13Value = document.getElementById('box13') .innerHTML = ""

            box21Value = document.getElementById('box21') .innerHTML = ""
            box22Value = document.getElementById('box22') .innerHTML = ""
            box23Value = document.getElementById('box23') .innerHTML = ""

            box31Value = document.getElementById('box31') .innerHTML = ""
            box32Value = document.getElementById('box32') .innerHTML = ""
            box33Value = document.getElementById('box33') .innerHTML = ""

        }



        if ((box11Value == 'X') && (box21Value  == 'X') && ( box31Value == 'X')) {
            document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
            
            box11Value = document.getElementById('box11') .innerHTML = ""
            box12Value = document.getElementById('box12') .innerHTML = ""
            box13Value = document.getElementById('box13') .innerHTML = ""

            box21Value = document.getElementById('box21') .innerHTML = ""
            box22Value = document.getElementById('box22') .innerHTML = ""
            box23Value = document.getElementById('box23') .innerHTML = ""

            box31Value = document.getElementById('box31') .innerHTML = ""
            box32Value = document.getElementById('box32') .innerHTML = ""
            box33Value = document.getElementById('box33') .innerHTML = ""

         }


        if ((box12Value == 'X') && (box22Value  == 'X') && ( box32Value == 'X')) {
                document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
                box11Value = document.getElementById('box11') .innerHTML = ""
                box12Value = document.getElementById('box12') .innerHTML = ""
                box13Value = document.getElementById('box13') .innerHTML = ""
    
                box21Value = document.getElementById('box21') .innerHTML = ""
                box22Value = document.getElementById('box22') .innerHTML = ""
                box23Value = document.getElementById('box23') .innerHTML = ""
    
                box31Value = document.getElementById('box31') .innerHTML = ""
                box32Value = document.getElementById('box32') .innerHTML = ""
                box33Value = document.getElementById('box33') .innerHTML = ""
             }


        if ((box13Value == 'X') && (box23Value  == 'X') && ( box33Value == 'X')) {
                document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
            
                box11Value = document.getElementById('box11') .innerHTML = ""
                box12Value = document.getElementById('box12') .innerHTML = ""
                box13Value = document.getElementById('box13') .innerHTML = ""
    
                box21Value = document.getElementById('box21') .innerHTML = ""
                box22Value = document.getElementById('box22') .innerHTML = ""
                box23Value = document.getElementById('box23') .innerHTML = ""
    
                box31Value = document.getElementById('box31') .innerHTML = ""
                box32Value = document.getElementById('box32') .innerHTML = ""
                box33Value = document.getElementById('box33') .innerHTML = ""
    
            }


        if ((box11Value == 'X') && (box22Value  == 'X') && ( box33Value == 'X')) {
                document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
                box11Value = document.getElementById('box11') .innerHTML = ""
                box12Value = document.getElementById('box12') .innerHTML = ""
                box13Value = document.getElementById('box13') .innerHTML = ""
    
                box21Value = document.getElementById('box21') .innerHTML = ""
                box22Value = document.getElementById('box22') .innerHTML = ""
                box23Value = document.getElementById('box23') .innerHTML = ""
    
                box31Value = document.getElementById('box31') .innerHTML = ""
                box32Value = document.getElementById('box32') .innerHTML = ""
                box33Value = document.getElementById('box33') .innerHTML = ""
    
            }


        if ((box31Value == 'X') && (box22Value  == 'X') && ( box13Value == 'X')) {
                document.getElementById('imprimir').innerHTML = "La x gana, a Jesús nadie le chulea";
                box11Value = document.getElementById('box11') .innerHTML = ""
                box12Value = document.getElementById('box12') .innerHTML = ""
                box13Value = document.getElementById('box13') .innerHTML = ""
    
                box21Value = document.getElementById('box21') .innerHTML = ""
                box22Value = document.getElementById('box22') .innerHTML = ""
                box23Value = document.getElementById('box23') .innerHTML = ""
    
                box31Value = document.getElementById('box31') .innerHTML = ""
                box32Value = document.getElementById('box32') .innerHTML = ""
                box33Value = document.getElementById('box33') .innerHTML = ""
    
            } 
        
        
        if ((box11Value == '⭕️') && (box12Value  == '⭕️') && ( box13Value == '⭕️')) {
                document.getElementById('imprimir').innerHTML = nameo + "  ganadora"

                box11Value = document.getElementById('box11') .innerHTML = ""
                box12Value = document.getElementById('box12') .innerHTML = ""
                box13Value = document.getElementById('box13') .innerHTML = ""
    
                box21Value = document.getElementById('box21') .innerHTML = ""
                box22Value = document.getElementById('box22') .innerHTML = ""
                box23Value = document.getElementById('box23') .innerHTML = ""
    
                box31Value = document.getElementById('box31') .innerHTML = ""
                box32Value = document.getElementById('box32') .innerHTML = ""
                box33Value = document.getElementById('box33') .innerHTML = ""
    
            
            }       
            if ((box11Value == '⭕️' || box11Value == '❌') && (box12Value  == '⭕️'|| box12Value  == '❌') && ( box13Value == '⭕️' || box13Value == '❌')&&
                (box21Value == '⭕️'|| box21Value == '❌' ) && (box22Value  == '⭕️' ||box22Value  == '❌') && ( box23Value == '⭕️' || box23Value == '❌')&&
                (box31Value == '⭕️' || box31Value == '❌' ) && (box32Value  == '⭕️' || box32Value  == '❌') && ( box33Value == '⭕️' || box33Value == '❌')){
                document.getElementById('imprimir').innerHTML = "empate"
                turnox.innerHTML = ""

                }       
                     
        
    




    }
    document.getElementById('imprimir').innerHTML = ""

    function reset() {
                box11Value = document.getElementById('box11') .innerHTML = ""
                box12Value = document.getElementById('box12') .innerHTML = ""
                box13Value = document.getElementById('box13') .innerHTML = ""
    
                box21Value = document.getElementById('box21') .innerHTML = ""
                box22Value = document.getElementById('box22') .innerHTML = ""
                box23Value = document.getElementById('box23') .innerHTML = ""
    
                box31Value = document.getElementById('box31') .innerHTML = ""
                box32Value = document.getElementById('box32') .innerHTML = ""
                box33Value = document.getElementById('box33') .innerHTML = ""

                document.getElementById('imprimir').innerHTML = ""
                 esJugadorX = true

                 namex = document.getElementById("jugador1_start").value = ""
                 nameo = document.getElementById("jugador2_start").value = ""

                 turnox.innerHTML = ""


    

        
    }









   






 
 


    








  
   


