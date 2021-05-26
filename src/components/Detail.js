import React, { useState, useEffect } from "react";

const Detail = (props) => {
  const [alt, setAlt] = useState("");
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (props.online === false) {
      setAlt("Error while loading img");
      setSrc("");
    } else {
      setAlt("Poster of " + props.info.name);
      setSrc(props.info.poster);
    }
  }, [props.online, props.info.poster, props.info.name]);

  return (
    <div className="card">
      <img className="card-img-top" src={src} alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{props.info.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.info.description}
        </h6>
        <a href={props.info.webpage}>{props.info.webpage}</a>
      </div>
    </div>
  );
};

export default Detail;
