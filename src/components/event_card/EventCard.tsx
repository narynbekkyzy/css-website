import "./EventCard.css";


interface EventCardProps{
    title: string;
    description: string;
    location: string;
    date: string;
    img: string;
    type: string;
}


export function EventCard(props: EventCardProps): JSX.Element {


    return(
        <div className="EventCard">
            <img src={props.img}/>
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
    )
}