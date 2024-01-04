import React, { useState } from 'react';
import style from './ResultItem.module.css';

const ResultItem = ({ title, symbol }: { title: string; symbol: string }) => {
	const [isCopied, setIsCopied] = useState(false);
	const [isMouseOver, setIsMouseOver] = useState(false);

	const toggle = () => {
		setIsMouseOver(prev => !prev);
	};

	const copyHandler = () => {
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
			onMouseOver={toggle}
			onMouseOut={toggle}
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
