
//square
export const Square = ({children,updateBoard,index,isSelected})=>{
  //si esta seleccionado o no 
  const className = `square ${isSelected ? 'is-selected' : ''} `;

  
  const handleClick = ()=>{
    updateBoard(index)
  }

  return(
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}  