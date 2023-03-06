import React from "react";
import './Board.css'
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

function Board(props){
    // const {items} = props.boards;
    const [showDropDown,setShowDropDown] = React.useState(false)

    
    return(
        <div className="board" onClick={()=>setShowDropDown(false)}>
            <div className="board_top" onClick={()=>setShowDropDown(false)}>
                <p>{props.board?.title}<span>{`${props.board?.cards?.length}`}</span></p>
                 <MoreHorizontal onClick={()=>setShowDropDown(true)}/>
                
            </div>
            <div className="board_cards custom-scroll" >
                {
                    props.board?.cards.map((item)=>(
                        <Card 
                        key={item.id}
                        card={item}
                         />
                    ))
                    
                }
                <Editable 
                  displayClass="boards_cards_add"
                  text="Add Task"
                  placeholder="Enter card title"  
                />
            </div>
           
        </div>
    )
}

export default Board;