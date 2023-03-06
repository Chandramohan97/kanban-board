import logo from './logo.svg';
import './App.css';
import React from 'react';
import TextArea from './Components/TextArea';
import { Box,Grid,Text,Flex } from '@chakra-ui/react';
import Board from './Components/Board/Board';
import './Global/global.css'
import Editable from './Components/Editable/Editable';

function App() {
  const [boards,setBoards]=React.useState([
    {
        id:Date.now() + Math.random()*2,
        title : 'To Do',
        cards:[
            { 
                id : Date.now() + Math.random(),
                title : "Card 1",
                tasks :[],
                labels : [
                    {
                        text : "Frontend",
                        color :"blue"
                    }
                ],
                desc : "First card"
            },
            { 
                id : Date.now() + Math.random(),
                title : "Card 2",
                tasks :[],
                labels : [
                    {
                        text : "Frontend 2",
                        color :"green"
                    }
                ],
                desc : "Second card"
            }
        ]
    
}])

const addCard = (title,bid) =>{
  const card ={
    id : Date.now() + Math.random(),
    title,
    labels :[],
    data : "",
    desc :"",
  };
  const index=boards.findIndex((item)=> item.id === bid)
  if(index < 0)return;

  const tempBoards = [...boards];
  tempBoards[index].cards.push(card);
  setBoards(tempBoards);
}

const removeCard=(cid,bid) =>{
  const bIndex = boards.findIndex((item)=> item.id === bid);
  if(bIndex < 0)return;
  else{
    const cIndex=boards[bIndex].cards.findIndex((item)=> item.id === cid)
    if(cIndex < 0) return;
    else{
      const tempBoards = [...boards];
      tempBoards[bIndex].card.splice(cIndex,1)
    }
    
  }
}

const addBoard = (title) =>{
  setBoards([
    ...boards,
    {
      id : Date.now() + Math.random(),
      title : title,
      cards :[]
    }
  ])
}

const removeBoard = bid =>{
  const tempBoards = boards.filter(item => item.id !==bid)
  setBoards(tempBoards);
}

  return <div className='app'>
    <div className='app_navbar'>
        <h2>Kanban</h2>
      </div>   
    <div className='app_outer'>
      <div className='app_boards'>
        {
          boards.map((item)=>
            <Board
            key={item.id}
            board={item}
             />
          )
        }
        <div className='app_boards_board'>
          <Editable 
          displayClass="app_boards_board_add"
<<<<<<< HEAD
          text="Add Card"
=======
          text="Add Board"
          buttonText="Add"
>>>>>>> 9bdd5a66d89ce9315981104e44c85f782d382b85
          placeholder="Enter board title"
          onSubmit={value=>addBoard(value)}
        ></Editable>
        </div>
      </div>
    </div>
    </div>  

}

export default App;


 