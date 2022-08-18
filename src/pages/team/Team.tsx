import "./Team.css";

import data from '../../content/main_page.json';
import { OurMembers } from "./components/OurMembers";

export function TeamPage(): JSX.Element {
  return (
    <>
        <OurMembers/>
    </>
  );
}
