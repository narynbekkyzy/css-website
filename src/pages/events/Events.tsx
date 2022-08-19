import "./Events.css";
import { EventCard } from "../../components/event_card/EventCard";
import data from "../../content/events.json";
import { Title } from "../../components/titles/Title";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

export function EventsPage(): JSX.Element {

    const [events, setEvents] = useState("");
    const [allCards, setAllCards] = useState(data.events);

    function filterAllCards() {
        if (events === "") {
            setAllCards(data.events);
        } else {
            setAllCards(data.events.filter(event => event.type === events));
        }
    }
    
    useEffect(() => {
        filterAllCards();
    } , [events]);

  return (
    <>
      <div className="EventsContainer">
        <Title 
            text={data.title} 
            name={"Primary"}
            styling={"MiddleBlack"}
        />
    
        <div className="EventsContainer-Categories">
            <button onClick={() => setEvents("")}>all</button>
            {data.categories.map((category, index) => {
                return(
                    <button onClick={() => setEvents(category)}>{category}</button>
                )
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
