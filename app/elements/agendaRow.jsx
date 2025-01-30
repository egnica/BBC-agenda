import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const agendaRow = ({ item }) => {
  return (
    <div className={styles.agendaRow}>
      <div className={styles.lineDivide}></div>
      <p style={{ paddingTop: "10px" }}>{item.time}</p>
      <div className={styles.titleDescCont}>
        <h3>{item.title}</h3>
        {item.description != "" && <p>{item.description}</p>}
        <div className={styles.speakerCont}>
          {Object.entries(item.speakers).map((speaker, index) => {
            console.log(speaker[1].name);
            return (
              speaker[1].fName != "" && (
                <div key={index}>
                  {speaker[1].photo != null ? (
                    <Image
                      className={styles.image}
                      src={speaker[1].photo}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />
                  ) : null}
                  <p style={{ textAlign: "center" }}>
                    {speaker[1].fName}
                    <br /> {speaker[1].lName}
                  </p>
                  <p style={{ textAlign: "center", fontSize: "smaller" }}>
                    <em>{speaker[1].company}</em>
                  </p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default agendaRow;
