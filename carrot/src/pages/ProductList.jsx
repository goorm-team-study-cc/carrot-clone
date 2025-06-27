import React, { useReducer, useState } from 'react';
import '../assets/ProductList.css';
import { useLocation } from '../contexts/LocationContext';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import ProductAside from '../components/product-list/ProductAside';
import ProductItemList from '../components/product-list/ProductItemList';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const { location } = useLocation();
  //가격필터 토글(버튼)
  const [isBadgeVisible, setBadgeVisible] = useState(false);

  return (
    <div className='market__list-container'>
      <div className='market__list'>
        <nav className='market__nav__info'>
          <ol>
            <li>
              <Link to={'/'}>홈</Link>
            </li>
            <li>{'>'}</li>
            <li>중고거래</li>
          </ol>
        </nav>
        <h2 className='market__now__location'>
          {/* 서울특별시 서초구 {localData} 중고거래 */}
          서울특별시 서초구 {location} 중고거래
        </h2>
        <section className='market__item__section'>
          <ProductAside setBadgeVisible={setBadgeVisible} />
          <ProductItemList isBadgeVisible={isBadgeVisible} />
        </section>
      </div>
    </div>
  );
}
