/*
    This file implements WhatWeOffer section including:
        -> interface MyTitle - 'What we offer' title (pass through 'title' param from json file)
        -> interface MyTitle - OfferItems describing each part (contents through 'items' from json file)
        -> interface WhatWeOffer - required parameters for WhatWeOffer section, which is comprised of previous two params
        -> function WhatWeOffer() - export function for main component
*/
import './WhatWeOffer.css'
import { Title } from '../../../components/titles/Title';
import { OfferItem } from '../../../components/offerItem/OfferItem';

// 'What we offer' title (pass through 'title' param from json file)
interface MyItem {
    name: string;
    link: string;
    img: string;
    detail: string;
}

// OfferItems describing each part (contents through 'items' from json file)
interface MyTitle {
    name: string;
    styling: string;
    text: string;
}

// Parameters for WhatWeOffer section, which is comprised of previous two params
interface WhatWeOffer{
    title: MyTitle;
    items: Array<MyItem>;
}

// export function for main component
export function WhatWeOffer(props: WhatWeOffer): JSX.Element {
    return (
        // Outer 'Background' Component
        <div className='WhatWeOffer'>
            {/** Inner 'Content' Component **/}
            <div className='WhatWeOffer-Container'>
                {/** Header component **/}
                <Title 
                name = {props.title.name}
                styling = {props.title.styling}
                text={props.title.text} />
                {/** Interactive "offer" items **/}
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