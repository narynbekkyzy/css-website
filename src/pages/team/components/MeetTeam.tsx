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