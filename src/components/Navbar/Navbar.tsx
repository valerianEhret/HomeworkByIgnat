import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



export function Navbar() {
    return(
        <div className={classes.menu}>
            <a className={classes.menuBtn}></a>
            <div className={classes.menuList}>
                <div>
                    <NavLink className={classes.link} to="/preJunior">PreJunior</NavLink>
                </div>
                <div>
                    <NavLink className={classes.link} to="/Junior">Junior</NavLink>
                </div>
               <div>
                   <NavLink className={classes.link}  to="/Junior+">Junior+</NavLink>
               </div>

            </div>
        </div>
    )


}