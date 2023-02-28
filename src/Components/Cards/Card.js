import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import './Card.css'
import Chip from "../../Chip/Chip";
function Card(){
    return(
        <div className="card">
            <div className="card_top">
                <div className="card_top_labels">
                    <Chip text="Frontend" color="green" />
                </div >
                <MoreHorizontal  />
            </div>
            <div className="card_title">
                asfafsa
            </div>
        
            <div className="card_footer">
                <p><Clock/>28th Feb</p>
                <p><CheckSquare/>1/4</p>
            </div>
        </div>
    )
}

export default Card