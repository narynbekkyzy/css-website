/**
 * WhoWeAre.tsx is a component located on the Main Page which contains a brief account of the club's identity.
 * -> interace WhoWeAre - An interface representing all the necessary variables to be passed to this component
 * -> function WhoWeAre() - 
 **/
import React from 'react';

import { TextContainer } from '../../../components/textContainer/textContainer'

interface WhoWeAre {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of club members
    buttons: Array<React.ReactNode>;//Array of buttons
}
// A brief account of the club's identity
export function WhoWeAre(props: WhoWeAre): JSX.Element {
    //Outer div is a container for center and establishing the background block
    //Inner div is for positioning the actual TextContainer
    return <div className="WhoWeAre-Container" style={{
        backgroundColor: "var(--black)", width: "100%",
        display: "flex", justifyContent: "center" 
    }}>
        <div className="WhoWeAre-Content" style={{
            marginTop: "80px", marginBottom: "80px",
            marginLeft: "24px", marginRight: "24px", width: "fit-content"
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