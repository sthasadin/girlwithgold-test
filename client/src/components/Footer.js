import React from 'react';

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<div className="footer__left-top">
					<ul className="footer__link-segment">
						<li className="footer__item footer__title">Recent Products</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								A Silver Ring
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								A Gold Necklace
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								An Orichalcum Wristband
							</a>
						</li>
					</ul>
					<ul className="footer__link-segment">
						<li className="footer__item footer__title">Recent Products</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								A Silver Ring
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								A Gold Necklace
							</a>
						</li>
						<li className="footer__item">
							<a href="#" className="footer__link">
								An Orichalcum Wristband
							</a>
						</li>
					</ul>
				</div>
				<div className="footer__left-bottom">
					<p> Get social with us on</p>
					<a href="#">
						{' '}
						<i className="fab fa-instagram fa-2x"></i>
					</a>
				</div>
			</div>
			<div className="footer__right">
				<div className="footer__right-top">
					<div className="footer__subscribe">
						<h1 className="footer__subscribe-title">Lorem Ipsum</h1>
						<p className="footer__subscribe-description">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
							eveniet?
						</p>
						<form className="footer__subscribe-form">
							<input
								type="Email"
								name="email"
								className="footer__subscribe-input form__input"
								placeholder="Email here"
								autoComplete="off"
							/>
							<button className="btn btn__anim-border footer__subscribe-button">
								Subscribe
							</button>
						</form>
					</div>
				</div>
				<div className="footer__right-bottom">
					<div className="footer__copyright">&copy; 2021 GirlWithGold</div>
				</div>
			</div>
		</div>
	);
}
