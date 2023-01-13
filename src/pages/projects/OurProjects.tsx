/**
 *  OurProjects.tsx is the main component which displays the Projects page. This page give users info about
 *  kind of work the club does with links to some of our work.
 *  -> function OurProjects() - Creates a 'Our Projects' Section Component
**/
import React, { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard'
import { Title } from '../../components/titles/Title';
import { Motion } from '../../components/Motion';
import { PaginationApplicator } from '../../components/pagination/PaginationApplicator';
import projectsJson from '../../content/projects.json';

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
        let newCards: JSX.Element[] = [];   // Cards that will be in the sorted list will be added to
                                            // this array
        // Maps through each member to check whether or not they have the filtered tag. If so, a team card,
        // wrapped inside an animated component, with their information is generated and added to the array
        // with an appropriate key.
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
        // Using newly filtered list, a paginated display is created using that dataset.
        return <PaginationApplicator
            key={Math.random()}       //DON'T TOUCH. This is needed to actually re-render while sorting.
            data={newCards}
            class="OurProjects-Cards"
            pageSize={4}
        />;
    }

    // function which creates a list of buttons for a particular card's info panel
    function createBtns(card: any): JSX.Element[] {
        let newBtns: JSX.Element[] = [] // array to be returned once it is filled with all button components
        // Creates a button component for each btn listed in card's dataset
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

    // Primary div for the Projects Page
    return <div className="OurProjects">
        {/** Header Title for the Projects Page **/}
        <Title
            text='Our Projects'
            name={'Primary'}
            styling={'MiddleBlack'}
        />
        {/** Sorting buttons for the projects page to organize the projects list **/}
        <div className="OurProjects-CategoryButtons">
            <button className={tag === "Project" ? "selected" : ""} onClick={() => { setCards(sortCards("Project")); setTag("Project") }}>All</button>
            <button className={tag === "Mobile Development" ? "selected" : ""} onClick={() => { setCards(sortCards("Mobile Development")); setTag("Mobile Development") }}>Mobile Development</button>
            <button className={tag === "Web Development" ? "selected" : ""} onClick={() => { setCards(sortCards("Web Development")); setTag("Web Development") }}>Web Development</button>
            <button className={tag === "Game Development" ? "selected" : ""} onClick={() => { setCards(sortCards("Game Development")); setTag("Game Development") }}>Game Development</button>
            <button className={tag === "Others" ? "selected" : ""} onClick={() => { setCards(sortCards("Others")); setTag("Others") }}>Others</button>

        </div>
        {/** Actual project cards display **/}
        <div className="OurProjects-CardsContainer">
            {cards}
        </div>
    </div>
}