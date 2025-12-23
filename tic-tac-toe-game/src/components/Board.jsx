import React from 'react'
import Square from './Square.jsx'
import { useState,useEffect } from 'react'    

function Board() {
    const[state,setState]=useState(Array(9).fill(null));
    const[isXTurn,setIsXTurn]=useState(true);
    const checkWinner=()=>{
        const winningCombinations=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let combination of winningCombinations){
            const [a,b,c]=combination;
            if(state[a] && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return null;
    };

    useEffect(()=>{
        const winner=checkWinner();
        if(winner){
            alert(`Congratulations! ${winner} has won the game!`);
            setState(Array(9).fill(null));
        }
    },[state]);
    const handleClick=(index)=>{
        if(state[index]){
            return;
        }
        const copyState=[...state];
        copyState[index]=isXTurn?"X":"O"; 
        setState(copyState);
        setIsXTurn(!isXTurn);
        
    };
  return (
    <div className='board-container'>
        <h4>Player {isXTurn?"X":"O"} please move</h4>
        <div className="board-row">
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]} />
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className="board-row">
            <Square onClick={()=>handleClick(3)}  value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/>
        </div>
        <div className="board-row">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
        </div>
      
    </div>
  )
}

export default Board;
