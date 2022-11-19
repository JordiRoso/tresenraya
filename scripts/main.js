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
}  