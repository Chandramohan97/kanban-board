import React from 'react';
import './Chip.css'
import { X } from 'react-feather';
function Chip(props){
    // console.log(props.close)
    return(
        <div className='chip' style={{backgroundColor:props.color}}>
            {props.text}
            {/* {props.close && <X onClick={() => props.onClose ? props.close() : " "} />} */}
            {/* {props.text} */}
        </div>
    )
}

export default Chip;