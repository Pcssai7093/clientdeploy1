// import "./message.css";
// import { format } from "timeago.js";
import styles from "./message.module.css";
import React from "react";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");
function Message({ message, own, time }) {
  return (
    <div
      className={own ? `${styles.message} ${styles.own}` : `${styles.message}`}
    >
      <div className={`${styles.messageTop}`}>
        <p className={`${styles.messageText}`}>{message}</p>
      </div>
      <div className={`${styles.messageBottom}`}>
        {timeAgo.format(new Date(time))}
      </div>
    </div>
  );
}

export default React.memo(Message);
