import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import './films.css';
import Film from '../film/film';
import CategoryTitle from '../category-title/category-title'
import { data } from '../films/films-data';


const Films = () => {
	const [filmsData] = useState({data});
	return (
		<section className="films-wrapper">

				{
					filmsData.data.map((categories) => {
						return (
							<>
								<Route exact path={categories.routeName} render={()=><CategoryTitle title={categories.categoryName} />} />
								<div className="films">
									<Route exact path='/' render={()=> <Film item={categories.items} />} />
									<Route exact path={categories.routeName} render={()=><Film item={categories.items} />} />
								</div>
							</>
						)
					})
				}

		</section>
	)
}


export default Films;