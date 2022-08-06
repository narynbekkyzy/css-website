/*
    This file implements WhatWeOffer section including:
        - 'What we offer' title
        - 6 OfferItems describing each part (contents from what_we_offer.json)
*/
import './WhatWeOffer.css'
import data from "../../../content/what_we_offer.json";
import { Title } from '../../../components/titles/Title';
import { OfferItem } from '../../../components/offerItem/OfferItem';

export function WhatWeOffer(): JSX.Element {
    return (
        <div className='WhatWeOffer'>
            <div className='WhatWeOffer-Container'>
                <Title 
                name = {'Primary'}
                styling = {'MiddleBlack'}
                text = {'What we offer'}/>
                <div className='WhatWeOffer-Row'>
                    {data.items.map((item, index) => {
                        return(
                            <a href={item.link} target="_blank" rel="noreferrer noopener">
                                {<OfferItem 
                                    image={item.img}
                                    text={item.name}/>
                                }
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}