import React from "react";
import "./Detail.css";
import products from "../../assets/products.json";

export default function DetailLayout() {
  const productData = products.find((entry) => entry.id == 214);

  return (
    <>
      <nav>
        <span>홈</span>
        <span>></span>
        <span>중고거래</span>
        <span>></span>
        <span>{productData.title}</span>
      </nav>
      <div className="info flex-row">
        <div className="info__media">
          <div className="product__image--box">
            <img className="product__image" src={productData.thumbnail}></img>
          </div>
          <div className="profile flex-row">
            <img className="profile__image" src="https://buly.kr/CLzSdgI" />
            <div className="flex-column">
              <span>꿍야</span>
              <span>부림동</span>
            </div>
            <div className="flex-column ml-auto">
              <div className="flex-row">
                <div className="flex-column">
                  <span>52.2'C</span>
                  <span>----</span>
                </div>
                <span>😀</span>
              </div>

              <span>매너온도</span>
            </div>
          </div>
        </div>
        <div className="info__content flex-column">
          <h1 className="title">{productData.title}</h1>
          <div className="flex-row">
            <span className="category">티켓/교환권</span>
            <span className="time">끌올 28분 전</span>
          </div>

          <span className="price">21,000원</span>
          <p className="content">{productData.content}</p>
          <div className="flex-row">
            <span>채팅 0</span>
            <span>관심 2</span>
            <span>조회 11</span>
          </div>

          <span className="qr">당근 앱에서 보기</span>
        </div>
      </div>
      <hr></hr>
      <div className="user-products">
        <div className="flex-row">
          <span>꿍야의 판매물품</span>
          <span className="ml-auto">더 구경하기></span>
        </div>
        <div className="user-products__list flex-row">
          <div className="preview flex-column">
            <img className="preview__image" src="https://buly.kr/CLzSdgI" />
            <span className="preview__title">초등 경제 동화</span>
            <span className="preview__price">4,000원</span>
            <span className="preview__area">부림동</span>
          </div>
        </div>
      </div>

      <div className="popular-products">
        <div className="flex-row">
          <span>인기매물</span>
          <span className="ml-auto">더 구경하기></span>
        </div>
        <div className="popular-products__list flex-row">
          <div className="preview flex-column">
            <img className="preview__image" src="https://buly.kr/CLzSdgI" />
            <span className="preview__title">초등 경제 동화</span>
            <span className="preview__price">4,000원</span>
            <span className="preview__area">부림동</span>
          </div>
        </div>
      </div>

      <div className="empty-box"></div>
    </>
  );
}
