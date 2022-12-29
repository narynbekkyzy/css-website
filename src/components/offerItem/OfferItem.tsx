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
    detail?: string;
}

export function OfferItem(props: Item): JSX.Element  {
    return (
        <div className='props'>
            <img className='OfferItemImage'
                src={props.image} >
            </img>
            <p className='OfferItemText'>{props.text}</p>
            {/* <span className="propstext">{props.detail}</span> */}
        </div>
    )
}