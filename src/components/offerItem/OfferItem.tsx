import './OfferItem.css'
import data from "../../content/header_footer.json";
import { isPropertySignature } from 'typescript';

interface Item {
    text?: string;
    image: string;
}

export function OfferItem(props: Item): JSX.Element  {
    return (
        <div className={props.image}>
            <img  
                src={props.image} >
            </img>
            <p>{props.text}</p>
        </div>
    )
}