import classes from "./SecondaryButton.module.css";
import Button from "./Button";

function SecondaryButton(props) {
  return (
    <Button
      className={classes["secondary-button"]}
      onClick={props.onClick}
      href={props.href}
      target={props.target}
    >
      <>{props.children}</>
    </Button>
  );
}

export default SecondaryButton;
