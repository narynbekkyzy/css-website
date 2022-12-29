import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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


//test

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

function App() {
  const [data, setData]= useState([{}]) 
  // data is an actual variable. setData is the function we can use to manipulate the state of the data variable
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
          <Router><RecordList /><Edit /><Create />
        <Header />
        <Switcher />
        <Footer/>
      </Router>
    </div>
  );
}

function Switcher() {

  const location = useLocation();

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

  const [direction, setDirection] = useState(1);
  const [currentPage, setCurrentPage] = useState(-1);

  function calculateVariants(location: string) {

    let list = Array.from(data.pages);
    let dict = new Map();
    for (let i = 0; i < list.length; i++) {
        dict.set(list[i].link, i);
    }

    if (dict.get(location) > currentPage) {
      setDirection(-1);

    } else {
      setDirection(1);

    }
    setCurrentPage(dict.get(location));
    
  }

  useEffect(() => {
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
    <AnimatePresence mode="wait">
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

const pageTransition = {
  type: "var(--cubic)",
  duration: 0.25,
};

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
