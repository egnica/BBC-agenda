import React from "react";
import BBC from "../../bbcObject.json";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

//************** SPEAKER PAGE - ALL SPEAKERS

const speakers = Object.values(BBC.event)
  .flatMap((value) => value.speakers)
  .sort((a, b) => a.lName.localeCompare(b.lName));

const page = () => {
  return (
    <div className={styles.rowsContain}>
      {Object.values(speakers).map((person, index) => {
        return (
          person.fName != "" && (
            <div key={index}>
              <div className={styles.row}>
                <Image
                  className={styles.profilePic}
                  height={150}
                  width={150}
                  src={person.photo}
                  alt={`${person.fName} ${person.lName}`}
                />

                <div>
                  <h3>
                    {person.fName} {person.lName}
                  </h3>
                  <h4>{person.company}</h4>
                  <p>{person.title}</p>
                  <Link
                    href={{
                      pathname: `speakers/${person.lName.toLowerCase()}/`,
                      query: { from: "speakers" },
                    }}
                  >
                    <br />
                    <h4 style={{ color: "blue" }}> Go To Profile</h4>
                  </Link>
                </div>
              </div>
              <div className={styles.lineDivide}></div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default page;
