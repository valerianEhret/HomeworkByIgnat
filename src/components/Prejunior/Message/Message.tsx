import React from "react";
import classes from "./Message.module.css"
type MessagePropsType = {
    name:string
    text:string
    time: string
}



export function Message(props:MessagePropsType) {
    debugger
    return (
        <div className={classes.wrapper}>
            <div className={classes.avatar}>
                <img src="https://media.gettyimages.com/vectors/software-language-programmer-avatar-vector-id861342502" alt="avatar" />
            </div>
            <div className={classes.post}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.time}>{props.time}</div>
                <div className={classes.text}>{props.text}</div>
            </div>
        </div>

    )
}