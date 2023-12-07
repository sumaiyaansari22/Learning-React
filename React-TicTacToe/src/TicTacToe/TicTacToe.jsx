import React, { useEffect, useState } from 'react';
import './TicTacToe.css'

function TicTacToe() {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState();
    const [draw, setDraw] = useState('false');


    const checkWinner = (squares) => {
        let combos = {
            straigth: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal: [
                [0,4,8],
                [2,4,6]
            ]
        };

        for(let combo in combos){
            combos[combo].forEach((box) => {
                if(
                    squares[box[0]] === '' ||
                    squares[box[1]] === '' ||
                    squares[box[2]] === ''
                ){
                    //
                }
                else if(squares[box[0]] === squares[box[1]] &&
                        squares[box[1]] === squares[box[2]]
                        ){
                            setWinner(squares[box[0]]);
                        }
                });
        }
    }




    const checkDraw = () => {
        let flag = 'true';
        if(!winner){
            //console.log(cells)
            cells.forEach((cell) => {
               
                if(cell == ''){
                    flag = 'false';
                }
            })
            setDraw(flag);
        }
    }




    const handleClick = (num) => {
        let squares = [...cells];
        if(cells[num] !== ''){
            alert('clicked');
            return;
        }
        if(turn == 'X'){
            squares[num] = 'X';
            setTurn('O');
        }else{
            squares[num] = 'O';
            setTurn('X');
        }
        checkWinner(squares);
        setCells(squares);
    }



    const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};



    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }



    useEffect(() => {
        checkDraw()
    },[cells])


  return (
    <div>

        <table>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
        {(winner ||  draw != 'false') && (
            <>
           <p>{winner ? `${winner} is the winner!` : 'Game is a draw'}</p>
            <button onClick={() => handleRestart()}>Play Again</button>
            </>
        )
        }
    </div>
  )
}

export default TicTacToe