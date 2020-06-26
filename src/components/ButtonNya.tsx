import React, {ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import classes from "./ButtonNya.module.css"
import {InputNyaPropsType} from "./InputNya";


type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export function ButtonNya (props: ButtonNyaPropsType) {


    return (
        <>
           <button className={classes.buttonNya}{...props} >add new student</button>
        </>
    );
};