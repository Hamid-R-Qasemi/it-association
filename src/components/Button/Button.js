import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${classes.button} ${props.className ? props.className : ""}`}
      onClick={props.onClick}
      href={props.href}
    >
      {props.href ? (
        <a href={props.href} target={props.target}>
          {props.children}
        </a>
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
}

export default Button;
