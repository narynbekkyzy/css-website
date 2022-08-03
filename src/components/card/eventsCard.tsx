import "./Card.css";

interface cardInterface {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export function Card(props: cardInterface): JSX.Element {
  return (
    <div className="card">
      <div className="card__hero">
        <img src={props.image} alt="" className="card-image__hero" />
      </div>
      <div className="card-main">
        <div className="card-title__container">
          <h3 className="card__title">{props.title}</h3>
        </div>
        <div className="card-info__container">
          <p className="card-info">{props.description}</p>
        </div>
        <div className="card-details__container">
          <div className="card-details">
            <h3 className="card-detail">{props.date}</h3>
          </div>
          <div className="card-details">
            <h3 className="card-detail">{props.location}</h3>
          </div>
        </div>
        <button className="card-btn__oulined card-btn__text">
          Add event to Calendar
        </button>
      </div>
      <div className="card-bottom type-two"></div>
    </div>
  );
}
