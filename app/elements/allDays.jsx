"use client";
import React from "react";
import BBC from "../../bbcObject.json";
import { motion } from "framer-motion";

const allDays = () => {
  console.log(BBC.event);

  return (
    <div>
      <h1> Tuesday & Wednesday</h1>
    </div>
  );
};

export default allDays;
