import styles from "./conversation.module.css";
import React from "react";

function Conversation({ conversation, currentUserId, selected, isOnline }) {
  return (
    <div
      className={
        selected
          ? `${styles.conversation} ${styles.selected}`
          : `${styles.conversation}`
      }
    >
      {/* <img className="conversationImg" src={""} alt="" /> */}
      <span className={styles.conversationName}>
        {conversation.users[0]._id != currentUserId
          ? conversation.users[0].fullname
          : conversation.users[1].fullname}
      </span>
      <sup className={styles.onlineStatus}>
        {isOnline ? "online" : ""}
        {/* {isOnline} */}
      </sup>
    </div>
  );
}

export default React.memo(Conversation);
