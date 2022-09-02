import React from "react";
import classes from "./VolunteersTable.module.css";

function Volunteer(props) {
  return (
    <tr className={classes["table-row"]}>
      <td>{props.data.name}</td>
      <td>{props.data.university}</td>
      <td>{props.data.grade}</td>
      <td>{props.data.field}</td>
    </tr>
  );
}

export default Volunteer;
