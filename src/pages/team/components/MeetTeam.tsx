/*
    This file implemented the section "Meet Our Team" inside "Team" section on the header
    Can be used by passing param:
        + desc: text to describe 
        + img: big image displaed in the center
        + buttons: clickable buttons linked to other sections
*/

import React from 'react';
import './MeetTeam.css'

import { TextContainer } from '../../../components/textContainer/textContainer'
import { Title } from '../../../components/titles/Title';

// Interface that passes the required variable for the original MeetTeam component
interface MeetTeam {
    desc?: string;                   //Body Text
    img: React.ReactNode;           //Img of club members
    buttons?: Array<React.ReactNode>;//Array of buttons
}

export function MeetTeam(props: MeetTeam): JSX.Element {
    /* map all passed button s*/
    let btns = (props.buttons ? props.buttons.map(function (btn) { return btn }) : 0);

    return <div className="MeetTeam-Container"> {/* center and establishing the background block*/}
        <div className="MeetTeam-Content">
            {/* Title box on the top */}
            <div className='Title-Box'><Title text="Meet our people" name = "Primary" styling="MiddleWhite"/></div>

            {/* Image */}
            <a className="bigImage">{props.img}</a>

            {/* The block containing desc and buttons */}
            <div className="Frame">
                {/* Returns description if available*/}
                {props.desc ? (
                    <p>{props.desc}</p>
                    ) : (
                    <div style={{ height: "0px", width: "0px" }} />
                    )}

                {/* Returns all buttons if available*/}
                {btns != 0 ? (
                    <div className="buttons">{btns}</div>
                    ) : (
                    <div style={{ height: "0px", width: "0px" }} />
                    )}
            </div>
        </div>
    </div>
}

// Interface that passes the required variable for the new MeetTeam component
interface WhoWeAre {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of club members
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function MeetTeamV2(props: WhoWeAre): JSX.Element {
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
                titleText={"Meet Our Team"}
                desc={props.desc}
                white={true}
                right={false}
                img={props.img}
                imgFirst={false}
                buttons={props.buttons}
            />
        </div>
    </div>
}