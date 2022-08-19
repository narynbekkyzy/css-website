import './Events.css';
import { EventCard } from '../../components/event_card/EventCard';

export function EventsPage(): JSX.Element {
    return(
        <>
        <EventCard 
            title={'Interview Experience'} 
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. '} 
            location={'OU312'} 
            date={'April 16'} 
            img={'/images/events/TeslaPoster.png'} 
            type={'career'}
        />
            
        </>
    )

}