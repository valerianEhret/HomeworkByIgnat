import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



export function Navbar() {
    return(
        <div className={classes.menu}>
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
            <div className={classes.navIcon}></div>
        </div>
    )


}