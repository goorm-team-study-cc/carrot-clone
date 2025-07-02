import React from 'react';
import carrotlogo from '../assets/carrotlogo.png';
export default function Header() {
  return (

    <div className="header">
        <a href="#"><img className='carrot-logop' src={carrotlogo} alt="로고" /></a>
        <button>앱 다운로드</button>
    </div>

  );
}
