/*
 * App.tsx is the primary routing component that displays the appropriate page
 * -> function App() - Primary website display component. Navigation between pages is done here
 * -> function Switcher() - Main function used to render correct page
 * -> const pageTransition - Animation to be used in page wrappers
 * -> AnimatedHomePage - Animated wrapper for Home page
 * -> AnimatedTeamPage - Animated wrapper for Team page
 * -> AnimatedEventsPage - Animated wrapper for Events page
 * -> AnimatedProjectPage - Animated wrapper for Project page
 * -> AnimatedOpportunitiesPage - Animated wrapper for Opportunities page
 * -> AnimatedTempPage - Animated wrapper for Temp page
 */
import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { MainPage } from "./pages/main/Main";
import { TeamPage } from "./pages/team/Team";
import { OurProjects } from "./pages/projects/OurProjects";
import { Opportunities } from "./pages/opportunities/Opportunities";
import { TempPage } from "./pages/tempPage/Temp";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import data from "./content/header_footer.json";

import { AnimatePresence, motion } from "framer-motion";
import { EventsPage } from "./pages/events/Events";

//MongoDB test components. Remove if MERN stack is not used
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

//Primary website display component. Navigation between pages is done here
function App() {
  const [data, setData]= useState([{}]) //This state and following function are for backend testing. Remove is unused.
  // data is an actual variable (hook). setData is the function we can use to manipulate the state of the data variable
  useEffect(() => {
    fetch("/memberlist").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
    },[])
    
  return (
    <div className="App">
        <Router>{/**Function**/} {/**<RecordList /><Edit /><Create />REMOVE IF UNUSED> FOR BACKEND TESTING**/}
            <Header /> {/**Universal sticky header**/}
            <Switcher /> {/**Actual Page router**/}
            <Footer /> {/**Universal non-sticky footer**/}
        </Router>
    </div>
  );
}

//Main function used to render correct page
function Switcher() {

  const location = useLocation(); {/**Variable that references current location for page pathing**/ }

  {/**Variable that either hides unused pages or displays it**/ }
  const [pageVariants, setPageVariants] = useState({
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1,
    },
  });

  const [direction, setDirection] = useState(1); {/**Stores direction in which to hide page (functionally previous or next, kind of like a corousel)**/ }
  const [currentPage, setCurrentPage] = useState(-1); {/**Stores current page in a variable that is used to orient direction of other components**/ }

  {/**Sets to new page**/ }
  function calculateVariants(location: string) {

    {/**Stores pages in an array, then converts it into a dictionary with numerical keys**/ }
    let list = Array.from(data.pages);
    let dict = new Map();
    for (let i = 0; i < list.length; i++) {
        dict.set(list[i].link, i);
    }

      {/**If location that is being move to is ahead of current page, move the directon to the left, otherwise the right**/ }
    if (dict.get(location) > currentPage) {
      setDirection(-1);

    } else {
      setDirection(1);

    }
    {/**Sets current page state**/ }
    setCurrentPage(dict.get(location));
    
  }

  {/**When set hooks are used, reorient pages to updates locations**/ }
  useEffect(() => {

    if (location.pathname === "/fun" || location.pathname === "/FUN" ){
      window.location.href = "https://forms.gle/uNx6pcz83Nj6ue699"
    }

    if (location.pathname === "/LC" || location.pathname === "/lc" ){
      window.location.href = "https://forms.gle/aeryxv9Hnmv4npvv9"
    }


    calculateVariants(location.pathname);
    setPageVariants({
        in: {
          opacity: 1,
          x: 0,
          scale: 1,
        },
        out: {
          opacity: 1,
          x: `calc(${direction}*100vw)`,
          scale: 1,
        },
      })
      
  } , [location]);

  return (
    <AnimatePresence mode="wait">{/**Utilizing a sliding animation, each routh defines a possible page and is centered based on current state location**/}
      <Routes location={location} key={location.pathname}>

        <Route 
          path="/" 
          element={<AnimatedHomePage {...pageVariants}/>} />

        <Route 
          path="/team" 
          element={<AnimatedTeamPage {...pageVariants} />} />

        <Route 
          path="/opportunities"
          element={<AnimatedTempPage {...pageVariants}/>} />

        <Route
            path="/projects"
            element={<AnimatedProjectPage {...pageVariants} />} />

        <Route 
          path="/events"
           element={<AnimatedEventsPage {...pageVariants}/>} />

      </Routes>
    </AnimatePresence>
  );
}

{/**Animation to be used in following wrappers**/ }
const pageTransition = {
  type: "var(--cubic)",
  duration: 0.25,
};

{/**Animated wrappers for each page**/ }
function AnimatedHomePage(props: any) {
  return (
    <motion.div
      initial={"out"}
      animate={"in"}
      exit={"out"}
      variants={props}
      transition={pageTransition}
    >
      <MainPage />
    </motion.div>
  );
}

function AnimatedTeamPage(props: any) {
  return (
    <motion.div
      initial={"out"}
      animate={"in"}
      exit={"out"}
      variants={props}
      transition={pageTransition}
    >
      <TeamPage />
    </motion.div>
  );
}

function AnimatedEventsPage(props: any) {
  return (
    <motion.div
      initial={"out"}
      animate={"in"}
      exit={"out"}
      variants={props}
      transition={pageTransition}
    >
      <EventsPage/>
    </motion.div>
  );
}

function AnimatedProjectPage(props: any) {
    return (
        <motion.div
            initial={"out"}
            animate={"in"}
            exit={"out"}
            variants={props}
            transition={pageTransition}
        >
            <OurProjects />
        </motion.div>
    );
}

function AnimatedOpportunitiesPage(props: any) {
    return (
        <motion.div
            initial={"out"}
            animate={"in"}
            exit={"out"}
            variants={props}
            transition={pageTransition}
        >
            <Opportunities />
        </motion.div>
    );
}

{/**Placeholder pages that just says "coming soon"**/ }
function AnimatedTempPage(props: any) {
  return (
    <motion.div
      initial={"out"}
      animate={"in"}
      exit={"out"}
      variants={props}
      transition={pageTransition}
    >
      <TempPage />
    </motion.div>
  );
}

export default App;
