  let esPlayerX = true

const playerClick = (ev)=> {
   
  //let namex = document.getElementById("jugador1_start").value;
  //let nameo = document.getElementById("jugador2_start").value;
  let box = ev.target
  let boxValue = ev.target.innerHTML
 
    if (boxValue == "" ) {
         if (esPlayerX){
            box.innerHTML = '❌'
            //turnox.innerHTML = namex +"Estu turno"
            esPlayerX = false
            
        }
         else {

            box.innerHTML = '⭕️'
            //turnox.innerHTML = nameo +"Estu turno"
            esPlayerX = true
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


  if ((box11Value == '❌') && (box12Value  == '❌') && ( box13Value == '❌')) {
    document.getElementById('imprimir').innerHTML = namex 
    +"  ganador"
    


    
}
}  