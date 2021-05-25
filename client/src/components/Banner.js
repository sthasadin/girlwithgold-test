import React from 'react';

export default function Banner({ bannerImage }) {
  return (
    <div className="banner">
      <a href="#" className="banner__link">
        <figure className="banner__image">
          <img src={bannerImage} alt="unsplash random" />
        </figure>
      </a>
    </div>
  );
}
