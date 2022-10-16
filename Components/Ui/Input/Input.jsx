import classes from "../../../styles/UiStyle/InputStyle/Input.module.css";

const input = (props) => {
  return (
    <div className={`${classes.input_form} ${props.className}`}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
};

export default input;
