import React from 'react';

import { TextContainer } from '../../../components/textContainer/textContainer'

interface WhoWeAre {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of club members
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function WhoWeAre(props: WhoWeAre): JSX.Element {
    //Outer div is a container for center and establishing the background block
    //Inner div is for positioning the actual TextContainer
    return <div className="WhoWeAre-Container" style={{
        backgroundColor: "var(--black)", width: "100%",
        display: "flex", justifyContent: "center" 
    }}>
        <div className="WhoWeAre-Content" style={{
            marginTop: "80px", marginBottom: "80px",
            marginLeft: "219px", marginRight: "219px", width: "fit-content"
        }}>
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