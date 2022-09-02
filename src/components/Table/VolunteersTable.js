import React from "react";
import Volunteer from "./Volunteer";
import { volunteersData } from "./VolunteersData";
import classes from "./VolunteersTable.module.css";

function VolunteersTable() {
  return (
    <>
      <div className={classes.scrollable}>
        <table>
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>دانشگاه</th>
              <th>مقطع تحصیلی</th>
              <th>رشته - گرایش</th>
            </tr>
          </thead>
          <tbody>
            {volunteersData.map((item) => {
              return <Volunteer data={item} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default VolunteersTable;
