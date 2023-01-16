/*
    This file creates the first part of CSS website.
    Can be used by passing parameters:
        + desc: text inside
        + img: the image displayed in the right
        + buttons: list of buttons under the desc (text)
*/
import React from 'react';
import './StartMain.css'

import { TextContainer } from '../../../components/textContainer/textContainer'
import { Header } from '../../../components/Header';

// require parameters for component
interface StartMain {
    desc: string;                       //Body Text
    img: React.ReactNode;               //Img of club members
    buttons: Array<React.ReactNode>;    //Array of buttons
}

// primary export function to generate component
export function StartMain(props: StartMain): JSX.Element {
    return <div className="StartMain-Container">        {/* for center and establishing the background block */}
        <div className="StartMain-Content">  
            {/* for description, image and buttons */}           
            <TextContainer                              
                isPrimary={false}
                desc={props.desc}
                white={false}
                right={false}
                img={props.img}
                imgFirst={false}
                buttons={props.buttons}
            />
        </div>
    </div>
}