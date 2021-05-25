import React from "react";
import { FormattedDate } from "react-intl";

const Serie = (props) => {
  console.log(props.serie.release);
  let date = new Date(props.serie.release);
  return (
    <tr>
      <th scope="row">{props.serie.id}</th>
      <td>{props.serie.name}</td>
      <td>{props.serie.channel}</td>

      <td>{props.serie.seasons}</td>
      <td>{props.serie.episodes}</td>
      <td>
        <FormattedDate value={date} />
      </td>
    </tr>
  );
};

export default Serie;
