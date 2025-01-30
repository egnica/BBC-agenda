import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const btn = ({ children, onClick, day }) => {
  const btnVariants = {
    hover: {
      scale: 1.1,
      cursor: "pointer",
      backgroundColor: "rgb(109, 109, 252)",
    },
    click: {
      scale: 0.9,
      backgroundColor: "rgb(60, 60, 253)",
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
        backgroundColor:
          day == true ? "rgb(61, 61, 250)" : "rgb(163, 163, 254)",
      }}
    >
      {children}
    </motion.div>
  );
};

export default btn;
