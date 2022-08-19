import "./Main.css";
import { EventSection } from "./components/eventsSection";
import { WhatWeBuild } from "./components/WhatWeBuild";
import { WhoWeAre } from "./components/WhoWeAre";

import data from '../../content/main_page.json';
import { WhatWeOffer } from "./components/WhatWeOffer";
import { Footer } from "../../components/Footer";
import { StartMain } from "./components/StartMain";

export function MainPage(): JSX.Element {
  return (
    <>
      <StartMain
        desc={data.who_we_are.description} 
        img={<img className="Image3by4" src={data.who_we_are.image}/>} 
        buttons={[
          <button className="default-white">Button 1</button>,
          <button className="default-white">Button 2</button>
        ]}/>

      <WhoWeAre 
        desc={data.who_we_are.description} 
        img={<img className="Image3by4" src={data.who_we_are.image}/>} 
        buttons={[
          <button className="default-white">Button 1</button>,
          <button className="default-white">Button 2</button>
        ]}/>

      <WhatWeOffer 
        title={data.what_we_offer.MyTitlte} 
        items={data.what_we_offer.items}/>
      
      <WhatWeBuild 
        desc={data.who_we_are.description} 
        img={<img className="ImageFullWidth" src={data.what_we_build.image}/>} 
        buttons={[
          <button className="default-white">Button 1</button>,
          <button className="default-white">Button 2</button>
        ]}
      />
      <EventSection />
      <Footer/>
    </>
  );
}
