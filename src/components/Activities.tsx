import React from "react";
import classes from "./Activities.module.css"
import {FilterValuesType} from "../App";

export type TasksType = {
    id: string
    n: string
    scale: number
}

type PropsType = {
    activities: Array<TasksType>
    removeActivity: (id:string) => void
    changeFilter: (value:FilterValuesType) => void
}

export function Activities(props: PropsType) {

    return (
        <div>
            <div className={classes.title}>
                <h3>Acitivities</h3>
            </div>
            <div>
                <ul>
                    {
                        props.activities.map(a =>
                            <li key={a.id} className={classes.list}>
                                <button onClick={ () => {props.removeActivity(a.id)}}>X</button>
                                <b>{a.n}</b>
                               <meter value={a.scale} low={4} high={7} optimum={9} max={10}></meter><sup>priority</sup>

                            </li>)
                    }
                </ul>
            </div>
            <div className={classes.buttons}>
                <button onClick={ () => {props.changeFilter("all")}  }>all</button>
                <button onClick={ () => {props.changeFilter("low")} }>low</button>
                <button onClick={ () => {props.changeFilter("middle")} }>middle</button>
                <button onClick={ () => {props.changeFilter("hight")}  }>hight</button>
            </div>
        </div>

    )
};