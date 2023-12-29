import React from 'react';
import style from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
	const submitHandler = e => {
		e.preventDefault();
		const text = e.target.search.value;
		onSubmit(text);
		e.target.search.value = '';
	};

	return (
		<form onSubmit={submitHandler} className={style.searchForm}>
			<input id='search' type='text' className={style.searchInput} />
			<button className={style.searchBtn}>Search</button>
		</form>
	);
};

export default SearchForm;
