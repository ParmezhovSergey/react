import React from "react";
import preloader from "../../../assets/images/loading-buffering.gif";
import styles from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={styles.preloader}>
      {" "}
      <img src={preloader} />{" "}
    </div>
  );
};

export default Preloader;
