import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MultiCarousel from '../components/MultiCarousel';
import { useParams } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const { id } = useParams();
  //productBrand,
  useEffect(() => {
    Axios.get(`/api/product/${id}`).then((response) => {
      setProduct(response.data.products);
      setProductImages(response.data.products.productImages);
      setAdvertisements(response.data.advertisements);
      console.log(response.data.products);
    });
  }, []);

  function featuredProducts(item, key) {
    return (
      <div className="feature__product" key={key}>
        <figure className="feature__product-image">
          <img
            src={'/api/image/stream/' + item.productImages[0]}
            alt="unsplash random"
          />
        </figure>
        <h4 className="feature__product-name">{item.productName}</h4>
        <h5 className="feature__product-price">{item.productPrice}</h5>
      </div>
    );
  }

  return (
    <div className="product">
      <div className="product__top">
        <div className="product__left">
          <div className="product__left-container">
            {productImages.map((item, key) => (
              <figure key={key} className="product__image">
                <img src={'/api/image/stream/' + item} alt="unsplash random" />
              </figure>
            ))}
          </div>
        </div>
        <div className="product__right">
          <div className="product__contain">
            <div className="product__brand">{product.productBrand}</div>
            <h1 className="product__name">{product.productName}</h1>
          </div>

          <h1 className="product__price">{product.productPrice}</h1>
          <div className="product__description">
            {product.productDescription}
          </div>
          <a href="#" className="btn__inline--black product__button">
            Contact me
          </a>
        </div>
      </div>
      <div className="product__bottom">
        <h3 className="product__recommend-sub">Featured products</h3>
        <h1 className="product__recommend-main">
          Our <span className="underline--primary">amazing products</span>
        </h1>
        <MultiCarousel
          itemArray={advertisements}
          functionContainer={featuredProducts}
          isArrow={true}
          itemDesktop={4}
        />
      </div>
    </div>
  );
}
