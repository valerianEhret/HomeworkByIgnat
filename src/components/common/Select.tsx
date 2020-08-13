import React, {ChangeEvent} from 'react';
import {SelectValuesType} from "../Junior/Junior";


type SelectPropsType = {
    options: Array<SelectValuesType>
    value:string
    changeOptionValue:(e:ChangeEvent<HTMLSelectElement>)=>void

}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <select value={props.value} onChange={props.changeOptionValue}  >
                {props.options.map(v => <option key={v.id}>{v.selectValue}</option>)}
            </select>
        </div>
    )
}