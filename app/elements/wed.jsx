"use client";
import React from "react";
import BBC from "../../bbcObject.json";
import { motion } from "framer-motion";
import AgendaRow from "./agendaRow";

const allDays = () => {
  return (
    <div>
      <h1>Wednesday</h1>
      <div>
        {Object.entries(BBC.event)
          .filter(([key, value]) => value.day === "wed")
          .map(([key, value], index) => (
            <AgendaRow key={index} item={value} />
          ))}
      </div>
    </div>
  );
};

export default allDays;
