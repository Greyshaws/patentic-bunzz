import React from 'react'
import Cube from './Cube'
import classes from "./Loading.module.css"

const LogoIcon = ({className}) => {
  return (
    <div className={`${className || ""} ${classes.loading}`}>
        <div className={classes["icon"]}>
            <Cube className={classes["cube"]}/>
            <Cube className={classes["cube"]} />
            <Cube className={classes["cube"]}/>
            <Cube className={classes["cube"]}/>
            <Cube className={classes["cube"]}/>
        </div>
    </div>
  )
}

export default LogoIcon