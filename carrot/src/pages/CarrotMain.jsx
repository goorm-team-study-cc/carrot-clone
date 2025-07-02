import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CarrotMain() {
  return (
    <>
    <div class="body1">
        <div className='logoset'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
        <h2>당근에서 찾고 계신가요?</h2>
        </div>
        <div className="location">
          <div className='ww'>
            <div className="">
            <button className="location-btn">송도동
                 <span className="dropdown-icon">▼</span></button>
            </div>
            
            <div className="search-bar">
            <input type="text" placeholder='검색어를 입력해주세요' />
            </div>
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
