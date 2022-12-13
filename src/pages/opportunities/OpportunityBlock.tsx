import React, { useState, useEffect } from 'react';
import './Opportunities.css'

/**
 * Creates a 'Opportunity Block' Section Component
 * */
interface OpportunityBlock {
    title: string;
    intro: string;
    tasks: JSX.Element[];
}

export function OpportunityBlock(props: OpportunityBlock): JSX.Element {
    return <>
        <div className="carousel-item">
            <div className="carousel-item-content">
                <h3 className="carousel-title">{props.title}</h3>
                <p className="carousel-intro">{props.intro}</p>
                <ul>
                    {props.tasks}
                </ul>
            </div>
        </div>
    </>
}