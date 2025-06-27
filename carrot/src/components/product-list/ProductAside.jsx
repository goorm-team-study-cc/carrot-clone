import React, { useReducer, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation } from '../../contexts/LocationContext';

function clickReducer(state, action) {
  switch (action.type) {
    case 'SELECT':
      return { selectedPrice: action.payload }; // payload: price 값
    default:
      return state;
  }
}

export default function ProductAside() {
  //로컬 데이터에 들어있는 지역
  const VALID_LOCATIONS = ['서초동', '잠원동', '반포동'];
  //지역정보 context
  const { location, setLocation, price, setPriceFilter } = useLocation();
  //지역 전체 보여줄지 여부
  const [showAll, setShowAll] = useState(false);
  console.log(locationArr.indexOf(location));
  const [selected, setSelected] = useState(locationArr[locationArr.indexOf(location)]);
  const visibleItems = showAll ? locationArr : locationArr.slice(0, 6);
  //가격필터 토글(버튼)
  const [isClick, clickProvider] = useReducer(clickReducer, { selectedPrice: null });
  //가격필터 입력값
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  //로컬 데이터에 없는 데이터인경우 반포로 return
  function validateLocation(location, fallback = '반포동') {
    return VALID_LOCATIONS.includes(location) ? location : fallback;
  }

  /** input에 가격 입력 및 적용하기 버튼을 눌렸을 때
   * 위에 버튼과 값이 일치하면 선택, 하지만 적용은 안됨.
   * 만약 범위가 아닌경우 버튼은 클릭만 해제
   */
  console.log(price);
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
                    setLocation(validateLocation(value));
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
                  <button
                    className='btn__aside--price'
                    style={{
                      backgroundColor: isClick.selectedPrice === value.price ? 'black' : 'white',
                      color: isClick.selectedPrice === value.price ? 'white' : 'black',
                    }}
                    onClick={() => {
                      clickProvider({ type: 'SELECT', payload: value.price });
                      setPriceFilter([0, value.price]); // ✅ 가격 필터 context 업데이트 (선택사항)
                    }}>
                    {value.title}
                  </button>
                </figure>
              ))}
              <div className='aside__price__input'>
                <input
                  type='number'
                  name='minPrice'
                  id='minPrice'
                  className='input__price'
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span> - </span>
                <input
                  type='number'
                  name='maxPrice'
                  id='maxPrice'
                  className='input__price'
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
              <input className='btn__aside--submit' type='button' value='적용하기' />
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
