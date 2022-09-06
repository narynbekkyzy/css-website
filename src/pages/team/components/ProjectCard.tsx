import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { motion } from "framer-motion";

import '../../../components/event_card/Card.css';
import { Motion } from '../../../components/Motion';

interface ProjectCardInterface {
    bg: string;
    title: string;
    category: string;
    desc: string;
    btns: JSX.Element[];
    tags: Array<string>;
}

export function ProjectCard(props: ProjectCardInterface): JSX.Element {

    const [hoverRef, isHovered] = useHover<HTMLDivElement>();

    return <div ref={hoverRef} className="project-card CardBorder">
            <img src={props.bg} className="Team-img" />
            {isHovered ?

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="projectCard-hoverDisplay stack-top ease-anim">
                    <div className="project-title"><p>{props.title}</p></div>
                    <div className="project-desc CardBorder">
                        <div className="right-align"><p className="project-aurebesh">{props.title}</p></div>
                        <p> {props.desc} </p>
                        <div className="project-btns">{props.btns}</div>
                    </div>
                    <p className="project-category">{props.category}</p>
                </div>
            </motion.div>
                : <></>}
        </div>
}

//Trigger function that activates card details display when hovered over
function useHover<T>(): [MutableRefObject<T>, boolean] {
    const [value, setValue] = useState<boolean>(false);
    const ref: any = useRef<T | null>(null);
    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);
    useEffect(
        () => {
            const node: any = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [ref.current] // Recall only if ref changes
    );
    return [ref, value];
}