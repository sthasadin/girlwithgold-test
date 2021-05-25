import React, { useState } from 'react';
import Axios from 'axios';
import Auth from '../../components/Auth';

export default function Product_Create() {
  Auth();
  //product Create
  const [image, setImages] = useState([]);
  const [errorImage, setErrorImage] = useState(false);
  const [imageCallBack, setimageCallBack] = useState('');

  function productCreate(e) {
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
    if (imageNumber === 0) {
      return setErrorImage(true);
    }
    setErrorImage(false);

    if (imageNumber > 1) {
      imageRoute = 'files';
    }
    let formData = new FormData();
    for (let i = 0; i < imageNumber; i++) {
      formData.append('image', image[i]);
    }

    setimageCallBack('Image uploading...');
    let retrievedImage;
    Axios.post(`/api/image/${imageRoute}`, formData).then((response) => {
      setimageCallBack('Image uploaded');

      if (imageNumber > 1) {
        retrievedImage = response.data.map(function (item) {
          return item.id;
        });
      } else {
        retrievedImage = [response.data.id];
      }
      product.productImages = retrievedImage;

      setTimeout(() => {
        setimageCallBack('Product uploading...');
      }, 1000);
      setTimeout(() => {
        Axios.post(`/api/product/`, product).then((response) => {
          console.log(response.data);
          setimageCallBack('Product registered');
        });
      }, 2000);
    });
  }
  function handleImage(e) {
    setImages(e.target.files);
  }

  return (
    <div className="product-create">
      <h4 className="product-create__subtitle">CRUD Operation</h4>
      <h1 className="product-create__title">Product Create</h1>
      <form onSubmit={productCreate} className="product-create__form">
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
        />

        <input
          id="file"
          type="file"
          className=" product-create__input-file"
          multiple
          onChange={handleImage}
        />

        {errorImage && <p>No images selected</p>}
        {imageCallBack && <h1>{imageCallBack}</h1>}
        <button className="product-create__button btn__inline--black">
          Add Product
        </button>
      </form>
    </div>
  );
}
