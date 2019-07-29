import React, { useState } from 'react';
import { data } from '../header/slider-data';
import './header.css';

const Header = () => {
		const [filmsData] = useState({data});
		const [countSlide,setCountSlide] = useState(0);
		const right = () => countSlide < filmsData.data.length-1 ? setCountSlide(countSlide+1): setCountSlide(0);
		const left = () => countSlide > 0 ? setCountSlide(countSlide-1): setCountSlide(filmsData.data.length-1);		
	return (
	<header>
		<div className="slider">
		<div className="slider-wrapper" style={{'transform': `translateX(-${countSlide*(100/filmsData.data.length)}%)`}}>
			{filmsData.data.map((film)=> (
					<div className="slide" key={film.id} style={{backgroundImage: `url(${film.bgUrl})`}}>
						<div className="about" style={{backgroundImage: `url(${film.posterUrl})`}}> 
							<button className="btn play"></button>
							<div className="about-description">{film.description}</div>
						</div>
						<div className="toogle">
							<div className="btns">
								<button className="btn toogle-left" onClick={()=> left()}></button>
								<button className="btn play"></button>
								<button className="btn toogle-right" onClick={()=> right()}></button>
							</div>
							<div className="toogle-description">{film.description}</div>
						</div>
					</div>
				)
			)}
		</div>
		</div>
	</header>
	)
}

export default Header;