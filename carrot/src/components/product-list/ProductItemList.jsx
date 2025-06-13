import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ProductItemList() {
  return (
    <section className='Product__list list--right'>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://img.kr.gcp-karroter.net/origin/article/202506/b4da17bf16801e51b8c88938532108dc9058ed947d487724a5a586851e27957e_0.webp?q=82&s=300x300&t=crop&f=webp'
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>15,000원</Card.Text>
          <div className='card__item__info'>
            <span>서초동</span>
            <span>・</span>
            <span>34분 전</span>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://img.kr.gcp-karroter.net/origin/article/202506/b4da17bf16801e51b8c88938532108dc9058ed947d487724a5a586851e27957e_0.webp?q=82&s=300x300&t=crop&f=webp'
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>15,000원</Card.Text>
          <div className='card__item__info'>
            <span>서초동</span>
            <span>・</span>
            <span>34분 전</span>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
}
