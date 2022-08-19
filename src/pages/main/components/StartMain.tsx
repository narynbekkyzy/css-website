import React from 'react';
import './StartMain.css'

import { TextContainer } from '../../../components/textContainer/textContainer'
import { Header } from '../../../components/Header';

interface StartMain {
    desc: string;                   //Body Text
    img: React.ReactNode;           //Img of club members
    buttons: Array<React.ReactNode>;//Array of buttons
}

export function StartMain(props: StartMain): JSX.Element {
    //Outer div is a container for center and establishing the background block
    //Inner div is for positioning the actual TextContainer
    return <div className="StartMain-Container">
        <div className="StartMain-Content">
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