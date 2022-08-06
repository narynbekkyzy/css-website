import "./eventsSection.css";
import { Card } from "../../../components/card/eventsCard";
import data from "../../../content/header_footer.json";
import { Title } from "../../../components/titles/Title";

export function EventSection(): JSX.Element {
  return (
    <section className="events-section">
      <Title
        text={"Our Upcoming events"}
        name={"Primary"}
        style={"MiddleBlack"}
      ></Title>
      <div className="type-of-event__btn">
        <button className="btn selected">All</button>
        {data.eventCategories.map((event, index) => {
          return <button className="btn">{event.type}</button>;
        })}
      </div>

      <div className="event-cards">
        {data.eventCategories.map((event, index) => {
          if (index < 3) {
            return (
              <Card
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                type={event.type}
              ></Card>
            );
          }
        })}
      </div>
    </section>
  );
}
