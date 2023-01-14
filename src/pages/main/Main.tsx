/**
 * Main.tsx is the website's landing page. It has lots of information describing
 * the club, it's members and what they do.
 * -> function MainPAge() - The primary export component that displays the MainPage
 **/
import "./Main.css";
import { EventSection } from "./components/eventsSection";
import { WhatWeBuild } from "./components/WhatWeBuild";
import { WhoWeAre } from "./components/WhoWeAre";

import data from '../../content/main_page.json';
import { WhatWeOffer } from "./components/WhatWeOffer";
import { Footer } from "../../components/Footer";
import { StartMain } from "./components/StartMain";
import { UpcomingEvents } from "./components/OurUpcomingEvents";
import { MeetTeam } from "../team/components/MeetTeam";
import { OfferItem } from "../../components/offerItem/OfferItem";

import * as leftArrow from "../../images/leftArrow.svg"

//The primary export component that displays the MainPage
export function MainPage(): JSX.Element {
  return (
    <>
      {/** An Indroductory blurb with a cool looking logo (to grab attention) and some links**/}
      <StartMain
        desc={data.top.description} 
        img={<img className="MainLogo" src={data.top.image}/>} 
        buttons={[
          <a href="/events">
          <button className="default">Current Events</button>
          </a>,
          <a href="https://discord.gg/dC5ceA7u">
          <button className="default">Join Us</button>
          </a>
        ]}/>
      {/** A brief account of the club's identity **/}
      <WhoWeAre 
        desc={data.who_we_are.description} 
        img={<img className="Image3by4" src={data.who_we_are.image}/>} 
        buttons={[
          <a href="/team">
          <button className="default-white">Meet The Team</button>
          </a>
        ]}/>
      {/** Informational panel on the things The club can offer members **/}
      <WhatWeOffer 
        title={data.what_we_offer.MyTitlte} 
        items={data.what_we_offer.items}/>
      {/** Examples of projects the club has been involved in **/}
      <WhatWeBuild 
        desc={data.who_we_are.description} 
        img={<img className="Image3by4" src={data.what_we_build.image}/>} 
        buttons={[
          <a href="/projects">
          <button className="default-white">Projects</button>
          </a>
        ]}
      />
      {/** A highlight reel of the upcoming (or most recent) events **/}
      <UpcomingEvents
        title={data.our_upcoming_events.title}
      />
    </>
  );
}
