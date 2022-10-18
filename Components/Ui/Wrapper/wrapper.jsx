import React from 'react';
import classes from '../../../styles/UiStyle/Wrapper/Wrapper.module.css'

const wrapper = (props) => {
  return (
    <div className={classes.wrapper}>{props.children}</div>
  )
}

export default wrapper