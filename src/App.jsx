import {  useState } from 'react'
import './index.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { WINNER_COMBOS,turns } from './constans.js'
import { WinnerModal } from './components/WinnerModal'
import { checkWinner } from './logic/board.js'


function App() {
 
  //crear un estado para el array
  const[board,setBoard] = useState(Array(9).fill(null))
  
  //crear un estado para saber de quien es el turno 
  const [turn,setTurn] = useState(turns.X)

  const[winner,setWinner]= useState(null)//null:no hay ganador false:empate

 

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) =>  square !== null)
  }

  

  //actualizar el board
  const updateBoard = (index)=>{
    //no actualizar esta posicion si ya tiene algo
    if(board[index] || winner)return;

    //estado del board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard)

    //cambia el turno de x a o en el indicador de quien juega
    const newTurn = turn === turns.X ? turns.O : turns.X;
    setTurn(newTurn);

    //revisar si hay ganador 
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      //check :if game is over
    }else if(checkEndGame(newBoard)){
      setWinner(false);
    }
  }

  const resetGame = ()=>{
    setBoard(Array(9).fill(null));
    setTurn(turns.X);
    setWinner(null);
  }

  return (
    <>
      <main className='board'>
        <h1>tic tac boe</h1>
        <button onClick={resetGame}>Reset del Juego</button>
        <section className='game'>

          {
            board.map((g,index)=>{
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>

              )
            })
          }

        </section>

        <section className='turn'>
            <Square isSelected={turn === turns.X} >{turns.X} </Square>
            <Square isSelected={turn === turns.O} >{turns.O} </Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />

      </main>
    </>
  )
}

export default App
 