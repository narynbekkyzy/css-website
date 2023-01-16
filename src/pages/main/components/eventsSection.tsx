/** 
 * This component is no longer in use but is being kept for archival purposes for now. It was a previous
 * iteration of displaying our upcoming events.
 * -> function EventSection() - primary export function for component
 **/
import "./eventsSection.css";
import { Card } from "../../../components/card/eventsCard";
import data from "../../../content/header_footer.json";
import { Title } from "../../../components/titles/Title";

// primary export function for component
export function EventSection(): JSX.Element {
    return (
    <section className="events-section">
    {/** html section /\, followed by header \/ **/}
      <Title
        text={"Our Upcoming events"}
        name={"Primary"}
        styling={"MiddleBlack"}
            ></Title>
      {/** tagging buttons */}
      <div className="type-of-event__btn">
        <button className="btn selected">All</button>
        {data.eventCategories.map((event, index) => {
          return <button className="btn">{event.type}</button>;
        })}
      </div>
      {/** event cards **/}
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
