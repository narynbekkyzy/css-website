import React from "react";
import "./textContainer.css";

import { Title } from "../titles/Title";

//The interface defines the basic props that will be used by a textContainer object
//All variables are optional, but isPrimary titleText will only work if both are used.
interface TextContainer {
  isPrimary?: boolean; //Determines whether the Title object will be "primary" or "main"
  titleText?: string; //The text used for primary title
  desc?: string; //The body text
  white?: boolean; //Set to true for white text
  right?: boolean; //Set to true to align content to the right
  img?: React.ReactNode; //Image object to be used
  imgFirst?: boolean; //Set to true if the img should be first
  buttons?: Array<React.ReactNode>; //Array of buttons
}

export function TextContainer(props: TextContainer): JSX.Element {
  //Defines content alignment
  let dir = props.right ? "right" : "left";
  //Defines text color
  let col = props.white ? "white" : "black";
  //Returns all buttons
  let btns = props.buttons
    ? props.buttons.map(function (btn) {
        return btn;
      })
    : 0;
  //Create's title object
  let title = (
    <Title
      name={props.isPrimary ? "Primary" : "Main"}
      styling={
        props.isPrimary
          ? dir.charAt(0).toUpperCase() +
            dir.slice(1) +
            col.charAt(0).toUpperCase() +
            col.slice(1)
          : col.charAt(0).toUpperCase() + col.slice(1)
      }
      text={props.isPrimary && props.titleText ? props.titleText : ""}
    />
  );
  //Returns the textContainer object
    return (
        <div
            className={props.imgFirst ? "textContainer imgFirst" : "textContainer" }
    >
      <div
        className={dir + col}
      >
        {title}
        {props.desc ? (
          <p>{props.desc}</p>
        ) : <></>}
        {btns != 0 ? (
          <div className={"btns" + dir}>{btns}</div>
        ) : <></>}
      </div>
      {props.img ? props.img : ""}
    </div>
  );
}
