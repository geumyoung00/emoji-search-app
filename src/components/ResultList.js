import React from 'react';
import ResultItem from './ResultItem';
import style from './ResultList.module.css';

const ResultList = ({ resultList }) => {
	return (
		<ul className={style.resultList}>
			{resultList.map(item => (
				<ResultItem title={item.title} symbol={item.symbol} key={item.title} />
			))}
		</ul>
	);
};

export default ResultList;
