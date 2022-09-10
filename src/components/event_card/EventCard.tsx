import { usePresence } from "framer-motion";
import { atcb_action } from 'add-to-calendar-button';
import './atcb.css';
import React, { useState } from "react";
import "./Card.css";

interface EventCardProps{
    title: string;
    description: string;
    location: string;
    date: string;
    endDate: string;
    img: string;
    type: string;
    key: number;
}


export function EventCard(props: EventCardProps): JSX.Element {

    const [isPresent, safeToRemove] = usePresence()

    const date = new Date(props.date)
    const endDate = new Date(props.endDate)

    React.useEffect(() => {
        !isPresent && setTimeout(safeToRemove, 1000)
      }, [isPresent])

    function MonthCalc(month: number): string {
        const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        return names[month - 1]
    }

    function zeroAppender(val: number): string {
        var result = ""
        val < 10 ? result = "0" + val.toString() : result = val.toString()
        return result
    }

    return (
        <div className="Card SpreadColumn">
                <img className="Event-img" src={"/images/events/" + props.img}/>
                <h3 className="Card-H3 standard-padding">{props.title}</h3>
                <p className="Card-P standard-padding">{props.description}</p>
                <div className="SpreadRow standard-padding">
                <h3 className="Card-H3">{(date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ":" + zeroAppender(date.getMinutes()) + ((date.getHours() < 12 || date.getHours() == 24) ? "am" : "pm") + ", " + MonthCalc(date.getMonth()) + " " + date.getDate()}</h3>
                    <h3 className="Card-H3">{props.location}</h3>
                </div>
                <div className="SpreadRow standard-padding">
                <button id="testbut" className="FL-white" onClick={e => {
                  e.preventDefault();
                  atcb_action({
                      name: props.title,
                      description: props.description,
                    startDate: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
                      startTime: zeroAppender(date.getHours()) + ":" + zeroAppender(date.getMinutes()),
                      endTime: zeroAppender(endDate.getHours()) + ":" + zeroAppender(endDate.getMinutes()),
                      location: props.location,
                    options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
                    timeZone: "US/Michigan",
                    iCalFileName: props.title + "-Reminder-Event",
                    listStyle: "modal",
                  });
                }}>Add event to the calendar</button>
                </div>
                <div className="Card-TYPE SpreadRow" style={{"backgroundColor" : `var(--event-card-color-${props.type}`}}></div>
        </div>
    )
}