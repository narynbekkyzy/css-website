import "./Team.css";

import data from '../../content/main_page.json';
import { OurMembers } from "./components/OurMembers";
import { MeetTeamV2 } from "./components/MeetTeam";

export function TeamPage(): JSX.Element {
  return (
    <>
        <MeetTeamV2
        desc={data.who_we_are.description} 
        img={<img className="Image3by4" src={data.who_we_are.image}/>} 
        buttons={[
          <button className="default-white">Button 1</button>,
          <button className="default-white">Button 2</button>
        ]}/>
        <OurMembers/>
    </>
  );
}
