import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MultiCarousel({
  itemArray,
  functionContainer,
  isArrow,
  itemDesktop,
}) {
  const responsive = {
    superLargeDesktop: {
      //Max as in run upto maximum 4000px and min as in run from infinity to minimum 1200.
      //Combined it is run from 1200px to 4000px. Likewise for others.
      breakpoint: { max: 4000, min: 1200 },
      items: itemDesktop,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      draggable={false}
      slidesToSlide={1}
      arrows={isArrow}
    >
      {itemArray.map(function (item, key) {
        return functionContainer(item, key);
      })}
    </Carousel>
  );
}
// <div className="feature__product">
//   <figure className="feature__product-image">
//     <img src="//unsplash.it/200/200" alt="unsplash random" />
//   </figure>
//   <h4 className="feature__product-name">Anes Narrow Diamond ring</h4>
//   <h5 className="feature__product-price">350</h5>
// </div>
