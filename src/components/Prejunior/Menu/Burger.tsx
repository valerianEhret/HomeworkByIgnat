import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Burger.module.css"


export function Burger() {
    return(
        <div className={classes.container}>
            <div className={classes.headerBody}>
                <div className={classes.burger}>
                    <span></span>
                </div>
                <nav className={classes.menu}>
                   <ul className={classes.list}>
                       <li>
                           <NavLink  className={classes.link}   to="/preJunior/homework1">homework1</NavLink>
                       </li>
                       <li>
                           <NavLink    className={classes.link}  to="/preJunior/homework2">homework2</NavLink>
                       </li>
                       <li>
                           <NavLink  className={classes.link}   to="/preJunior/homework3">homework3</NavLink>
                       </li>
                   </ul>
                </nav>
            </div>
        </div>
    )


}