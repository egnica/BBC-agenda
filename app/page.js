"use client";

import styles from "./page.module.css";
import BBC from "../bbcObject.json";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Btn from "./elements/btn";
import All from "./elements/allDays";
import Tues from "./elements/tues";
import Wed from "./elements/wed";

// ********* MAIN HOME PAGE
export default function Home() {
  const [dayClick, setDayClick] = useState("all");
  const [clicked, setClicked] = useState([false, false, false]);

  useEffect(() => {
    dayClick == "all"
      ? setClicked([true, false, false])
      : dayClick == "tues"
      ? setClicked([false, true, false])
      : dayClick == "wed"
      ? setClicked([false, false, true])
      : null;
  }, [dayClick]);

  const dayTransition = {
    start: {
      opacity: 0,
      //maxHeight: 0,
      y: 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    rendered: {
      opacity: 1,
      //maxHeight: 6000,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    end: {
      opacity: 0,
      //maxHeight: 0,
      y: 100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className={styles.page}>
      <div className={styles.titleContain}>
        <h1>2025 Agenda</h1>
        <p>Here's what's scheduled for the event.</p>
      </div>

      <div className={styles.threeButtonContainer}>
        <Btn day={clicked[0]} onClick={() => setDayClick("all")}>
          All Dates
          <br />
          5/13-5/14
        </Btn>
        <Btn day={clicked[1]} onClick={() => setDayClick("tues")}>
          Tuesday
          <br />
          5/13
        </Btn>
        <Btn day={clicked[2]} onClick={() => setDayClick("wed")}>
          Wednesday <br />
          5/14
        </Btn>
      </div>
      <div className={styles.agendaContainer}>
        <AnimatePresence mode="wait">
          {dayClick == "all" ? (
            <motion.div
              key="all"
              variants={dayTransition}
              initial="start"
              animate="rendered"
              exit="end"
            >
              <All />
            </motion.div>
          ) : dayClick == "tues" ? (
            <motion.div
              key="tues"
              variants={dayTransition}
              initial="start"
              animate="rendered"
              exit="end"
            >
              <Tues />
            </motion.div>
          ) : (
            <motion.div
              key="wed"
              variants={dayTransition}
              initial="start"
              animate="rendered"
              exit="end"
            >
              <Wed />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}
