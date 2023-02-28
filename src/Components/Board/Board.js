import React from "react";
import './Board.css'
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import Editable from "../Editable/Editable";

function Board(){
    return(
        <div className="board">
            <div className="board_top">
                <p>To Do <span>2</span></p>
                    <MoreHorizontal/>
            </div>
            <div className="board_cards custom-scroll" >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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