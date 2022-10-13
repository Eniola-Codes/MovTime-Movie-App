import Image from "next/image";
import spinner from "../../../public/Assets/Icons/spinner.svg";
import classes from "../../../styles/UiStyle/AppStatesStyle/Loader.module.css";

const Loader = (props) => {
  return (
    <div className={`${classes.loader_div} ${props.className}`}>
      <Image src={spinner} alt="loader" width={100} height={100}></Image>
    </div>
  );
};

export default Loader;
