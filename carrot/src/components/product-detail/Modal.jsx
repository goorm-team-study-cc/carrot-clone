import React, { useState } from "react";

export default function Modal({ dispatch }) {

  return (
    <>
      <div className="modal">
        <div className="modal-bg"></div>
        <div className="modal-box">
          <button onClick={dispatch}>close</button>
          <h1>큐알코드</h1>
        </div>
      </div>
    </>
  );
}
