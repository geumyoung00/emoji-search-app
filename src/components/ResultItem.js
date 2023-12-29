import React from 'react';
import style from './ResultItem.module.css';

const ResultItem = ({ title, symbol }) => {
	const copyHandler = () => {
		navigator.clipboard.writeText(symbol);
	};
	return (
		<li onClick={copyHandler} className={style.listItem}>
			<span>{symbol}</span>
			{title}
		</li>
	);
};

export default ResultItem;
