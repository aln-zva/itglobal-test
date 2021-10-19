import classes from './SideMenuSubitem.module.css'
import React from "react";

const SideMenuSubitem = props => {
    return (
        <li className={classes.subitem}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.info}>{props.info}</div>
        </li>
    )
}

export default SideMenuSubitem
