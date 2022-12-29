/*
    This file implements WhatWeOffer section including:
        - 'What we offer' title (pass through 'title' param from json file)
        - OfferItems describing each part (contents through 'items' from json file)
*/
import './WhatWeOffer.css'
import { Title } from '../../../components/titles/Title';
import { OfferItem } from '../../../components/offerItem/OfferItem';

interface MyItem {
    name: string;
    link: string;
    img: string;
    detail: string;
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
                            <a className='tooltip'>
                                {<OfferItem 
                                    image={item.img}
                                    text={item.name}
                                    detail={item.detail}/>
                                }
                                <span className="tooltiptext">{item.detail}</span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}