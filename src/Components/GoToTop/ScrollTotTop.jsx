import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import styles from "./scrollToBtn.module.css";

export const ScrollTotTop = () => {
  const [isVisble, setisVisble] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
  };
  const listenrScroll = () => {
    let hightohid = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hightohid) {
      setisVisble(true);
    } else {
      setisVisble(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenrScroll);
    return () => window.removeEventListener("scroll", listenrScroll);
  }, []);

  return (
    <>
      {isVisble && (
        <div className={styles.topbtn} onClick={goToBtn}>
          <BsArrowUpCircleFill className={styles.icon} />
        </div>
      )}
    </>
  );
};
