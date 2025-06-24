import React from 'react';
import '../assets/ProductList.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import ProductAside from '../components/product-list/ProductAside';
import ProductItemList from '../components/product-list/ProductItemList';
import { Link, useLocation } from 'react-router-dom';

export default function ProductList() {
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
          서울특별시 서초구 서초동 중고거래
        </h2>
        <section className='market__item__section'>
          <ProductAside />
          <ProductItemList />
        </section>
      </div>
    </div>
  );
}
