import React from 'react';
import {Message} from "./Message/Message";
import {Activities, TasksType} from "./Activities/Activities"
import {List, NamesType} from "./List/List";
import {FilterValuesType} from "../../App";
import classes from "./PreJunior.module.css"


type PreJuniorPropsType = {
    activities: Array<TasksType>
    removeActivity: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    names: Array<NamesType>
    removeNames: (id: string) => void
    addName: (value: string) => void
    greeting: (value: string) => void

}


export function PreJunior(props: PreJuniorPropsType) {
    return (
        <div className={classes.wrapper}>
            <div className={"Activity"}>
                <Activities
                    activities={props.activities}
                    removeActivity={props.removeActivity}
                    changeFilter={props.changeFilter}
                />
            </div>
            <div>
                <List names={props.names}
                      removeNames={props.removeNames}
                      addName={props.addName}
                      greeting={props.greeting}
                />
            </div>
            <div>
                <Message name={"Valerian Ehret"} text={"Lorem ipsum dolor sit amet, "} time={"12:05"}/>
            </div>

        </div>
    )
}