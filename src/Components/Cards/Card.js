import React from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";
import './Card.css'
import Chip from "../../Chip/Chip";
function Card(props){
    return(
        <div className="card">
            <div className="card_top">
                <div className="card_top_labels">
                    {
                      props.card.labels.map((item,index) =>
                      <Chip 
                      label={item}
                      text ={item.text}
                      color={item.color}
                      />
                      )
                    }
                </div >
                <MoreHorizontal  />
            </div>
            <div className="card_title">
                {props.card.title}
            </div>
        
            <div className="card_footer">
             {  props.card.date && 
                <p><Clock/>{props.card.date}</p>
             }     
                <p><CheckSquare/>1/4</p>
            </div>
        </div>
    )
}

export default Card