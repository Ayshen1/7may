import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './index.css'

function ButtonComponent() {
const [update, setUpdate] = useState(false)
const [color,setColor]=useState('gray')
 const  changeColor= ()=>{
if (update) {
    setColor ("gray")
}
else{
    setColor ("yellow")
}
setUpdate(!update)
 }


    return (
        <div className='click_btn'>
            <Button onClick={changeColor} variant="contained" disableElevation>
                Click Button
            </Button>
            <div className='box' style={{ backgroundColor: color }}></div>

        </div>
    )
}

export default ButtonComponent;