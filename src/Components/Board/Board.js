import React from "react";
import './Board.css'
import { MoreHorizontal } from "react-feather";
import Card from "../Cards/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

function Board(){

    const [showDropDown,setShowDropDown] = React.useState(false)

    return(
        <div className="board" onClick={()=>setShowDropDown(false)}>
            <div className="board_top" onClick={()=>setShowDropDown(false)}>
                <p>To Do <span>2</span></p>
                 <MoreHorizontal onClick={()=>setShowDropDown(true)}/>
                 {  
                    showDropDown && (
                        <Dropdown value="Delete">
                        </Dropdown> 
                    )
                 }
            </div>
                    {/* <div className="board_top_more">
                        <Dropdown >
                            <div className="board_dropdown">
                                <p>Delete Board</p>
                            </div>

                        </Dropdown>
                 
                    </div>  */}
            
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