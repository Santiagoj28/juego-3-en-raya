 import { WINNER_COMBOS } from "../constans.js";
 export const checkWinner = (boardCheck)=>{
    
    //revisar todas las combinaciones ganadoras para saber si x u o gano
    for(const combo of WINNER_COMBOS){
      //recuperar las posiciones
      const [a,b,c] = combo;

      if(boardCheck[a] && 
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ){
        return boardCheck[a];
      }
    }

    return null;
  }