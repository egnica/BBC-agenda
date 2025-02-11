import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const agendaRow = ({ item }) => {
  const speakerVariant = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgb(255, 255, 255)",
      boxShadow: "10px 10px 5px lightblue",
    },
    click: {
      scale: 0.98,
      boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
    },
  };
  return (
    <div className={styles.agendaRow}>
      <div className={styles.lineDivide}></div>
      <p style={{ paddingTop: "10px" }}>{item.time}</p>
      <div className={styles.titleDescCont}>
        <h3>{item.title}</h3>
        <br />
        {item.description != "" && <p>{item.description}</p>}
        <div className={styles.speakerCont}>
          {Object.entries(item.speakers).map((speaker, index) => {
            return (
              speaker[1].fName != "" && (
                <Link
                  key={index}
                  href={{
                    pathname: `agenda/speakers/${speaker[1].lName.toLowerCase()}/`,
                    query: { from: "agenda" },
                  }}
                >
                  <motion.div
                    variants={speakerVariant}
                    whileHover="hover"
                    whileTap="click"
                  >
                    {speaker[1].photo != null ? (
                      <Image
                        className={styles.image}
                        src={speaker[1].photo}
                        width={65}
                        height={65}
                        style={{ width: "auto", height: "auto" }}
                        alt={`Photo of ${speaker[1].lname}`}
                      />
                    ) : null}
                    <p style={{ textAlign: "center" }}>
                      {speaker[1].fName}
                      <br /> {speaker[1].lName}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "smaller" }}>
                      <em>{speaker[1].company}</em>
                    </p>
                  </motion.div>
                </Link>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default agendaRow;
