import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
  let rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      onClick={(event) => {
        setVisible(false);
      }}
      className={rootClasses.join(" ")}
    >
      <div
        className={cl.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
