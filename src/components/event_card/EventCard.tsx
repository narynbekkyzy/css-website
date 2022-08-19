import { motion, usePresence } from "framer-motion";
import { useEffect } from "react";
import "./EventCard.css";

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

      
    return(
        <motion.div
            key={props.title + props.key}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring" }}
        >
            <div className="EventCard">
                <img src={"/images/events/" + props.img}/>
                <h3 className="EventCard-H3 standard-padding">{props.title}</h3>
                <p className="EventCard-P standard-padding">{props.description}</p>
                <div className="standard-padding">
                    <h3 className="EventCard-H3">{props.date}</h3>
                    <h3 className="EventCard-H3">{props.location}</h3>
                </div>
                <div className="standard-padding">
                    <button className="FL-white">Add event to the calendar</button>
                </div>
                <div className="EventCard-TYPE" style={{"backgroundColor" : `var(--event-card-color-${props.type}`}}></div>
            </div>       
        </motion.div>
    )
}