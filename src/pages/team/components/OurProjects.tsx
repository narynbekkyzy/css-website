import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard'
import { Title } from '../../../components/titles/Title';
import { Motion } from '../../../components/Motion';
import { PaginationApplicator } from '../../../components/pagination/PaginationApplicator';
import projectsJson from '../../../content/projects.json';

import './OurProjects.css'

/**
 * Creates a 'Our Projects' Section Component
 * */
export function OurProjects(): JSX.Element {

    const [cards, setCards] = useState(sortCards("Project")); //Array of Project Cards representing projects
    const [tag, setTag] = useState("Project");                //Current Tag to display cards

    /**
     * Function that sorts through all cards in the projectsJson data variable and sets
     * cards state to an array of matching cards.
     * @param tag - string tag used to filter cards
     */
    function sortCards(tag: string): JSX.Element {
        let newCards: JSX.Element[] = [];
        projectsJson.items.map(function (card, key) {
            card.tags.includes(tag) ? newCards.push(
                <Motion
                    component={<ProjectCard
                        bg={card.bg}
                        title={card.title}
                        category={card.category}
                        desc={card.desc}
                        btns={createBtns(card)}
                        tags={card.tags}
                    />}
                    key={card.title + key}
                />
            ) : <></>
        });
        return <PaginationApplicator
            key={Math.random()}       //DON'T TOUCH. This is needed to actually re-render while sorting.
            data={newCards}
            class="OurProjects-Cards"
            pageSize={4}
        />;
    }

    function createBtns(card: any): JSX.Element[] {
        let newBtns: JSX.Element[] = []
        card.btns.map(function (btn: any) {
            newBtns.push(<button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = btn.url;
                            }}>{btn.text}</button>)
        })

        return newBtns;
    }

    return <div className="OurProjects">
        <Title
            text='Our Projects'
            name={'Primary'}
            styling={'MiddleBlack'}
        />
        <div className="OurProjects-CategoryButtons">
            <button className={tag === "Project" ? "selected" : ""} onClick={() => { setCards(sortCards("Project")); setTag("Project") }}>All</button>
            <button className={tag === "Fun" ? "selected" : ""} onClick={() => { setCards(sortCards("Fun")); setTag("Fun") }}>Fun</button>
            <button className={tag === "Career" ? "selected" : ""} onClick={() => { setCards(sortCards("Career")); setTag("Career") }}>Career</button>
            <button className={tag === "Coding" ? "selected" : ""} onClick={() => { setCards(sortCards("Coding")); setTag("Coding") }}>Coding</button>
       </div>
        <div className="OurProjects-CardsContainer">
            {cards}
        </div>
    </div>
}