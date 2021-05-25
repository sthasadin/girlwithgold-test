import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import loader from '../assets/gifs/loading.webp';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [paginationCount, setPaginationCount] = useState([]);

  let history = useHistory();
  function gotoProduct(e, link, product) {
    e.preventDefault();
    history.push({ pathname: link, state: { product } });
  }
  useEffect(() => {
    getPagination(null, 0);
  }, []);

  function getPagination(e, paginationNumber) {
    if (e) {
      e.preventDefault();
    }
    axios
      .get(`/api/product/pagination/${paginationNumber}`)
      .then((response) => {
        setProducts(response.data.products);
        setPaginationCount(response.data.count);
      });
  }

  return (
    <div className="products">
      <div className="products__container">
        {products.length === 0 ? (
          <figure className="loader">
            <img src={loader} alt="loader gif" />
          </figure>
        ) : (
          products.map((item) => (
            <a
              key={item._id}
              className="products__product"
              href="/product"
              onClick={(e) => gotoProduct(e, `/product/${item._id}`, item)}
            >
              <figure className="products__product-image">
                <img
                  src={'/api/image/stream/' + item.productImages[0]}
                  alt="unsplash random"
                />
              </figure>
              <h3 className="products__product-price">{item.productPrice}</h3>
              <div className="products__product-name">{item.productName}</div>
            </a>
          ))
        )}
      </div>

      <div className="pagination">
        {paginationCount.map((item) => (
          <li className="pagination__item">
            <a
              className="pagination__link"
              href={`/api/product/pagination/${item}`}
              onClick={(e) => getPagination(e, item)}
              key={item}
            >
              {item + 1}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
