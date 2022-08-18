import React from 'react';

import { TextContainer } from '../../../components/textContainer/textContainer'

interface WhatWeBuild {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of a project example (dVox)
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function WhatWeBuild(props: WhatWeBuild): JSX.Element {
    //Outer div is a container for center and establishing the background block
    //Inner div is for positioning the actual TextContainer
    return <div className="WhatWeBuild-Container" style={{
        backgroundColor: "var(--black)", width: "100%",
        display: "flex", justifyContent: "center" ,
        overflow: "hidden", // Added by Aleksandr on Aug 18, 2022
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