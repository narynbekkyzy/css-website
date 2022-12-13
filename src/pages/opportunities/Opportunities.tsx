import React, { useState, useEffect } from 'react';
import './Opportunities.css'
import { Title } from "../../components/titles/Title";
import { OpportunityBlock } from "./OpportunityBlock";
import { ResourceCard } from "./ResourceCard";
import opportunitiesJson from '../../content/opportunities.json';

/**
 * Creates a 'Opportunites' Section Component
 * */
export function Opportunities(): JSX.Element {

    const [index, setIndex] = useState(0);
    const [blocks, setBlocks] = useState(createBlocks);
    const [resources, setResources] = useState(createResourceCards);

    function slideBlocks(newIndex: number) {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= blocks.length) {
            newIndex = blocks.length - 1;
        }

        setIndex(newIndex);
    } 

    function createBlocks(): JSX.Element[] {
        let blocks: JSX.Element[] = [];
        opportunitiesJson.items.map(function (block) {
            blocks.push(<OpportunityBlock
                title={block.title}
                intro={block.intro}
                tasks={listMaker(block.tasks)}
                />)
        });
        return blocks;
    }

    function createResourceCards(): JSX.Element[] {
        let resources: JSX.Element[] = [];
        opportunitiesJson.links.map(function (card) {
            resources.push(<ResourceCard
                name={card.name}
                url={card.url}
                img={card.img}
                            />)
        });
        return resources;
    }

    function listMaker(data: any[]): JSX.Element[] {
        let items: JSX.Element[] = [];
        data.map(function (item) {
            item.link == "none" ?
            items.push(
                <li>{item.text}</li>
                )
            :items.push(
                <li><a className="taskLink" href={item.link}>{item.text}</a></li>
            )
        });

        return items;
    }

    return <>
        <div className="Opportunities_body">
            <div className="Opportunities_content">
                <Title
                    text={"Path to Programming"}
                    name={"Primary"}
                    styling={"MiddleBlack"}
                />
                <div className="carousel-scroll-btns">
                    <button onClick={() => slideBlocks(index - 1)}>Previous</button>
                    <button onClick={() => slideBlocks(index + 1)}>Next</button>
                </div>
                <div className="Content_bar" />
                <div className="carousel">
                    <div className="carousel-content" style={{ transform: "translateX(-"+50*index+"%)" }}>
                        {blocks}
                    </div>
                </div>
                <div className="Content_bar" />
            </div>
            <div className="Resources">
                <Title
                    text={"Resources"}
                    name={"Primary"}
                    styling={"MiddleBlack"}
                />
                <br/><br/>
                <div className="Resource-cards-container">
                    {resources}
                </div>
            </div>
        </div>

    </>
}