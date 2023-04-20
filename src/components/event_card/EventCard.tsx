/**
 * EventCard.tsx is the card component to display event in Event Page.
 * -> interface EventCardProps - parameters required for the function of the component.
 * -> function Footer() - primary export function for the component
 **/


import { usePresence } from "framer-motion";
import { atcb_action } from 'add-to-calendar-button';
import './atcb.css';
import React, { useState } from "react";
import "./Card.css";

interface EventCardProps{
    title: string;          
    description: string;   
    location: string;     //which room on campus
    date: string;
    endDate: string;
    img: string;
    type: string;
    key: number;
    isExpired?: boolean;
}


export function EventCard(props: EventCardProps): JSX.Element {

    const [isPresent, safeToRemove] = usePresence()

    //period time of the event
    const date = new Date(props.date)
    const endDate = new Date(props.endDate)

    React.useEffect(() => {
        !isPresent && setTimeout(safeToRemove, 1000)
      }, [isPresent])

    
    //Converting month in number to word
    function MonthCalc(month: number): string {
        const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        return names[month]
    }

    //if hour is less than 10, add an 0 before hour
    function zeroAppender(val: number): string {
        var result = ""
        val < 10 ? result = "0" + val.toString() : result = val.toString()
        return result
    }

    return (
        <div className={`Card SpreadColumn ${props.isExpired ? 'Expired' : ''}`}>
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
                    startDate: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
                      startTime: zeroAppender(date.getHours()) + ":" + zeroAppender(date.getMinutes()),
                      endTime: zeroAppender(endDate.getHours()) + ":" + zeroAppender(endDate.getMinutes()),
                      location: props.location,
                    options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
                    timeZone: "US/Michigan",
                    iCalFileName: props.title + "-Reminder-Event",
                    listStyle: "modal",
                  });
                }}>Add to the calendar</button>
                </div>
                <div className="Card-TYPE SpreadRow" style={{"backgroundColor" : `var(--event-card-color-${props.type}`}}></div>
        </div>
    )
}