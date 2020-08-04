import React, {ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import classes from "./ButtonNya.module.css"
import {InputNyaPropsType} from "./InputNya";


type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {title:string}


export function ButtonNya (props: ButtonNyaPropsType) {


    return (
        <>
           <button className={classes.buttonNya}{...props} >{props.title}</button>
        </>
    );
};