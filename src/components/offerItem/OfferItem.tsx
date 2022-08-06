/* 
    This file implements OfferItem in WhatWeOffer section. 
    Each Item has:
        - image: icon appeared to describe a part
        - text: description under icon
*/
import './OfferItem.css'

interface Item {
    image: string;
    text?: string;
}

export function OfferItem(props: Item): JSX.Element  {
    return (
        <div className='props'>
            <img  
                src={props.image} >
            </img>
            <p className='Text'>{props.text}</p>
        </div>
    )
}