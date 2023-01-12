/**
 * OurMembers.tsx is the Component that contains a page with brief informational cards of all the
 * CSS members who volunteer to be listed on the page. This is intended to serve as a basic means
 * of finding who you can talk to regarding the club and is a way of showing off our involvment.
 * -> function OurMembers() - Creates a 'Our Members' Section Component
**/
import React, { useState, useEffect } from 'react';
import { TeamCard } from './TeamCard'
import { Title } from '../../../components/titles/Title';
import { Motion } from '../../../components/Motion';
import { PaginationApplicator } from '../../../components/pagination/PaginationApplicator';
import membersJson from '../../../content/members.json';

import './OurMembers.css'

/**
 * Creates a 'Our Members' Section Component
 * */
export function OurMembers(): JSX.Element {

    const [cards, setCards] = useState(sortCards("Member")); //Array of Team Cards representing members
    const [tag, setTag] = useState("Member");                //Current Tag to display cards

    /**
     * Function that sorts through all cards in the membersJson data variable and sets
     * cards state to an array of matching cards.
     * @param tag - string tag used to filter cards
     */
    function sortCards(tag: string): JSX.Element {
        let newCards: JSX.Element[] = [];   // Cards that will be in the sorted list will be added to
                                            // this array
        // Maps through each member to check whether or not they have the filtered tag. If so, a team card,
        // wrapped inside an animated component, with their information is generated and added to the array
        // with an appropriate key.
        membersJson.items.map(function (card, key) {
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
            ) : <></>
        });
        // Using newly filtered list, a paginated display is created using that dataset.
        return <PaginationApplicator
            key={Math.random()}       //DON'T TOUCH. This is needed to actually re-render while sorting.
            data={newCards}
            class="OurMembers-Cards"
            pageSize={6}
        />;
    }

    // Primary div containing entire 'Our Members' section
    return <div className="OurMembers">
        {/** 'Our Members' section header **/}
        <Title
            text='Our Members'
            name={'Primary'}
            styling={'MiddleBlack'}
        />
        {/** Buttons that allow the user to filter the team cards based on the possible tags each member can have **/}
        <div className="OurMembers-CategoryButtons">
            <button className={tag === "CS Faculty" ? "selected" : ""} onClick={() => { setCards(sortCards("CS Faculty")); setTag("CS Faculty") }}>CS Faculty</button>
            <button className={tag === "Core Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Core Team")); setTag("Core Team") }}>Core Team</button>
            <button className={tag === "Voice Assistant Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Voice Assistant Team")); setTag("Voice Assistant Team") }}>Voice Assistant Team</button>
            <button className={tag === "Web Dev Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Web Dev Team")); setTag("Web Dev Team")}}>Web Dev Team</button>
            <button className={tag === "Alumni" ? "selected" : ""} onClick={() => { setCards(sortCards("Alumni")); setTag("Alumni")}}>Alumni</button>
            <button className={tag === "Member" ? "selected" : ""} onClick={() => { setCards(sortCards("Member")); setTag("Member") }}>All Members</button>
        </div>
        {/** Displays the actual card array **/}
        <div className="OurMembers-CardsContainer">
            {cards}
        </div>
    </div>
}