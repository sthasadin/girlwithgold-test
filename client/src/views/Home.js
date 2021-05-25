import React from 'react';
import Banner from '../components/Banner';
import Advert from '../components/Advert';
//Multipart requires an array of data and a function that uses it strictly in that order.
import MultiCarousel from '../components/MultiCarousel';
export default function home() {
  const featureProductArray = [
    {
      productImage: '//unsplash.it/200/200',
      productName: 'Anes Narrow Diamond ring',
      productPrice: '350',
    },
    {
      productImage: '//unsplash.it/200/201',
      productName: 'Anes Narrow Diamond ring',
      productPrice: '350',
    },
    {
      productImage: '//unsplash.it/200/202',
      productName: 'Anes Narrow Diamond ring',
      productPrice: '350',
    },
    {
      productImage: '//unsplash.it/200/203',
      productName: 'Anes Narrow Diamond ring',
      productPrice: '350',
    },
    {
      productImage: '//unsplash.it/200/204',
      productName: 'Anes Narrow Diamond ring',
      productPrice: '350',
    },
  ];
  function featuredProducts(item, key) {
    return (
      <div className="feature__product" key={key}>
        <figure className="feature__product-image">
          <img src={item.productImage} alt="unsplash random" />
        </figure>
        <h4 className="feature__product-name">{item.productName}</h4>
        <h5 className="feature__product-price">{item.productPrice}</h5>
      </div>
    );
  }

  const presentationArray = [
    { productImage: '//unsplash.it//200/220' },
    { productImage: '//unsplash.it//200/221' },
    { productImage: '//unsplash.it//200/222' },
    { productImage: '//unsplash.it//200/223' },
    { productImage: '//unsplash.it//200/224' },
    { productImage: '//unsplash.it//200/225' },
  ];
  function presentation(item, key) {
    return (
      <figure className="presentation__image" key={key}>
        <img src={item.productImage} alt="unsplash random" />
      </figure>
    );
  }

  return (
    <div className="home">
      <Banner
        bannerImage={
          'https://cdn.shopify.com/s/files/1/0264/9672/9185/files/Sensitive_Earrings_Banner_SING_e59cdca2-cefc-453c-b78f-c432efe8ff88_2420x.jpg?v=1618882291'
        }
      />
      <Advert
        advertImage={
          'https://cdn.shopify.com/s/files/1/0264/9672/9185/files/Mothers_Day_Hero_WK42_2420x.jpg?v=1617951482'
        }
      />
      <section className="feature">
        <h5 className="feature__section-title">Featured Products</h5>
        <h1 className="feature__main-title">Sophisticated Beauty</h1>
        <div className="feature__products">
          <MultiCarousel
            itemArray={featureProductArray}
            functionContainer={featuredProducts}
            isArrow={true}
            itemDesktop={4}
          />
        </div>
        <a href="#" className="btn">
          Show more
        </a>
      </section>
      <Banner
        bannerImage={
          'https://cdn.shopify.com/s/files/1/0264/9672/9185/files/3_for_Promo_Omni_SING_2420x.jpg?v=1618882401'
        }
      />
      <section className="presentation">
        <h5 className="presentation__sub-title">Presentation</h5>
        <h1 className="presentation__main-title">
          Inspire yourself to be something more
        </h1>

        <MultiCarousel
          itemArray={presentationArray}
          functionContainer={presentation}
          isArrow={false}
          itemDesktop={6}
        />
        <h3 className="presentation__caption-A">
          Show it to the world on instagram
        </h3>
        <h3 className="presentation__caption-B">#girlWithGold </h3>
      </section>
    </div>
  );
}
