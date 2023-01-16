/**
 * WhatWeBuild.tsx is the main component for the "What We Build" section of the main page.
 * -> interface WhatWeBuild - parameters required for the function of the component.
 * -> function WhatWeBuild() - primary export function for the component
 **/
import React from 'react';

import { TextContainer } from '../../../components/textContainer/textContainer'
import './WhatWeBuild.css';

// parameters required for the function of the component.
interface WhatWeBuild {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of a project example (dVox)
    buttons: Array<React.ReactNode>;//Array of buttons
}

// primary export function for the component
export function WhatWeBuild(props: WhatWeBuild): JSX.Element {
    //Outer div is a container for center and establishing the background block
    //Inner div is for positioning the actual TextContainer
    return <div className="WhatWeBuild-Container">
        <div className="WhatWeBuild-Content ">
            <TextContainer
                isPrimary={true}
                titleText={"What We Build"}
                desc={props.desc}
                white={true}
                img={props.img}
                buttons={props.buttons}
            />
        </div>
    </div>
}