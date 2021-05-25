import React, { useState } from 'react';
import Axios from 'axios';

export default function Product_UpdateInner({
  item,
  getPagination,
  currentPagination,
}) {
  const [updatedProduct, setUpdatedProduct] = useState(item);
  const [image, setImages] = useState([]);
  function handleUpdatedProduct(e) {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImages(e.target.files);
  }

  function handleUpdate(e) {
    e.preventDefault();
    const product = {
      productName: e.target.productName.value,
      productDescription: e.target.productDescription.value,
      productBrand: e.target.productBrand.value,
      productPrice: e.target.productPrice.value,
      productType: e.target.productType.value,
    };
    const imageNumber = image.length;
    let imageRoute = 'file';
    if (imageNumber > 0) {
      if (imageNumber > 1) {
        imageRoute = 'files';
      }
      let formData = new FormData();
      for (let i = 0; i < imageNumber; i++) {
        formData.append('image', image[i]);
      }

      let retrievedImage;
      Axios.post(`/api/image/${imageRoute}`, formData).then((response) => {
        Axios.delete('/api/image/files/delete', {
          data: item.productImages,
        });
        if (imageNumber > 1) {
          retrievedImage = response.data.map(function (item) {
            return item.id;
          });
        } else {
          retrievedImage = [response.data.id];
        }
        product.productImages = retrievedImage;
        httpsUpdate(product);
      });
    } else {
      httpsUpdate(product);
    }
  }

  function httpsUpdate(product) {
    Axios.patch(`/api/product/${item._id}`, product).then((response) => {
      getPagination(null, currentPagination);
    });
  }

  return (
    <div id={`u${item._id}`} className="popup">
      <div className="popup__container">
        <a className="popup__close" href="#close"></a>
        <div className="product-update__popup-update">
          <form onSubmit={handleUpdate} className="product-create__form">
            <label htmlFor="name" className="product-create__label">
              Product Name
            </label>
            <input
              id="name"
              type="text"
              className="product-create__input"
              name="productName"
              placeholder="Product name"
              autoComplete="off"
              onChange={handleUpdatedProduct}
              value={updatedProduct.productName}
            />
            <label htmlFor="description" className="product-create__label">
              Product Description
            </label>
            <textarea
              id="description"
              type="text"
              className="product-create__textarea"
              name="productDescription"
              placeholder="Description"
              onChange={handleUpdatedProduct}
              value={updatedProduct.productDescription}
            />
            <label htmlFor="brand" className="product-create__label">
              Product Brand
            </label>
            <input
              id="brand"
              type="text"
              className="product-create__input"
              name="productBrand"
              placeholder="Product brand"
              onChange={handleUpdatedProduct}
              value={updatedProduct.productBrand}
            />
            <label htmlFor="price" className="product-create__label">
              Product Price
            </label>
            <input
              id="price"
              type="text"
              className="product-create__input"
              name="productPrice"
              placeholder="Product price"
              onChange={handleUpdatedProduct}
              value={updatedProduct.productPrice}
            />
            <label htmlFor="type" className="product-create__label">
              Product Type
            </label>
            <input
              id="type"
              type="text"
              className="product-create__input"
              name="productType"
              placeholder="Product type"
              onChange={handleUpdatedProduct}
              value={updatedProduct.productType}
            />

            <input
              id="file"
              type="file"
              className=" product-create__input-file"
              multiple
              onChange={handleImage}
            />

            <button className="product-create__button btn__inline--black">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
