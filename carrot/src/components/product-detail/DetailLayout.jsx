import React, { useEffect, useReducer, useRef } from "react";
import "../../index.css";
import "./Detail.css";
import products from "../../assets/products.json";
import Preview from "./Preview";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

export default function DetailLayout() {
  const { productId } = useParams();
  const productData = products.find((product) => product.id == productId);
  const userDbId = productData.user.dbId;
  const regionId = productData.regionId.dbId;

  const userProducts = products.filter(
    (product) => product.user.dbId == userDbId
  );

  const popularProducts = products
    .filter((product) => product.regionId.dbId == regionId)
    .slice(0, 20);

  const initState = false;

  function reducer(state) {
    return !state
  }

  const [modalOn, dispatch] = useReducer(reducer, initState)

  const handleModal = () => {
    dispatch();
    document.body.style.overflow = !modalOn ? 'hidden' : 'auto';
  }

  return (
    <>
      <nav>
        <div className="nav-product">
          <span> 홈 </span>
          <span>></span>
          <span> 중고 거래 </span>
          <span>></span>
          <span> {productData.title} </span>
        </div>
      </nav>
      <div className="info flex-row">
        <div className="info__media flex-col">
          <div className="product__image--box">
            <img className="product__image" src={productData.thumbnail}></img>
          </div>
          <div className="profile flex-row">
            <img className="profile__image" src="https://buly.kr/CLzSdgI" />
            <div className="flex-col">
              <span>꿍야</span>
              <span>부림동</span>
            </div>
            <div className="flex-col ml-auto">
              <div className="flex-row">
                <div className="flex-col">
                  <span>52.2'C</span>
                  <span>----</span>
                </div>
                <span>😀</span>
              </div>

              <span>매너온도</span>
            </div>
          </div>
        </div>
        <div className="content-info flex-col">
          <h1 className="title">{productData.title}</h1>
          <div className="flex-row">
            <span className="category">티켓/교환권 - </span>
            <span className="time"> 끌올 28분 전</span>
          </div>

          <span className="price">21,000원</span>
          <p className="content">{productData.content}</p>
          <div className="caption flex-row margin-tb">
            <span>채팅 0 - </span>
            <span> - 관심 2 - </span>
            <span> - 조회 11</span>
          </div>

          <span className="qr" onClick={handleModal}>
            당근 앱에서 보기
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="user-products">
        <div className="margin-tb flex-row">
          <span className="subtitle">
            {productData.user.nickname} 의 판매물품
          </span>
          <span className="ml-auto main-color">더 구경하기 ></span>
        </div>
        <div className="user-products__list flex-row">
          {userProducts.map((product, index) => (
            <Preview key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="popular-products">
        <div className="margin-tb flex-row">
          <span className="subtitle">인기매물</span>
          <span className="ml-auto main-color">더 구경하기 ></span>
        </div>
        <div className="popular-products__list flex-row">
          {popularProducts.map((product, index) => (
            <Preview product={product} />
          ))}
        </div>
      </div>
      {modalOn ? (<Modal dispatch={handleModal} />) : <></>}

    </>
  );
}
