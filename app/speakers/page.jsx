import React from "react";
import BBC from "../../bbcObject.json";
import styles from "./page.module.css";
import Image from "next/image";

//************** SPEAKER PAGE - ALL SPEAKERS

const speakers = Object.values(BBC.event)
  .flatMap((value) => value.speakers)
  .sort((a, b) => a.lName.localeCompare(b.lName));

const page = () => {
  return (
    <div>
      <div>
        <p>Test</p>
        {Object.values(speakers).map((person, index) => {
          return (
            <div key={index}>
              <p>{person.lName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
