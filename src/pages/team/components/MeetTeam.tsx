import React from 'react';
import './MeetTeam.css'

import { TextContainer } from '../../../components/textContainer/textContainer'
import { Title } from '../../../components/titles/Title';

interface MeetTeam {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of club members
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function MeetTeam(props: MeetTeam): JSX.Element {
    //Outer div is a container for center and establishing the background block
    //Inner div is for positioning the actual TextContainer
    //Returns all buttons
    let btns = (props.buttons ? props.buttons.map(function (btn) { return btn }) : 0);

    return <div className="MeetTeam-Container">
        <div className="MeetTeam-Content">
            <div className='Title-Box'><Title text="Meet our people" name = "Primary" styling="MiddleWhite"/></div>
            <a className="bigImage">{props.img}</a>
            <div className="Frame">
                {props.desc ? (
                    <p>{props.desc}</p>
                    ) : (
                    <div style={{ height: "0px", width: "0px" }} />
                    )}
                {btns != 0 ? (
                    <div className="buttons">{btns}</div>
                    ) : (
                    <div style={{ height: "0px", width: "0px" }} />
                    )}
            </div>
        </div>
    </div>
}