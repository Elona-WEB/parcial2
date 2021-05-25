const Detail = (props) => {
  console.log("PROPS DETAIL");
  console.log(props);
  return (
    <div className="card">
      <img className="card-img-top" src={props.info.poster} alt="Poster" />
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
