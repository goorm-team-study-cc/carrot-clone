import React from 'react';

export default function ProductAside() {
  return (
    <section>
      <aside>
        <header>
          <h3>필터</h3>
          <a href='#'>초기화</a>
        </header>
        <section>
          <div>
            <input type='checkbox' name='isTradable' id='tradable' />
            <label htmlFor='isTradable'>거래 가능만 보기</label>
          </div>
          <div className='market__aside__filter'>
            <h4>위치</h4>
            <p>서울특별시 서초구</p>
            <div className='aside__filter aside__location'>
              <input type='radio' name='locationFilter' id='1' />
              <label htmlFor='locationFilter'>서초동</label>
            </div>
          </div>
          <div className='market__aside__filter'>
            <h4>카테고리</h4>
            <div className='aside__filter aside__category'>
              <input type='radio' name='categoryFilter' id='1' />
              <label htmlFor='categoryFilter'>디지털기기</label>
            </div>
          </div>
          <div className='market__aside__filter'>
            <h4>가격</h4>
            <div className='aside__filter aside__price'>
              <button>나눔</button>
              <button>5,000원 이하</button>
              <button>10,000원 이하</button>
              <button>20,000원 이하</button>
              <div className='aside__price__input'>
                <input type='number' name='minPrice' id='minPrice' /> -{' '}
                <input type='number' name='maxPrice' id='maxPrice' />
              </div>
              <input type='submit' value='적용하기' />
            </div>
          </div>
        </section>
      </aside>
    </section>
  );
}
