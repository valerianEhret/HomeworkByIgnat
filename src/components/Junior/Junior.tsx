import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from "./Junior.module.css"
import {EditableSpan} from "../common/EditableSpan";
import {InputNya} from "../common/InputNya";

type JuniorPropsType = {

}


export function Junior(props:JuniorPropsType) {

    const [value, setValue] = useState("double click to change title");
    const [error, setError] = useState<string>("")


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
//* вот вам функция для сохранения объектов в память браузера (данные в этом хранилище сохраняться даже при перезагрузке компа):
    // export function saveState<T> (key: string, state: T) {
    //     const stateAsString = JSON.stringify(state);
    //     localStorage.setItem(key, stateAsString)
    // }
    //* и вот вам функция для получения сохранённого объекта в памяти браузера:
    // export function restoreState<T>(key: string, defaultState: T) {
    //     const stateAsString = localStorage.getItem(key);
    //     if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    //     return defaultState;
    // }

    // type StateType = {
    //     x: string
    //     y: number
    // }
    // saveState<StateType>("test", {x: "A", y: 1});
// сохраняем объект типа StateType в ячейке "test"

//     const state: StateType = restoreState<StateType>("test", {x: "", y: 0);
// // получем в переменную state объект из ячейки "test"


    return(
        <div className={classes.wrapper}>
            <EditableSpan value={value} changeValue={changeValue} onEnter={onEnter}/>
        </div>
    )


}