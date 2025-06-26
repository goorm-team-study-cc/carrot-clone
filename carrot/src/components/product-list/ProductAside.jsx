import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation } from '../../contexts/LocationContext';

export default function ProductAside() {
  //지역정보 context
  const { location, setLocation } = useLocation();
  //지역 전체 보여줄지 여부
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(locationArr[0]); // 첫 번째 값 기본 선택
  const visibleItems = showAll ? locationArr : locationArr.slice(0, 6);

  return (
    <section className='product__aside__wrapper'>
      <aside className='product__aside'>
        <header className='product__aside__header'>
          <h3>필터</h3>
          <a href='#'>초기화</a>
        </header>
        <section className='product__aside__section'>
          <div className='section__isSell'>
            <Form.Check type='checkbox' name='isTradable' id='isTradable' label={'거래 가능만 보기'} />
          </div>
          <div className='market__aside__filter'>
            <h4>위치</h4>
            <p>서울특별시 {location}</p>
            <div className='aside__filter aside__location'>
              {visibleItems.map((value, index) => (
                <Form.Check // prettier-ignore
                  key={`location-${index}`}
                  type={'radio'}
                  name='locationCheck'
                  id={index}
                  label={value}
                  checked={selected === value}
                  onChange={() => {
                    setSelected(value);
                    setLocation(value);
                  }}
                />
              ))}
            </div>
            {locationArr.length > 6 && (
              <button className='btn--more' onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? '접기' : '더보기'}
              </button>
            )}
          </div>
          <div className='market__aside__filter'>
            <h4>카테고리</h4>
            <div className='aside__filter aside__category'>
              {keywords.map((value, index) => (
                <Form.Check key={`category-${index}`} type='radio' name='categoryCheck' id={index} label={value} />
              ))}
            </div>
          </div>
          <div className='market__aside__filter'>
            <h4>가격</h4>
            <div className='aside__filter aside__price'>
              {priceFilter.map((value) => (
                <figure key={value.price}>
                  <button className='btn__aside--price'>{value.title}</button>
                </figure>
              ))}
              <div className='aside__price__input'>
                <input type='number' name='minPrice' id='minPrice' className='input__price' />
                <span> - </span>
                <input type='number' name='maxPrice' id='maxPrice' className='input__price' />
              </div>
              <input className='btn__aside--submit' type='submit' value='적용하기' />
            </div>
          </div>
        </section>
      </aside>
    </section>
  );
}

const locationArr = [
  '서초동',
  '잠원동',
  '반포동',
  '방배동',
  '양재동',
  '서초4동',
  '서초2동',
  '서초3동',
  '서초1동',
  '반포1동',
  '우면동',
  '방배본동',
  '반포3동',
  '양재2동',
  '반포4동',
  '반포2동',
  '방배4동',
  '방배1동',
  '방배2동',
  '반포본동',
  '양재1동',
  '방배3동',
  '내곡동',
  '신원동',
  '원지동',
  '염곡동',
];
const keywords = [
  '디지털기기',
  '생활가전',
  '가구/인테리어',
  '생활/주방',
  '유아동',
  '유아도서',
  '여성의류',
  '여성잡화',
  '남성패션/잡화',
  '뷰티/미용',
  '스포츠/레저',
  '취미/게임/음반',
  '도서',
  '티켓/교환권',
  '가공식품',
  '건강기능식품',
  '반려동물용품',
  '식물',
  '기타 중고물품',
  '삽니다',
];
const priceFilter = [
  { price: 0, title: '나눔' },
  { price: 5000, title: '5,000원 이하' },
  { price: 10000, title: '10,000원 이하' },
  { price: 20000, title: '20,000원 이하' },
];
