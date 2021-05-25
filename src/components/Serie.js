import React from "react";
import { FormattedDate } from "react-intl";

const Serie = (props) => {
  var date = props.serie.release;
  var datearray = date.split("/");

  var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
  return (
    <tr>
      <th scope="row">{props.serie.id}</th>
      <td>{props.serie.name}</td>
      <td>{props.serie.channel}</td>

      <td>{props.serie.seasons}</td>
      <td>{props.serie.episodes}</td>
      <td>
        <FormattedDate value={new Date(newdate)} />
      </td>
    </tr>
  );
};

export default Serie;
