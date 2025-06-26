import React from "react";
import { useNavigate } from "react-router-dom";

export default function Preview({ product }) {
  //소수점이하 없애고 천자리마다 , 넣기
  const format = Math.floor(product.price).toLocaleString();
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/productdetail/${product.id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div onClick={handleClick} className="preview flex-col">
        <img className="preview__image" src={product.thumbnail} />
        <span className="preview__title p1">{product.title}</span>
        <span className="preview__price p1-strong">{format}원</span>
        <span className="preview__area caption">{product.regionId.name}</span>
      </div>
    </>
  );
}
