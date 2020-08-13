import React, {ChangeEvent} from 'react';
import {RadioValueType} from "../Junior/Junior";

type RadioPropsType = {
    value: Array<RadioValueType>
    //onChange:(event: ChangeEvent<HTMLInputElement>)=>void
    setRadioButtonSelected: (arr:Array<RadioValueType>) => void
}



export function Radio(props:RadioPropsType) {

let handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newArr = props.value.map((el) => {
        if (el.id === event.currentTarget.id) {
            return {...el, checked: event.currentTarget.checked}
        } else {
            return {...el,  checked: !event.currentTarget.checked}
        }
    })
    props.setRadioButtonSelected(newArr)
}

return(
    <div>
        {props.value.map( (el) => {
            return  <label>
                <input type="radio" checked={el.checked} id={el.id} onChange={handlerChange}/>
                {el.name}
            </label>
        })}
    </div>
)
}