import React from 'react';
import { data } from '../films/films-data';
import { NavLink } from 'react-router-dom';
import './categories.css';

const Categories = () => (
	<section className='categories'>
		<h3>Категории фильмов</h3>
		<ul className='categories-menu'>
			{
				data.map((category) => <li><NavLink exact to={category.routeName}>{category.categoryName}</NavLink></li>)
			}
		</ul>
	</section>
)

export default Categories;