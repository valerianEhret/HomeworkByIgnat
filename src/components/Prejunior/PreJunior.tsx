import React from 'react';
import {Message} from "./Message/Message";
import {Activities, TasksType} from "./Activities/Activities"
import {List, NamesType} from "./List/List";
import {FilterValuesType} from "../../App";
import classes from "./PreJunior.module.css"
import {Route} from "react-router-dom";
import {Burger} from "./Menu/Burger";

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
            <header className={classes.header}>
                <div><Burger/></div>
            </header>
            <div className={classes.content}>
                <Route path="/preJunior/homework1" render={() =>
                    <Message name={"Valerian Ehret"} text={"Lorem ipsum dolor sit amet, "} time={"12:05"}
                    />
                }/>

                <Route path="/preJunior/homework2" render={() =>
                    <Activities
                        activities={props.activities}
                        removeActivity={props.removeActivity}
                        changeFilter={props.changeFilter}
                    />
                }/>
                {/*<div className={"Activity"}>*/} {/*</div>*/}
                <Route path="/preJunior/homework3" render={() =>
                    <List names={props.names}
                          removeNames={props.removeNames}
                          addName={props.addName}
                          greeting={props.greeting}
                    />
                }/>
            </div>
        </div>
    )
}