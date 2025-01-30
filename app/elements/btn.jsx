import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const btn = ({ children, onClick, day }) => {
  const btnVariants = {
    hover: {
      scale: 1.1,
      cursor: "pointer",
      backgroundColor: "rgb(86, 86, 115)",
    },
    click: {
      scale: 0.9,
      backgroundColor: "rgb(236, 236, 255)",
    },
  };
  return (
    <motion.div
      onClick={onClick}
      className={styles.btn}
      variants={btnVariants}
      whileHover="hover"
      whileTap="click"
      animate={{
        backgroundColor: day == true ? "rgb(236, 236, 255)" : "#102945",
        color: day == true ? "black" : "white",
      }}
    >
      {children}
    </motion.div>
  );
};

export default btn;
