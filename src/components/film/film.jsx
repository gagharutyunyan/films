import React from 'react';

const Film = ({item}) => (
	<>
		{ item.map((film)=> (
			<div className="about" style={{backgroundImage: `url(${film.posterUrl})`}}> 
				<button className="btn play"></button>
				<div className="about-description">{film.description}</div>
			</div>
			)
		)}
	</>
)

export default Film;