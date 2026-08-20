import Square from "./Square";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {  //why this is not getting called nly 
    if(squares[i] !== null){
      return;  //why- coz we only want to update the board when the cell is empty . if it as X or O already filled, we dont want to overwrite that
    }
    console.log("square is clicked!!");
    const nextSquares = squares.slice(); //how this works - why copy needed ??
    // console.log(nextSquares);
     if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    // squares[i] = "xx"; //causes a problem - what is it ?? - my guess is ki value update hoti, phir state update krte, toh tab kuch issue hori ki woh 0 se initialise hojara baar baar shayad - confirm nhi hai 
    // setSquares(squares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />  
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
