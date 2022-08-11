import React from 'react';

import { TextContainer } from './textContainer/textContainer'

interface WhoWeAre {
    desc: string;
    img: React.ReactNode;
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function WhoWeAre(props: WhoWeAre): JSX.Element {
    return <div style={{
        backgroundColor: "var(--black)", width: "100%",
        display: "flex", justifyContent: "center" 
    }}>
        <div style={{ margin: "80px", width: "fit-content"}}>
            <TextContainer
                isPrimary={true}
                titleText={"Who We Are"}
                desc={props.desc}
                white={true}
                right={true}
                img={props.img}
                imgFirst={true}
                buttons={props.buttons}
            />
        </div>
    </div>
}