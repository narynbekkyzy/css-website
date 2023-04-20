/**
 * Events.tsx is the component which displays the event page. This page allows users to find out information
 * on events hosted by, or affiliated with, the CSS club.
 * -> function EventsPage() - The main export function which display the Events Page component.
 **/
import "./Events.css";
import { EventCard } from "../../components/event_card/EventCard";
import data from "../../content/events.json";
import { Title } from "../../components/titles/Title";
import { Motion } from "../../components/Motion";
import { useEffect, useState } from "react";
import { PaginationApplicator } from '../../components/pagination/PaginationApplicator';
import { AnimatePresence, motion } from "framer-motion"

//The main export function which display the Events Page component
export function EventsPage(): JSX.Element {

    const [events, setEvents] = useState("");
    const [allCards, setAllCards] = useState(data.events);
    const currentDate = new Date();

    // Filters cards based on filter tag
    function filterAllCards() {
        //If no filter is applied, adds all events, otherwise, sets cards to only display events with matching tag
        if (events === "") {
            setAllCards(data.events);
        } else {
            setAllCards(data.events.filter(event => event.type.includes(events)));
        }
    }

    // Returns a paginated display of cards of the (possibly filtered) events data
    function cardCollector() {
        let collection: JSX.Element[] = [] // Array to store all cards.
        // Adds each card that is currently stored within this (possibly filtered) state variable
        // as an EventCard Component with an animated wrapper around it.
        // Compare current date and event date to decide whether passed
        allCards.map((event, key) => {
            const isExpired = currentDate.getTime() > new Date(event.end).getTime();

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
                                type={event.type[0]}
                                isExpired={isExpired}
                            />
                        </AnimatePresence>
                    }
                    key={event.title + key}
                />
            );
        })
        // Using filtered list, a paginated display is created using that dataset.
        return <PaginationApplicator
                    key={Math.random()} //DON'T TOUCH. This is needed to actually re-render while sorting.
                    data={collection}
                    class="EventsContainer-Current"
                    pageSize={6}
                />
    }

    // Filters cards whenever a state is changed.
    useEffect(() => {
        filterAllCards();
    } , [events]);

  // Primary div for Events Pages
  return (
    <>
      <div className="EventsContainer">
        {/** Header for the Events Page **/}
        <Title 
            text={data.title} 
            name={"Primary"}
            styling={"MiddleBlack"}
        />
        {/** Buttons to filter events cards **/}
        <div className="EventsContainer-Categories">
            <button className={ "" === events ? "selected" : ""} onClick={() => setEvents("")}>all</button>
            {data.categories.map((category, index) => {
                return(
                    <button className={category === events ? "selected" : ""} onClick={() => setEvents(category)}>{category}</button>
                )
            })}
        </div>
        {/** Card Display **/}
        <div className="EventsContainer-Current">
            {cardCollector()}
        </div>

      </div>
    </>
  );
}
