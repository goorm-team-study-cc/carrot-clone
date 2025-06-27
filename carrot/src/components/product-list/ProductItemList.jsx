import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import products from '../../assets/products.json';
import { useNavigate } from 'react-router-dom';
import { useLocation } from '../../contexts/LocationContext';

export default function ProductItemList() {
  const [count, setCount] = useState(48);
  const [items, setItems] = useState([]);
  let navigate = useNavigate();
  const { location, price } = useLocation();

  useEffect(() => {
    // 데이터 필터링
    const filterData = filterItem();
    // 최대 개수 도달 시 처리
    const sliced = filterData.slice(0, count);
    setItems(sliced);
  }, [count, location, price]); // ✅ count가 바뀔 때마다 실행됨

  function clickMore() {
    const locationFiltered = filterItem();
    // 만약 count가 데이터 개수보다 크면 예외처리
    if (count >= locationFiltered.length) {
      alert('더 이상 상품이 없습니다.');
      return;
    }
    setCount((prev) => prev * 2);
  }

  function handleClick(id) {
    navigate(`/productdetail/${id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  /** 지역 필터링, 가격 필터링 */
  function filterItem() {
    //지역 필터링
    const locationFilter = products.filter((data) => data['regionId'].name === location);
    //가격 필터링
    const priceFilter = locationFilter.filter((data) => {
      return data.price >= price[0] && data.price <= price[1];
    });
    return priceFilter;
  }

  return (
    <section className='Product__list'>
      <div className='list--right'>
        {items.map((item) => (
          <Card
            key={item.id}
            className='product__card'
            style={{ width: '15rem', border: 'none' }}
            onClick={() => handleClick(item.id)}>
            <Card.Img variant='top' src={item.thumbnail} alt={item.title} />
            <Card.Body style={{ padding: 0 }}>
              <h5 className='card__item__title'>{item.title}</h5>
              <p className='card__item__price'>
                {Number(item.price) === 0 ? '나눔' : `${Number(item.price).toLocaleString()}원`}
              </p>
              <div className='card__item__info'>
                <span>{item.regionId.name}</span>
                <span> ・ </span>
                <span>{changeTime(item.boostedAt)}</span>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {items.length < products.filter((d) => d.regionId.name === location).length && (
        <button onClick={clickMore} className='product__btn__more'>
          더보기
        </button>
      )}
    </section>
  );
}

// 시간 변환 함수
function changeTime(boostedAt) {
  let time = '34분 전';

  const upTime = new Date(boostedAt);
  const nowTime = new Date();

  // 끌올한 날짜와 오늘 날짜가 같지 않을 때 => n일 전
  if (upTime.toDateString() != nowTime.toDateString()) {
    const result = new Date(nowTime - upTime);
    time = `${Number(result.getDate()) - 1}일 전`;
  } else {
    const diffMs = nowTime - upTime; // 밀리초 차이
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);

    if (diffHour >= 1) {
      time = `${diffHour}시간 전`;
    } else if (diffMin >= 1) {
      time = `${diffMin}분 전`;
    } else {
      time = `방금 전`;
    }
  }

  return time;
}
