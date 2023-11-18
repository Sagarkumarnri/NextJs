import React from "react";
import styles from "../../styles/hi.module.scss";
import { useState } from "react";

import { useRouter } from "next/router";
function MyProfile() {
  var [counter, setCounter] = useState(0);

  const router = useRouter();

  return (
    <div className={styles.parent}>
      <div className={styles.photo_data}>
        <div className={styles.photo}></div>
        <div className={styles.data}></div>
      </div>
      <div class={styles.content}>Content inside the parent with scrolling</div>
    </div>
  );
}
export default MyProfile;
