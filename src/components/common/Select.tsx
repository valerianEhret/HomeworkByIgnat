import React, {ChangeEvent} from 'react';
import {SelectValuesType} from "../Junior/Junior";


type SelectPropsType = {
    option: Array<SelectValuesType>
    setSelectButtonSelected:(arr:Array<SelectValuesType>)=>void

}





export function Select(props: SelectPropsType) {

    const changeHendler = (event:ChangeEvent<HTMLSelectElement>) => {
        let newArr = props.option.map( (el) => {
            if (el.id === event.currentTarget.id) {
                return {...el, selected:true }
            } else return {...el, selected: false}
        })
        props.setSelectButtonSelected(newArr)
    }




    return (
        <div>
            <select
                onChange={changeHendler}
                >
                {props.option.map( el => <option selected={el.selected} key={el.id}>{el.selectValue}</option>)}
            </select>
        </div>
    )
}