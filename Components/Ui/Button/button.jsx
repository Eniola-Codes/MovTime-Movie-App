import classes from '../../../styles/UiStyle/ButtonStyle/Button.module.css';

const button = (props) => {
  return (
    <button className={classes.button}>{props.children}</button>
  )
}

export default button