
import { useState } from 'react';
import './App.css';
import x from "./image/image.png"
import y from "./image/image copy.png"
function App() {

  const [board, setBoard] = useState(Array(9).fill(""));
  const [togle, settogle] = useState(false);
  const [winner, setwinner] = useState(false);
  const [who, setwho] = useState("Tic - Tak - Toe");
  function clickhandler(index) {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = togle ? y : x;
    setBoard(newBoard);
    settogle(!togle);

    const winnesym = checkWinner(newBoard);
    if (winnesym) {
      winnesym == x ? setwho("X wins 🎉❤️") : setwho("O wins 🎉❤️");

    }
    else if (newBoard.every(cell => cell !== "")) {
       
    
      setwho("Draw 😞");
    }

  }



  function checkWinner(board) {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setwinner(true);
        return board[a];
      }
     
      
    }

    return null;
  }

  return (
    <div className="container">
      <div>
        <h1>{who}</h1>

      </div>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={() => clickhandler(0)}>
            {board[0] && <img src={board[0]} alt="Player" />}
          </div>
          <div className='boxes' onClick={() => clickhandler(1)}>
            {board[1] && <img src={board[1]} alt="Player" />}
          </div>
          <div className='boxes' onClick={() => clickhandler(2)}>
            {board[2] && <img src={board[2]} alt="Player" />}
          </div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={() => clickhandler(3)}>
            {board[3] && <img src={board[3]} alt="Player" />}
          </div>
          <div className='boxes' onClick={() => clickhandler(4)}>
            {board[4] && <img src={board[4]} alt="Player" />}
          </div>
          <div className='boxes' onClick={() => clickhandler(5)}>
            {board[5] && <img src={board[5]} alt="Player" />}
          </div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={() => clickhandler(6)}>
            {board[6] && <img src={board[6]} alt="Player" />}
          </div>
          <div className='boxes' onClick={() => clickhandler(7)}>
            {board[7] && <img src={board[7]} alt="Player" />}
          </div>
          <div className='boxes' onClick={() => clickhandler(8)}>
            {board[8] && <img src={board[8]} alt="Player" />}
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => {
          setBoard(Array(9).fill(""));
          settogle(false);
          setwho("Tic - Tak - Toe");
          setwinner(false);
        }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
