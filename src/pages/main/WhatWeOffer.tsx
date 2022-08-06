import './WhatWeOffer.css'
import data from "../../content/header_footer.json";
import { Title } from '../../components/titles/Title';
import {OfferItem} from '../../components/offerItem/OfferItem'

export function WhatWeOffer(): JSX.Element {
    return (
        <div className='WhatWeOffer'>
            <div className='WhatWeOffer-Container'>
                <Title 
                name = {'Primary'}
                style = {'MiddleBlack'}
                text = {'What we offer'}/>
                <div className='WhatWeOffer-Row'>
                    <div className='WhatWeOffer-Row-1'>
                        <OfferItem text={'Mentorship'} image= {'Mentorship'}></OfferItem>
                    </div>
                    <div className='WhatWeOffer-Row-2'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}