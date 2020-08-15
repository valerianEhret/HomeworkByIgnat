import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from "./Junior.module.css"
import {EditableSpan} from "../common/EditableSpan";
import {InputNya} from "../common/InputNya";
import {ButtonNya} from "../common/ButtonNya";
import {Select} from "../common/Select";
import {v1} from "uuid";
import {Radio} from "../common/Radio";
import {People} from "../../Reducer/People";
import {ManType} from "../../Reducer/homeWorkReducer";

type JuniorPropsType = {
    peopleState:Array<ManType>
}

export type SelectValuesType = {
    id:string,
    selectValue:string
    selected:boolean
}

export type RadioValueType = {
    id:string
    name:string
    checked:boolean
    value:string
}

export function Junior(props:JuniorPropsType) {


// Select
    let [option, setOption] = useState<Array<SelectValuesType>>([
        {id:v1(),selectValue:"Minsk", selected:false},
        {id:v1(),selectValue:"Brest", selected:true},
        {id:v1(),selectValue:"Grodno", selected:false},
        {id:v1(),selectValue:"Mogilev", selected:false},
    ])

const setSelectButtonSelected = (arr:Array<SelectValuesType>) => {
        setOption(arr)
}


// Input Radio
    let [radioValue, setRadioValue] = useState(
        [
            {id:v1(), name:"Minsk", value:"Minsk", checked:false},
            {id:v1(), name:"Bobruisk", value:"Brest",checked:false},
            {id:v1(), name:"Vitebsk",value:"Grodno", checked:false},
            {id:v1(), name:"Gomel",value:"Grodno", checked:false},
        ]
    )

const setRadioButtonSelected =(arr: Array<RadioValueType>)=> {
    setRadioValue(arr)
}

// Editablespan

    const [value, setValue] = useState("double click to change title");



    const changeValue = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {

        if (value.trim() !== "") {
            if (e.charCode === 13) {
                // props.addName(value);
                setValue("");
            }
        } else {

        }
    }

    type T = {
        x: string
    }

    const state:T = { x: value }

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }


    const saveStateHandler = () => saveState('test', state)
    const restoreStateHandler = () => {
        const stateFromLocalStorage =  restoreState('test', {x: ''})
        setValue(stateFromLocalStorage.x)
    }

    return(
        <div className={classes.wrapper}>
            <EditableSpan value={value} changeValue={changeValue} onEnter={onEnter}/>
            <ButtonNya title={"Save"} onClick={saveStateHandler}/>
            <ButtonNya title={"Restore"} onClick={restoreStateHandler}/>
            <Select
                option={option}
                setSelectButtonSelected={setSelectButtonSelected}
            />
            <Radio
                value={radioValue}
                setRadioButtonSelected={setRadioButtonSelected}
            />

            <People peopleState={props.peopleState}/>
        </div>
    )


}