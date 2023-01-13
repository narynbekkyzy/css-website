/**
 * TeamCard.tsx is the component that display's each of the person cards within the Team page's "Our Members"
 * section.
 * -> interface TeamCardInterface{} - Interface object that defines necessary parameters for TeamCard components.
 * -> interface SocialProps{} - Interface objects that defines necessary parameters for the Socials array 
 * -> function TeamCard() - Main export component function that displays a "Team Card" which contains info about a
 *                          a particular club member.
 * -> function useHover<T>() - Trigger function that determines whether or not card details should be
 *                             displayed based on if it is being hovered over hovered over. 
**/
import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { motion } from "framer-motion";

import '../../../components/event_card/Card.css';

// Interface object that defines necessary parameters for TeamCard components.
interface TeamCardInterface {
    bg: string;                     //Background Image url
    title: string;                  //Personal title
    name: string;                   //User's Name
    team: string;                   //Primary Team
    desc: string;                   //Description Text
    askMe: Array<string>;           //Ask Me bullets
    socials: SocialProps[];  //Social Media links (Array of Duples where the first is account
                             //url and the second is the social type, I.E. Github
    tags: Array<string>;     //Tags associated with the different groups this person is a member of, 
                             //for sorting.I.E. "Web Dev Team"
}

// Interface objects that defines necessary parameters for the Socials array 
interface SocialProps {
    url: string;
    name: string;
}

/** Main Component function that display a "Team Card" which contains info about a
  * a particular club member.
**/
export function TeamCard(props: TeamCardInterface): JSX.Element {

    const [hoverRef, isHovered] = useHover<HTMLDivElement>(); // Stateful variable that stored whether or not
                                                              // cursor is hovering over card.
    // Bulleted list of specialties
    let askMe = props.askMe.map(function (phrase) {
        return <li>
            {phrase}
        </li>
    });
    // Social media buttons
    let socials = props.socials.map(function (btn) {
        return  <a href={btn.url} target="_blank" rel="noreferrer noopener">
                    <img src={ "images/socials/" + `${btn.name}` + ".svg"}/>
                </a>
    });

    // Main Card div
    return <div ref={hoverRef} className="Card CardBorder" >
        {/** Displays image of member **/}
        <img src={props.bg} className="Team-img" />
        {/** Is state determines cursor is over this card, display animated, detailed overlay. Otherwise, nothing **/ }
        {isHovered ?
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="TeamCard-HoverDisplay stack-top ease-anim">
                    <div className="TeamCard-DetailsHeader">
                        {/** Job Title **/}
                        <p>
                            {props.title} 
                        </p>
                        {/** Member's name **/}
                        <h3 className="Card-H3">
                            {props.name} 
                        </h3>
                </div>
                    <div className="TeamCard-DetailsContent">
                        <div className="TeamCard-DetailsContentUpper">
                            <div className="TeamCard-AskMe">
                                {/** Bulleted list of specialties **/}
                                <p>Ask Me About:</p>
                                <ul>
                                    {askMe}
                                </ul>
                            </div>
                            <div className="TeamCard-Social">
                                {/** Banner of social links **/}
                                {socials}
                            </div>
                        </div>
                        <div className="TeamCard-DetailsContentLower">
                            <div className="TeamCard-DescBox">
                                <p className="TeamCard-Desc">
                                    {/** Short blurb about who they are. **/}
                                    {props.desc}
                                </p>
                            </div>
                            <p className="TeamCard-Team">
                                {/** Role in the club **/}
                                {props.team}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
            : <></>}
        </div>
}

/**Trigger function that determines whether or not card details should be displayed based on whether or
 * not it is being hovered over. 
 **/
function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = useState<boolean>(false); // Value of whether or not to display content
    const ref: any = useRef<T | null>(null);            // Reference to this particular card component
    const handleMouseOver = (): void => setValue(true); // Value of whether or not mouse is hovered
    const handleMouseOut = (): void => setValue(false); // Value of whether or not mouse in NOT hovered
    /** Called to determine whether or not mouse is over the card in the reference. Should be 'used'
      * whenever mouse is moved.
     **/
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