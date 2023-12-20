import React from 'react';
import ResultItem from './ResultItem';
import style from './ResultList.module.css';

const Result = () => {
	return (
		<ul className={style.resultList}>
			<ResultItem />
		</ul>
	);
};

export default Result;
