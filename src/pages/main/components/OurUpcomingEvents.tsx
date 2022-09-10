import { EventCard } from "../../../components/event_card/EventCard";
import data from "../../../content/events.json";
import { Title } from "../../../components/titles/Title";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface UpcomgingEventsProps {
  title: string;
}

export function UpcomingEvents(props: UpcomgingEventsProps): JSX.Element {
  const [events, setEvents] = useState("");
  const [allCards, setAllCards] = useState(data.events);

  function filterAllCards() {
    if (events === "") {
      setAllCards(data.events.filter((event, index) => index < 3));
    } else {
      let temp = data.events.filter((event) => event.type === events);
      setAllCards(temp.filter((event, index) => index < 3));
    }
  }

  useEffect(() => {
    filterAllCards();
  }, [events]);

  return (
    <>
      <div className="EventsContainer">
        <Title text={props.title} name={"Primary"} styling={"MiddleBlack"} />

        <div className="EventsContainer-Categories">
          <button
            className={"" === events ? "selected" : ""}
            onClick={() => setEvents("")}
          >
            all
          </button>
          {data.categories.map((category, index) => {
            return (
              <button
                className={category === events ? "selected" : ""}
                onClick={() => setEvents(category)}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="EventsContainer-Current">
          {allCards.map((event, key) => {
            return (
              <AnimatePresence mode="wait">
                <EventCard
                  key={key}
                  title={event.title}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  endDate={event.end}
                  img={event.img}
                  type={event.type}
                />
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </>
  );
}
