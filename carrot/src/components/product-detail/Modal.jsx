import React, { useState } from "react";
import qr from '../../assets/qr.png';

export default function Modal({ dispatch }) {

  return (
    <>
      <div className="modal-bg"></div>
      <div className="modal-box">
        <div className="flex-row">
          <span>QR 코드 스캔</span>
          <span className="ml-auto" onClick={dispatch}>X</span>
        </div>
        <div>
          <div className="subtitle margin-tb">당근 앱으로 열기</div>
          <img src={qr} alt="" />
        </div>

      </div>

    </>
  );
}
