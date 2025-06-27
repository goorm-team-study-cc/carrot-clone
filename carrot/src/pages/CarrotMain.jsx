import React from 'react';

export default function CarrotMain() {
  return (
    <>
    <div class="body1">

        <h2>당근에서 찾고 계신가요?</h2>
        
        <div className="location">
            <div className="">
            <button className="location-btn">송도동
                 <span className="dropdown-icon">▼</span></button>
            </div>
            
            <div className="search-bar">
            <input type="text" placeholder='검색어를 입력해주세요' />
            </div>
            <div className="sb">
            <p>인기 검색어</p>
            <div className="sb-a">
            <a href="#">에어컨</a>
            <a href="#">에어컨 청소</a>
            <a href="#">노트북</a>
            <a href="#">원룸</a>
            <a href="#">현대 중고차</a>
            <a href="#">이사짐 알바</a>
            <a href="#">근처 맛집</a>
            <a href="#">투표</a>
            <a href="#">동네친구</a>
            </div>
            </div>
        </div>
        
    </div>
    <div class="nav">
        
      <ul>
        <li><a href="/productlist">중고거래</a></li>
        <li><a href="/productlist">동네생활</a></li>
        <li><a href="/productlist">중고차</a></li>
        <li><a href="/productlist">부동산</a></li>
        <li><a href="/productlist">알바</a></li>
        <li><a href="/productlist">중고기기</a></li>
        
      </ul>
    

    </div>
    <div className="body3">
        <div>송도동</div>
        <div>역삼동</div>
        <div>신림동</div>
        <div>구월동</div>
        <div>한남동</div>
        <div>성수동</div>
        <div>압구정동</div>
        <div>청담동</div>
        <div>관교동</div>
    </div>
    </>
  );
}
