import React from "react";

export const MessageItem = ({ message, senderAddress, client }) => {
  const renderMessage = (message) => {
    try {
      if (message?.content.length > 0) {
        return <div style={styles.renderedMessage}>{message?.content}</div>;
      }
    } catch {
      return message?.fallbackContent ? (
        message?.fallbackContent
      ) : message?.contentFallback ? (
        message?.contentFallback
      ) : (
        <div style={styles.renderedMessage}>{message?.content}</div>
      );
    }
  };

  const isSender = senderAddress === client?.address;

  const MessageComponent = isSender ? "li" : "li";

  return (
    <MessageComponent
      style={isSender ? styles.senderMessage : styles.receiverMessage}
      key={message.id}
    >
      <div style={styles.messageContent}>
        {renderMessage(message)}
        <div style={styles.footer}>
          <span style={styles.timeStamp}>
            {`${new Date(message.sent).getHours()}:${String(
              new Date(message.sent).getMinutes()
            ).padStart(2, "0")}`}
          </span>
        </div>
      </div>
    </MessageComponent>
  );
};

const styles = {
  messageContent: {
    backgroundColor: "lightblue",
    padding: "5px 10px",
    alignSelf: "flex-start",
    textAlign: "left",
    display: "inline-block",
    margin: "5px",
    borderRadius: "5px",
    maxWidth: "80%",
    wordBreak: "break-word",
    cursor: "pointer",
    listStyle: "none",
  },
  renderedMessage: {
    fontSize: "12px",
    wordBreak: "break-word",
    padding: "0px",
  },
  senderMessage: {
    alignSelf: "flex-start",
    textAlign: "left",
    listStyle: "none",
    width: "100%",
  },
  receiverMessage: {
    alignSelf: "flex-end",
    listStyle: "none",
    textAlign: "right",
    width: "100%",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  timeStamp: {
    fontSize: "8px",
    color: "grey",
  },
};
