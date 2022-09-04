/*
    This file implements header. It takes data from header_footer.json. 
    This file has buttons according to 'pages' in json file.


    Update Aug 15, 2022 (Aleksandr):
        - Fix margins
        - Make button active when you are on that page
*/

import "./Header.css";
import data from "../content/header_footer.json";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header(): JSX.Element {
  const location = useLocation().pathname;
  const [name, setName] = useState("");
  const [mobileActive, setMobileActive] = useState(false);

  function updateName() {
    data.pages.forEach((page) => {
      if (page.link === location) {
        setName(page.name);
      }
    });
  }

  function setWidth() {
    let dictWithoutGaps = new Map();
    let dictWithGaps = new Map();
    let sum = 0;
    let list = Array.from(data.pages);
    let reversedList = list.reverse();

    for (let i = 0; i < list.length; i++) {
      const width = getComputedStyle(
        document.getElementById(list[i].name) ?? document.documentElement
      ).getPropertyValue("width");
      let gap = 0;
      if (i !== 0) {
        gap = parseInt(
          getComputedStyle(
            document.getElementById("Header-MenuID") ?? document.documentElement
          ).getPropertyValue("gap")
        );
      }
      dictWithGaps.set(list[i].name, parseInt(width) + gap);
      dictWithoutGaps.set(list[i].name, parseInt(width));
      sum += parseInt(width) + gap;
    }
    let move = sum;
    console.log(reversedList);
    for (let i = 0; i < reversedList.length; i++) {
      move -= dictWithGaps.get(reversedList[i].name);

      if (reversedList[i].name === name) {
        break;
      }
    }

    document.documentElement.style.setProperty(
      "--moving_left_spacing",
      move + "px"
    );
    document.documentElement.style.setProperty(
      "--moving_width",
      dictWithoutGaps.get(name) + "px"
    );
  }

  function getActiveButton(String: string) {
    if (String === name) {
      return "active";
    }
    return "";
  }

  function slideMenu() {

    var position = "fixed"
    if (mobileActive) {
      position = "unset"
    }

    document.documentElement.style.setProperty(
        "--body_position",
        position
      );

    setMobileActive(!mobileActive);
  }

  useEffect(() => {
    updateName();
    setTimeout(function () {
      setWidth();
    }, 1);
  }, [location, name, mobileActive]);

  return (
    <div className="HeaderRoot">
      <div className="Header">
        <div className="Header-Container">
          <Link to="/">
            <img
              alt="Computer Science Society Logo"
              src={data.Logo}
              id="Logo"
            ></img>
          </Link>
          <div id="Header-MenuID" className="Header-Menu group-new">
            <span className="Header-MovingBlob"> </span>
            {/* <svg  className='SVGEffects' xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="old-goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                                <filter id="fancy-goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                                </filter>
                            </defs>
                        </svg> */}
            {data.pages.map((page, index) => {
              return (
                <Link id={page.name} to={page.link}>
                  <button className={"header " + getActiveButton(page.name)}>
                    {page.name}
                  </button>
                </Link>
              );
            })}
            {/* <input placeholder='Search...' type='text' className='searchbox'></input> */}
          </div>
          <a className="Header-Mobile-LinesImage" onClick={slideMenu}>
            <img src={"images/menu-lines.svg"}></img>
          </a>
        </div>
      </div>
      {/*  */}
      <AnimatePresence>
        {mobileActive && (
          <motion.div
            key={"MobileSlideMenu"}
            initial={{ opacity: 1, x: "100vw" }}
            animate={{ opacity: 1, x: "0vw" }}
            exit={{ opacity: 1, x: "100vw" }}
            transition={{ type: "linear", duration: 0.3 }}
            style={{ position: "absolute", top: "0", left: "0", zIndex: 100 }}
          >
            <div className="Header-Menu-Mobile">
              <div className="Header-Menu-Mobile-MainContainer">
                <div className="Header-Menu-Mobile-Main-Container-Top">
                    <img
                        alt="Computer Science Society Logo"
                        src={data.Logo}
                        id="LogoMobile"
                        ></img>
                    <a className="Header-Mobile-LinesImageMobile" onClick={slideMenu}>
                        <img src={"images/menu-lines.svg"}></img>
                    </a>
                </div>
                <div className="Header-Menu-Mobile-MainContainer-Buttons">
                  {data.pages.map((page, index) => {
                    return (
                      <Link id={page.name} to={page.link}>
                        <button
                          onClick={slideMenu}
                          className={
                            "header " + `mobile-${getActiveButton(page.name)}`
                          }
                        >
                          {page.name}
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
