import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from "./Junior.module.css"
import {EditableSpan} from "../common/EditableSpan";
import {InputNya} from "../common/InputNya";
import {ButtonNya} from "../common/ButtonNya";
import {Select} from "../common/Select";
import {v1} from "uuid";
import {Radio} from "../common/Radio";

type JuniorPropsType = {

}

export type SelectValuesType = {
    id:string,
    selectValue:string
}

export type RadioValueType = {
    id:string
    name:string
    checked:boolean
    value:string
}

export function Junior(props:JuniorPropsType) {

    const [value, setValue] = useState("double click to change title");
    const [error, setError] = useState<string>("")


 const options:Array<SelectValuesType> = [
     {id:v1(),selectValue:"Novosibirsk"},
     {id:v1(),selectValue:"Paderborn"},
     {id:v1(),selectValue:"Bielefeld"},
 ];

    let [radioValue, setRadioValue] = useState(
        [
            {id:v1(), name:"Minsk", value:"Minsk", checked:false},
            {id:v1(), name:"Brest", value:"Brest",checked:false},
            {id:v1(), name:"Grodno",value:"Grodno", checked:false},
        ]
    )


const setRadioButtonSelected =(arr: Array<RadioValueType>)=> {
    setRadioValue(arr)
}

    

    let [optionValue, setOptionValue] = useState('Paderborn')

    const changeOptionValue = (e:ChangeEvent<HTMLSelectElement>) => {
        setOptionValue(e.currentTarget.value)
    }

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
            setError("Title is requaried")
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
            <Select options={options} value={optionValue} changeOptionValue={changeOptionValue} />
            <Radio value={radioValue}  setRadioButtonSelected={setRadioButtonSelected}/>
        </div>
    )


}