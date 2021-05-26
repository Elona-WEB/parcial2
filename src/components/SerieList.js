import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Serie from "./Serie";
import Detail from "./Detail";

const SerieList = (props) => {
  const [series, setSeries] = useState([]);
  const [detail, setDetail] = useState(false);
  const [values, setValues] = useState([]);
  const [online, setOnline] = useState(false);
  const [img, setImg] = useState(true);
  const locale = props.lan;

  useEffect(() => {
    //REVISO LOCALSTORAGE
    if (!navigator.onLine) {
      setOnline(false);
      if (localStorage.getItem("series") === "") {
        setSeries([]);
      } else {
        let a = localStorage.getItem("series");
        setSeries(JSON.parse(a));
      }
    } else {
      setOnline(true);
      //FETCH
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
          localStorage.setItem("series", JSON.stringify(r));
        });
    }
  }, []);

  const handleCallback = (e, co) => {
    setImg(co);
    setValues(e);
    setDetail(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
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
                <Serie key={i} serie={e} parentCallback={handleCallback} />
              ))}
            </tbody>
          </table>
        </div>
        {detail && (
          <div className="col">
            <Detail info={values} online={img} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SerieList;
