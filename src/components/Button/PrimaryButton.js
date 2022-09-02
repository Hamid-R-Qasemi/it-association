import classes from "./PrimaryButton.module.css";
import Button from "./Button";

function PrimaryButton(props) {
  return (
    <Button
      className={`${classes["primary-button"]} ${
        props.className ? props.className : ""
      }`}
      onClick={props.onClick}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </Button>
  );
}

export default PrimaryButton;
