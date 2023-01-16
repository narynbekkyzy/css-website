/**
 * OurUpcomingEvents.tsx is the component which generates a display of the closest events (chronologically)
 * on the main page.
 * -> interface UpcomingEventsProps - parameters required by the function
 * -> function UpcomingEvents() - primary export function for the component
 **/
import { EventCard } from "../../../components/event_card/EventCard";
import data from "../../../content/events.json";
import { Title } from "../../../components/titles/Title";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// parameters required by the function
interface UpcomingEventsProps {
  title: string;    //Title for section
}

// primary export function for the component
export function UpcomingEvents(props: UpcomingEventsProps): JSX.Element {
  const [events, setEvents] = useState(""); // tag with which cards are currently being filtered
  const [allCards, setAllCards] = useState(data.events); // card data set

  // sets the card data set to be filtered by the current tag (or to include all card data if no tag is active)
  function filterAllCards() {
    if (events === "") {
      setAllCards(data.events.filter((event, index) => index < 3));
    } else {
      let temp = data.events.filter((event) => event.type.includes(events));
      setAllCards(temp.filter((event, index) => index < 3));
    }
  }

  // filters cards when state is changed
  useEffect(() => {
    filterAllCards();
  }, [events]);

  return (
      <>
      {/** Primary container for component **/}
        <div className="EventsContainer">
        {/** Component Header **/}
        <Title text={props.title} name={"Primary"} styling={"MiddleBlack"} />

          {/** Row of filtering buttons **/}
          <div className="EventsContainer-Categories">
          {/** Remove tag button **/}
          <button
            className={"" === events ? "selected" : ""}
            onClick={() => setEvents("")}
          >
            all
          </button>
          {/** Button for each tag **/}
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

       {/** Generates cards for current events **/}
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
                  type={event.type[0]}
                />
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </>
  );
}
