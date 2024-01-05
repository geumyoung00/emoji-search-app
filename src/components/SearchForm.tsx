import style from './SearchForm.module.css';

const SearchForm = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const target = e.target as HTMLFormElement;
		const { value } = target.search;
		onSubmit(value);
		// target.search.value = '';
		target.reset();
	};

	return (
		<form onSubmit={submitHandler} className={style.searchForm}>
			<input id='search' type='text' className={style.searchInput} />
			<button className={style.searchBtn}>Search</button>
		</form>
	);
};

export default SearchForm;
