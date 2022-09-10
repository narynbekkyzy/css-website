import "./Events.css";
import { EventCard } from "../../components/event_card/EventCard";
import data from "../../content/events.json";
import { Title } from "../../components/titles/Title";
import { Motion } from "../../components/Motion";
import { useEffect, useState } from "react";
import { PaginationApplicator } from '../../components/pagination/PaginationApplicator';
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

    function cardCollector() {
        let collection: JSX.Element[] = []
        allCards.map((event, key) => {
            collection.push (
                <Motion
                    component={
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
                    }
                    key={event.title + key}
                />
            );
        })
        return <PaginationApplicator
                    key={Math.random()}
                    data={collection}
                    class="EventsContainer-Current"
                    pageSize={6}
                />
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
            <button className={ "" === events ? "selected" : ""} onClick={() => setEvents("")}>all</button>
            {data.categories.map((category, index) => {
                return(
                    <button className={category === events ? "selected" : ""} onClick={() => setEvents(category)}>{category}</button>
                )
            })}
        </div>
        
       
        <div className="EventsContainer-Current">
            {cardCollector()}
        </div>

      </div>
    </>
  );
}
