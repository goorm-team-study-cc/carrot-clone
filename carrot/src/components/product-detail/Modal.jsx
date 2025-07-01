import React, { useState } from "react";
import qr from '../../assets/qr.png';

export default function Modal({ dispatch }) {

  return (
    <>
      <div className="modal-bg"></div>
      <div className="modal-box">
        <div className="p-1 flex-row">
          <span className="p-1">QR 코드 스캔</span>
          <span className="p-1 ml-auto" onClick={dispatch}>X</span>
        </div>
        <hr />
        <div className="modal-content ">
          <div className="subtitle ">당근 앱으로 열기</div>
          <img src={qr} alt="" />
          <p>모바일에서만 이용할 수 있어요.</p>
          <p>휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.</p>
        </div>

      </div>

    </>
  );
}
