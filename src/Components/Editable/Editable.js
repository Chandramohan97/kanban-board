import React from 'react';
import {X} from "react-feather"
// import { Editable. } from '@chakra-ui/react';
import './Editable.css'

export default function Editable(props){
    const [showEdit,setShowEdit] = React.useState(false);

    console.log(showEdit)
    return (
        <div className="editable">
            {showEdit ? (            
            <form className="editable_edit"
             onSubmit={(event) =>{
                event.preventDefault();
                if(props.onSubmit)props.onSubmit();
             }}
            >
                <input 
                 type="text" 
                 placeholder={props.placeholder || "Enter item"}/>
                <div className="editable_edit_footer">
                    <button type="submit">{props.buttonText || "Add"}</button>
                    <X onClick={()=>setShowEdit(false)}/>
                </div>   
            </form>) : 
            <button className='editable_display `${props.displayClass}`' onClick={()=> setShowEdit(true)}> {props.text || "Add Item"}</button>
        }          
        </div>
    )
}