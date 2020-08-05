import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {InputNya} from "./InputNya";


type EditableSpanPropsType = {
    value: string
    changeValue:(e:ChangeEvent<HTMLInputElement>)=>void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}


export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }


    return (
        <>
            {editMode ?
                <InputNya value={props.value} onBlur={deActivateEditMode} autoFocus={true}  onChange={props.changeValue} onEnter={props.onEnter} /> :
                // <input value={props.value} onBlur={deActivateEditMode} autoFocus={true} onChange={props.changeValue}   /> :
                <span onDoubleClick={activateEditMode}><h4>{props.value}</h4></span>}
        </>
    );
};