import React from 'react';
import facebookImg from '../assets/face.png';
import youImg from '../assets/you.png';
import inImg from '../assets/in.jpeg';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-icon">
            <div>
                <div className="icon-logo">당근</div> 
                <div className="icon-i">
                    <a href="#"><img className='ica' src={facebookImg} alt="facebook" /></a>
                    <a href="#" ><img className='ica' src={inImg} alt="instagram" /></a>
                    <a href="#"><img className='ica' src={youImg} alt="youtube" /></a>
                </div>
            </div>
        </div>

          <div className="foot2">
        <div>
        <p>(주) 당근마켓</p>
        <p>대표김용현, 황도연 사업자번호375-87-00088</p>
        <p><span>직업정보제공사업 신고번호</span> J1200020200016</p>
        <p>통신판매업 신고번호 2021-서울서초-2875</p>
        <p>호스팅 사업자 Amazon Web Service(AWS)</p>
        <p>주소 서울특별시 구로구 디지털로 300, 10층 (당근서비스)</p>
        <p>전화1877-9737 고객문의 cs@daangnservice.com</p>
        </div>
        <div>
            <a href="">이용약관</a>
            <a href="">개인정보처리방침</a>
            <a href="">운영정책</a>
            <a href="">위치기반서비스 이용약관</a>
            <a href="">이용자보호 비전과 계획</a>
            <a href="">청소년보호 정책</a>
        </div>
    </div>
    </footer>
  );
}
