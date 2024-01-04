import style from './SearchForm.module.css';

const SearchForm = ({ onSubmit }: { onSubmit: (text: string) => void }) => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as HTMLInputElement;
		const text = target.value;
		onSubmit(text);
		target.value = '';
	};

	return (
		<form onSubmit={submitHandler} className={style.searchForm}>
			<input id='search' type='text' className={style.searchInput} />
			<button className={style.searchBtn}>Search</button>
		</form>
	);
};

export default SearchForm;
