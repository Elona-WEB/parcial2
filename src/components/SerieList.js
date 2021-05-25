import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Serie from "./Serie";

const SerieList = (props) => {
  const [series, setSeries] = useState([]);
  const locale = props.lan;

  useEffect(() => {
    let url = "";
    if (locale === "es") {
      url =
        "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json";
    } else {
      url =
        "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json";
    }
    fetch(url)
      .then((result) => result.json())
      .then((r) => {
        setSeries(r);
      });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead className="thead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Name" />
            </th>
            <th scope="col">
              <FormattedMessage id="Channel" />
            </th>
            <th scope="col">
              <FormattedMessage id="Seasons" />
            </th>
            <th scope="col">
              <FormattedMessage id="Episodes" />
            </th>
            <th scope="col">
              <FormattedMessage id="RD" />
            </th>
          </tr>
        </thead>
        <tbody>
          {series.map((e, i) => (
            <Serie key={i} serie={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SerieList;
