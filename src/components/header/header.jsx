import React, {useState} from 'react';
import { data } from '../header/slider-data';
import './header.css';

const Header = () => {
		const [filmsData,setFilmsData] = useState(0);
		const right = () => filmsData < data.length-1 ? setFilmsData(filmsData+1): null
		const left = () => filmsData > 0 ? setFilmsData(filmsData-1): null			
	return (
	<header>
		<div className="slider">
		<div className="slider-wrapper" style={{'transform': `translateX(-${filmsData*(100/data.length)}%)`}}>
			{data.map((film)=> (
					<div className="slide" key={film.id} style={{backgroundImage: `url(${film.bgUrl})`}}>
						<div className="about" style={{backgroundImage: `url(${film.posterUrl})`}}> 
							<div className="btn play"></div>
							<div className="about-description">{film.description}</div>
						</div>
						<div className="toogle">
							<div className="btns">
								<div className="btn toogle-left" onClick={()=> left()}></div>
								<div className="btn play"></div>
								<div className="btn toogle-right" onClick={()=> right()}></div>
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