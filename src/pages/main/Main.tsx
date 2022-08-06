import "./Main.css";
import { Footer } from "./sections/Footer";
import { EventSection } from "./sections/eventsSection";

export function MainPage(): JSX.Element {
  return (
    <>
      <EventSection />
      <Footer />
    </>
  );
}
