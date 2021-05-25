import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Nav() {
  let history = useHistory();

  function gotoLink(e, link) {
    e.preventDefault();
    history.push(link);
  }

  return (
    <div className="nav">
      <div className="nav__promotion">
        <p>Free shipping on order over $10.</p>
      </div>
      <h1 className="nav__title">
        <a href="/" onClick={(e) => gotoLink(e, '/')}>
          GirlWithGold
        </a>
      </h1>
      <input type="checkbox" className="nav__checkbox" id="nav__toggle" />
      <label htmlFor="nav__toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
      <ul className="nav-menu">
        <li className="nav-menu__item">
          <a className="nav-menu__link" href="#">
            New in
          </a>
          <ul className="nav-menu__inner-menu">
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Shop
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Top trending
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
          </ul>
        </li>
        <li className="nav-menu__item">
          <a className="nav-menu__link" href="#">
            Offers
          </a>
          <ul className="nav-menu__inner-menu">
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Shop
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Top trending
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
          </ul>
        </li>
        <li className="nav-menu__item">
          <a className="nav-menu__link" href="#">
            Earrings
          </a>
          <ul className="nav-menu__inner-menu">
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Shop
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Top trending
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
          </ul>
        </li>
        <li className="nav-menu__item">
          <a className="nav-menu__link" href="#">
            Necklaces
          </a>
          <ul className="nav-menu__inner-menu">
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Shop
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Top trending
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
          </ul>
        </li>
        <li className="nav-menu__item">
          <a className="nav-menu__link" href="#">
            Wrist & Ring
          </a>
          <ul className="nav-menu__inner-menu">
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Shop
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
            <div className="nav-menu__inner-menu__section">
              <li
                className="nav-menu__inner-menu__item inner-title"
                onClick={(e) => gotoLink(e, '/product')}
              >
                <a href="#" className="nav-menu__inner-menu__link">
                  {' '}
                  Top trending
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Golden Earring
                </a>
              </li>
              <li className="nav-menu__inner-menu__item">
                <a
                  href="#"
                  className="nav-menu__inner-menu__link"
                  onClick={(e) => gotoLink(e, '/product')}
                >
                  {' '}
                  Bronze Earring
                </a>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
}
