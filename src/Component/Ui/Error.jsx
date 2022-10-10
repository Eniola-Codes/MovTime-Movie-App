import React from 'react';
import classes from '../../styles/UiStyle/Error.module.css'

const Error = (props) => {
  return (
    <div className={classes.error_div}>
        <p className={classes.error}>{props.error}</p>
      </div>
  )
}

export default Error;