import { motion, usePresence } from "framer-motion";
import { useEffect } from "react";
import "./Card.css";

interface EventCardProps{
    title: string;
    description: string;
    location: string;
    date: string;
    img: string;
    type: string;
    key: number;
}


export function EventCard(props: EventCardProps): JSX.Element {

    const [isPresent, safeToRemove] = usePresence()

    useEffect(() => {
        !isPresent && setTimeout(safeToRemove, 1000)
      }, [isPresent])

      
    return (
        <div className="Card SpreadColumn">
                <img className="Event-img" src={"/images/events/" + props.img}/>
                <h3 className="Card-H3 standard-padding">{props.title}</h3>
                <p className="Card-P standard-padding">{props.description}</p>
                <div className="SpreadRow standard-padding">
                    <h3 className="Card-H3">{props.date}</h3>
                    <h3 className="Card-H3">{props.location}</h3>
                </div>
                <div className="SpreadRow standard-padding">
                    <button className="FL-white">Add event to the calendar</button>
                </div>
                <div className="Card-TYPE SpreadRow" style={{"backgroundColor" : `var(--event-card-color-${props.type}`}}></div>
            </div>
    )
}