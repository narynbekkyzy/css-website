/*
    This file implements WhatWeOffer section including:
        - 'What we offer' title
        - 6 OfferItems describing each part (contents from what_we_offer.json)
*/
import './WhatWeOffer.css'
import { Title } from '../../../components/titles/Title';
import { OfferItem } from '../../../components/offerItem/OfferItem';

interface MyItem {
    name: string;
    link: string;
    img: string;
}

interface MyTitlte {
    name: string;
    styling: string;
    text: string;
}

interface WhatWeOffer{
    title: MyTitlte;
    items: Array<MyItem>;
}

export function WhatWeOffer(props: WhatWeOffer): JSX.Element {
    return (
        <div className='WhatWeOffer'>
            <div className='WhatWeOffer-Container'>
                <Title 
                name = {props.title.name}
                styling = {props.title.styling}
                text = {props.title.text}/>
                <div className='WhatWeOffer-Row'>
                    {props.items.map((item, index) => {
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