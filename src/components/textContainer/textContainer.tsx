import React from 'react';
import './textContainer.css'

import { Title } from '../titles/Title'

interface TextContainer {
    isPrimary?: boolean;
    titleText?: string;
    desc?: string;
    white?: boolean;
    right?: boolean;
    img?: React.ReactNode;
    imgFirst?: boolean;
    buttons?: Array<React.ReactNode>;
}

export function TextContainer(props: TextContainer): JSX.Element {
    let dir = (props.right ? 'right' : 'left');
    let col = (props.white ? 'white' : 'black');
    let btns = (props.buttons ? props.buttons.map(function (btn) { return btn }) : 0);
    let title = <Title
        name={(props.isPrimary ? 'Primary' : "Main")}
        style={props.isPrimary ?
            dir.charAt(0).toUpperCase() + dir.slice(1) + col.charAt(0).toUpperCase() + col.slice(1) :
            col.charAt(0).toUpperCase() + col.slice(1)}
        text={props.titleText ? props.titleText : ""} />
    return <div className="textContainer" style={props.imgFirst ? {flexDirection: "row-reverse", justifyContent: "flex-end"} : {} }>
        <div style={props.img ? props.imgFirst ? { marginLeft: "45px" } : { marginRight: "45px"} : {}} className={dir + col}>
            {title}
            {props.desc ? <p>
                {props.desc}
            </p> : <div style={{ height: "0px", width: "0px" }} />}
            {btns != 0 ? <div className={"btns" + dir}>
                {btns}
            </div> : <div style={{ height: "0px", width: "0px" }} />}
        </div>
        {props.img ? props.img : ""}
    </div>;
}