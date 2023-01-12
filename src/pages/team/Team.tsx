/*
 * Team.tsx is the primary component for display all items on the team page
 * (except the universal header & footer).
 * -> TeamPage() - Component for displaying Team Page
 */
import "./Team.css";

import data from '../../content/main_page.json';
import { OurMembers } from "./components/OurMembers";
import { MeetTeamV2 } from "./components/MeetTeam";

/* Component for displaying Team Page */
export function TeamPage(): JSX.Element {
  return (
    <>
      {/* Component that displays the "Who We Are" summary component */}
        <MeetTeamV2
        desc={data.who_we_are.description} 
        img={<img className="Image3by4" src={data.who_we_are.image}/>} 
        buttons={[
       
              ]} />
      {/* Component that displays the "Our Members" cards component */}
        <OurMembers/>
    </>
  );
}
