import React from 'react';
import style from './SearchForm.module.css';

const SearchForm = () => {
	return (
		<form className={style.searchForm}>
			<input type='text' className={style.searchInput} />
			<button className={style.searchBtn}>Search</button>
		</form>
	);
};

export default SearchForm;
