import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const btn = ({ children, onClick, day }) => {
  const btnVariants = {
    hover: {
      scale: 1.1,
      cursor: "pointer",
      boxShadow: "10px 10px px lightblue",
    },
    click: {
      scale: 0.9,
      backgroundColor: "rgb(236, 236, 255)",
      boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.2)",
    },
  };
  return (
    <motion.div
      onClick={onClick}
      className={styles.btn}
      initial={{ backgroundColor: "rgb(16, 41, 69)" }}
      variants={btnVariants}
      whileHover="hover"
      whileTap="click"
      animate={{
        backgroundColor: day == true ? "rgb(236, 236, 255)" : "#102945",
        color: day == true ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
      }}
    >
      {children}
    </motion.div>
  );
};

export default btn;
