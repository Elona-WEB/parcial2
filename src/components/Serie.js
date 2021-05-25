import React, { useState } from "react";
import { FormattedDate } from "react-intl";
import Detail from "./Detail";

const Serie = (props) => {
  var date = props.serie.release;
  var datearray = date.split("/");
  var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];

  const onTrigger = () => {
    props.parentCallback(props.serie);
  };

  return (
    <tr onClick={onTrigger}>
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
