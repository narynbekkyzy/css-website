import React, { useState } from 'react';
import { TeamCard } from './TeamCard'
import { Title } from './titles/Title'
import membersJson from '../content/members.json';

import './OurMembers.css'

export function OurMembers(): JSX.Element {

    let tmpCardStorage = [
        <TeamCard
                bg='images/tmpImgs/obiwan.jpg'
                title='Jedi Knight'
                name='Obi-Wan Kenobi'
                team='Core Team'
                desc='Aleksandr is a senior student studying Computer Science and Business. He cares about social and environmental issues and believes in the power of technology in making the world a better place. '
                askMe={["Product Management", "UI/UX Design", "Side Projects", "Career Tips", "Graduate Schools"]}
                socials={[["https://www.linkedin.com/in/amolchagin/", "LinkedIn"], ["https://github.com/AleksandrMolchagin", "GitHub"]]}
                tags={["Core Team", "Web Dev Team"] }
              />,
              <TeamCard
                bg='images/tmpImgs/luminara.jpg'
                  title='Jedi Knight'
                  name='Luminara Unduli'
                  team='CS Faculty'
                  desc='A Jedi Knight :O'
                  askMe={["The Force", "Lightsabers", "Padawan Training", "War Strategies", "Meditation"]}
                  socials={[["https://www.linkedin.com/in/obi-wan-kenobi-7855a0247/", "LinkedIn"], ["https://github.com/topics/obi-wan-kenobi", "GitHub"]]}
                  tags={["CS Faculty"]}
            />,
            <TeamCard
                bg='images/tmpImgs/c3po.png'
                  title='Robot'
                  name='C3PO'
                  team='Core Team'
                  desc='Human Cyborg Relations'
                   askMe={["Human Cyborg Relations", "Literally Any Language", "Annoying Poeple", "Being Oblivious", "Complaining"]}
                  socials={[["https://www.linkedin.com/in/obi-wan-kenobi-7855a0247/", "LinkedIn"], ["https://github.com/topics/obi-wan-kenobi", "GitHub"]]}
                  tags={["Core Team"]}
            />,
            <TeamCard
                bg='images/tmpImgs/chwie.png'
                  title='Scoundrel'
                  name='Chewbacca'
                  team='Voice Assistant Team'
                  desc='Wookie'
                  askMe={["Screaming", "Sniping", "Sass", "Fashion", "Hair Care"]}
                  socials={[["https://www.linkedin.com/in/obi-wan-kenobi-7855a0247/", "LinkedIn"], ["https://github.com/topics/obi-wan-kenobi", "GitHub"]]}
                  tags={["Voice Assistant Team"]}
            />,
            <TeamCard
                bg='images/tmpImgs/bossk.jpg'
                  title='Bounty Hunter'
                  name='Bossk'
                  team='Web Dev Team'
                  desc='Bounty Hunter'
                  askMe={["Murder", "Assasinating", "Explosives", "Making Money", "War Crimes"]}
                  socials={[["https://www.linkedin.com/in/obi-wan-kenobi-7855a0247/", "LinkedIn"], ["https://github.com/topics/obi-wan-kenobi", "GitHub"]]}
                  tags={["CS Faculty"]}
            />,
            <TeamCard
                bg='images/tmpImgs/emporer.jpg'
                  title='The Emporer'
                  name='Emporer Palpatine'
                  team='Member'
                  desc='MWAH HAHA'
                  askMe={["The Force", "Jazz Hands", "Being Ugly", "Sitting in a Chair", "Laughing Maniacally"]}
                  socials={[["https://www.linkedin.com/in/obi-wan-kenobi-7855a0247/", "LinkedIn"], ["https://github.com/topics/obi-wan-kenobi", "GitHub"]]}
                  tags={["Member"]}
            />]

    const [cards, setCards] = useState(sortCards("Member"));
    const [tag, setTag] = useState("Member");

    return <div className="OurMembers">
        <Title
            text='Our Members'
            name={'Primary'}
            styling={'MiddleBlack'}
        />
        <div className="OurMembers-CategoryButtons">
            <button className={tag == "CS Faculty" ? "selected" : ""} onClick={() => { setCards(sortCards("CS Faculty")); setTag("CS Faculty") }}>{tag}</button>
            <button className={tag == "Core Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Core Team")); setTag("Core Team") }}>Core Team</button>
            <button className={tag == "Voice Assistant Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Voice Assistant Team")); setTag("Voice Assistant Team") }}>Voice Assistant Team</button>
            <button className={tag == "Web Dev Team" ? "selected" : ""} onClick={() => { setCards(sortCards("Web Dev Team")); setTag("Web Dev Team")}}>Web Dev Team</button>
            <button className={tag == "Member" ? "selected" : ""} onClick={() => { setCards(sortCards("Member")); setTag("Member") }}>All Members</button>
        </div>
        <div className="OurMembers-CardsContainer">
            <div className="OurMembers-Cards">
            {cards}
            </div>
        </div>
    </div>
}

function sortCards(tag: string) : JSX.Element[] {
    let newCards: JSX.Element[] = [];
    membersJson.cards.map(function (card) {
        card.tags.includes(tag) ? newCards.push(
            <TeamCard
                bg={card.bg}
                title={card.title}
                name={card.name}
                team={card.team}
                desc={card.desc}
                askMe={card.askMe}
                socials={card.socials}
                tags={card.tags}
            />
        ):<div/>
    });
    return newCards;
}