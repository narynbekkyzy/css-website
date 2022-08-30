import React, { useState } from 'react';
import { TeamCard } from './TeamCard'
import { Title } from '../../../components/titles/Title';
import { Motion } from '../../../components/Motion';
import membersJson from '../../../content/members.json';

import './OurMembers.css'

/**
 * Creates a 'Our Members' Section Component
 * */
export function OurMembers(): JSX.Element {

    const [cards, setCards] = useState(sortCards("Member")); //Array of Team Cards representing members
    const [tag, setTag] = useState("Member");                //Current Tag to display cards

    return <div className="OurMembers">
        <Title
            text='Our Members'
            name={'Primary'}
            styling={'MiddleBlack'}
        />
        <div className="OurMembers-CategoryButtons">
            <button className={tag === "CS Faculty" ? "selected" : ""} onClick={() => { setCards(sortCards("CS Faculty")); setTag("CS Faculty") }}>CS Faculty</button>
            <button className={tag === "Core Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Core Team")); setTag("Core Team") }}>Core Team</button>
            <button className={tag === "Voice Assistant Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Voice Assistant Team")); setTag("Voice Assistant Team") }}>Voice Assistant Team</button>
            <button className={tag === "Web Dev Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Web Dev Team")); setTag("Web Dev Team")}}>Web Dev Team</button>
            <button className={tag === "Member" ? "selected" : ""} onClick={() => { setCards(sortCards("Member")); setTag("Member") }}>All Members</button>
        </div>
        <div className="OurMembers-CardsContainer">
            <div className="OurMembers-Cards">
            {cards}
            </div>
        </div>
    </div>
}

/**
 * Function that sorts through all cards in the membersJson data variable and sets
 * cards state to an array of matching cards.
 * @param tag - string tag used to filter cards
 */
function sortCards(tag: string) : JSX.Element[] {
    let newCards: JSX.Element[] = [];
    membersJson.cards.map(function (card, key) {
        card.tags.includes(tag) ? newCards.push(
            <Motion
                component={<TeamCard
                    bg={card.bg}
                    title={card.title}
                    name={card.name}
                    team={card.team}
                    desc={card.desc}
                    askMe={card.askMe}
                    socials={card.socials}
                    tags={card.tags}
                />}
                key={card.name + key}
            />
        ):<div/>
    });
    return newCards;
}