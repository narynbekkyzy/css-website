import { usePresence } from "framer-motion";
import { atcb_action } from 'add-to-calendar-button';
import './atcb.css';
import React, { useState } from "react";
import { EmailPopup } from "./EmailPopup"
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
    const [calendar, openCalendar] = useState(false)

    React.useEffect(() => {
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
                <button id="testbut" className="FL-white" onClick={e => {
                  e.preventDefault();
                  atcb_action({
                    name: props.title,
                    startDate: "2022-10-14",
                    endDate: "2022-10-18",
                    options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
                    timeZone: "Europe/Berlin",
                    iCalFileName: "Reminder-Event",
                    listStyle: "modal",
                  });
                }}>Add event to the calendar</button>
                </div>
                <div className="Card-TYPE SpreadRow" style={{"backgroundColor" : `var(--event-card-color-${props.type}`}}></div>
        </div>
    )
}