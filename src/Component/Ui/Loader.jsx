import React from 'react';
import spinner from "../../Assets/Icons/spinner.svg";
import classes from '../../styles/UiStyle/Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.loader_div}>
    <img src={spinner} alt="loader" className={classes.loader}></img>
  </div>
)
}

export default Loader