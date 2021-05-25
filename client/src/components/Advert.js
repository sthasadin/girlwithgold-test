import React from 'react';

export default function Advert({ advertImage }) {
  return (
    <div className="advert">
      <a href="#" className="advert__link">
        <figure className="advert__image">
          <img src={advertImage} alt="unsplash random" />
        </figure>
      </a>
    </div>
  );
}
