import React, { useState } from 'react';
import style from './ResultItem.module.css';

const ResultItem = ({ title, symbol }) => {
	const [isCopied, setIsCopied] = useState(false);
	const [isMouseOver, setIsMouseOver] = useState(false);

	const hoverHandler = e => {
		setIsMouseOver(true);
	};

	const outHandler = () => {
		setIsMouseOver(false);
	};

	const copyHandler = e => {
		navigator.clipboard.writeText(symbol);
		setIsCopied(true);
		function timmer() {
			setIsMouseOver(false);
		}
		setTimeout(timmer, 1000);
	};

	return (
		<li
			onClick={copyHandler}
			onMouseOver={hoverHandler}
			onMouseOut={outHandler}
			className={style.listItem}
		>
			<div className={`${style.tooltip} ${isMouseOver ? style.show : null}`}>
				{isCopied ? 'Copied!' : 'Click to copy'}
			</div>
			<span>{symbol}</span>
			{title}
		</li>
	);
};

export default ResultItem;
