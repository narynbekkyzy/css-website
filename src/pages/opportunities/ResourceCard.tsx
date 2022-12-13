import React, { useState, useEffect } from 'react'
import { Motion } from '../../components/Motion';

import './Opportunities.css'

interface ResourceCard {
    name: string;
    url: string;
    img: string;
}

/**
 * Creates a 'Our Members' Section Component
 * */
export function ResourceCard(props: ResourceCard): JSX.Element {

    return <a href={props.url} className="resource-card">
        <img src={props.img} />
        <h4>{props.name}</h4>
    </a>
}