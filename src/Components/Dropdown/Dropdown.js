import React from 'react'

const Dropdown = (props) => {

  const dropdownRef= React.useRef(null);
  const handleClick = (event) =>{
        if(dropdownRef && dropdownRef.current.contains(event.target)){
            if(props.onClose)props.onClose();
  }
  }
  React.useEffect(()=>{
    document.addEventListener('click',handleClick,{ capture: true });

    return ()=>{
        document.removeEventListener('click',handleClick,{ capture: true });
    }
  })
  return (
    <div className='dropdown'
    ref={dropdownRef}
    style={{
        position:"absolute",
        top : "100%",
        right:"0",
    }}
    >
        {props.value}
    </div>
  )
}

export default Dropdown