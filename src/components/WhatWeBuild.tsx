import React from 'react';

import { TextContainer } from './textContainer/textContainer'

interface WhatWeBuild {
    desc: string;
    img: React.ReactNode;
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function WhatWeBuild(props: WhatWeBuild): JSX.Element {
    return <div className="WhatWeBuild-Container" style={{
        backgroundColor: "var(--black)", width: "100%",
        display: "flex", justifyContent: "center" 
    }}>
        <div className="WhatWeBuild-Content" style={{
            marginLeft: "219px", width: "fit-content"
        }}>
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