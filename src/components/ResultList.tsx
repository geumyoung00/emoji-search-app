import React from 'react';
import ResultItem from './ResultItem';
import style from './ResultList.module.css';
import { Emoji } from '../types/type';

const ResultList = ({ resultList }: { resultList: Emoji[] }) => {
	return (
		<ul className={style.resultList}>
			{resultList.map(item => (
				<ResultItem title={item.title} symbol={item.symbol} key={item.title} />
			))}
		</ul>
	);
};

export default ResultList;
