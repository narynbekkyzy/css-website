import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

import './TeamCard.css'

interface TeamCardInterface {
    bg: string;
    title: string;
    name: string;
    team: string;
    desc: string;
    askMe: Array<string>;
    socials: Array<Array<string>>;
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
            <button>
                {btn[1] == "LinkedIn" ? "LI" :
                    btn[1] == "Instagram" ? "IG" : 
                        btn[1] == "Discord" ? "DC" :
                            "TG"
                    }
            </button>
        </a>
    });

    return <div ref={hoverRef} className="TeamCard" style={{ backgroundImage: "url(" + props.bg + ")", backgroundSize: "100% 100%" }}>
        {isHovered ?
            <div className="TeamCard-Details">
                <div className="TeamCard-DetailsHeader">
                    <p className="TeamCard-Title">
                        {props.title} 
                    </p>
                    <p className="TeamCard-Name">
                        {props.name} 
                    </p>
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
            : <div/>}
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