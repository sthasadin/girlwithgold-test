import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import loader from '../../assets/gifs/loading.webp';
import PorductPopUp from './Product_UpdateInner';
import Auth from '../../components/Auth';

let currentPagination;
export default function Product_Update() {
  Auth();
  //product Update
  const [products, setProducts] = useState([]);
  const [paginationCount, setPaginationCount] = useState([]);
  const [deleteCallBack, setDeleteCallBack] = useState('');

  useEffect(() => {
    getPagination(null, 0);
  }, []);

  function getPagination(e, paginationNumber) {
    if (e) {
      e.preventDefault();
    }
    currentPagination = paginationNumber;
    Axios.get(`/api/product/pagination/${paginationNumber}`).then(
      (response) => {
        setProducts(response.data.products);
        setPaginationCount(response.data.count);
      }
    );
  }

  function handleDelete(e, item) {
    e.preventDefault();
    //axios delete only supports payload with 'data' and 'headers' attribute.
    setDeleteCallBack('Please wait, this can take some time.');
    Axios.delete(`/api/product/${item._id}`).then((response) => {
      if (response.data.result) {
        Axios.delete('/api/image/files/delete', {
          data: item.productImages,
        }).then(() => {
          if (products.length === 1) {
            //Since products are being fetched by pagination no. If the last product on pagination no 2 is deleted i want it to go back to 0.
            currentPagination = 0;
          }
          getPagination(null, currentPagination);
          setDeleteCallBack('Done');
        });
      } else {
        console.log('failed deletion');
      }
    });
  }

  return (
    <div className="product-update">
      <h4 className="product-update__subtitle">CRUD Operation</h4>
      <h1 className="product-update__title">Product Update</h1>
      <div className="pagination product-update__pagination">
        {paginationCount.map((item) => (
          <li className="pagination__item" key={item}>
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
      <table className="product-update__container">
        <tbody>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {products.length === 0 ? (
            <tr>
              <td className="product-update__loader">
                <img src={loader} alt="loader gif" />
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item._id} className="product-update__item" id="close">
                <td className="product-update__image">
                  <img
                    src={'/api/image/stream/' + item.productImages[0]}
                    alt="unsplash random"
                  />
                </td>
                <td className="product-update__name">
                  <p>{item.productName}</p>
                </td>
                <td>
                  <a
                    href={`#d${item._id}`}
                    className="product-update__delete btn--red"
                  >
                    Delete
                  </a>
                  <div id={`d${item._id}`} className="popup">
                    <div className="popup__container">
                      <a className="popup__close" href="#close"></a>
                      <div className="product-update__popup-delete">
                        <h3>{deleteCallBack}</h3>
                        <h1>Are you sure?</h1>
                        <button
                          className="product-update__popup-delete-yes btn--red"
                          onClick={(e) => handleDelete(e, item)}
                        >
                          Yes
                        </button>
                        <a
                          className="product-update__popup-delete-no btn--blue"
                          href="#close"
                        >
                          No
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <a
                    href={`#u${item._id}`}
                    className="product-update__Update btn--blue"
                  >
                    Update
                  </a>
                  <PorductPopUp
                    item={item}
                    getPagination={getPagination}
                    currentPagination={currentPagination}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
