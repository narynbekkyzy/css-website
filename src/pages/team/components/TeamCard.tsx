import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { motion } from "framer-motion";

import '../../../components/event_card/Card.css';

interface TeamCardInterface {
    bg: string;                     //Background Image url
    title: string;                  //Personal title
    name: string;                   //User's Name
    team: string;                   //Primary Team
    desc: string;                   //Description Text
    askMe: Array<string>;           //Ask Me bullets
    socials: Array<Array<string>>;  //Social Media links (Array of Duples where the first is account 
    tags: Array<string>;
}

export function TeamCard(props: TeamCardInterface): JSX.Element {

    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    let askMe = props.askMe.map(function (phrase) {
        return <li>
            {phrase}
        </li>
    });
    let socials = props.socials.map(function (btn) {
        return <a href={btn[0]}>
            <button style={{ background: 
                btn[1] === "LinkedIn" ? 'url(https://cdn-icons-png.flaticon.com/512/3536/3536505.png)':
                    btn[1] === "Instagram" ? "IG" :
                        btn[1] === "Discord" ? "DC" :
                            "TG"
                }}>
            </button>
        </a>
    });

    return <div ref={hoverRef} className="Card CardBorder" >
        <img src={props.bg} className="Team-img"/>
        {isHovered ?
            <div className="TeamCard-HoverDisplay stack-top ease-anim">
                <div className="TeamCard-DetailsHeader">
                    <p>
                        {props.title} 
                    </p>
                    <h3 className="Card-H3">
                        {props.name} 
                    </h3>
                </div>
                <div className="TeamCard-DetailsContent">
                    <div className="TeamCard-DetailsContentUpper">
                        <div className="TeamCard-AskMe">
                            <p>Ask Me About:</p>
                            <ul>
                                {askMe}
                            </ul>
                        </div>
                        <div className="TeamCard-Social">
                            {socials}
                        </div>
                    </div>
                    <div className="TeamCard-DetailsContentLower">
                        <div className="TeamCard-DescBox">
                            <p className="TeamCard-Desc">
                                {props.desc}
                            </p>
                        </div>
                        <p className="TeamCard-Team">
                            {props.team}
                        </p>
                    </div>
                </div>
            </div>
            : <></>}
        </div>
}

//Trigger function that activates card details display when hovered over
function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = useState<boolean>(false);
    const ref: any = useRef<T | null>(null);
    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);
    useEffect(
        () => {
            const node: any = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );
    return [ref, value];
}