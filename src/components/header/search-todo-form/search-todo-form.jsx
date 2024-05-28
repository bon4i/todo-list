import { Button } from '../../button/button';
import { SearchInput } from './search-input/search-input';
import styles from './search-todo-form.module.css';
import { Sorting } from './sorting/sorting';

export const SearchTodoForm = ({
	onTodoAdd,
	onSearch,
	onSorting
}) => {
	return (
		<div className={styles['search-form']}>
			<SearchInput onSearch={onSearch}/>
			<Sorting onSorting={onSorting}/>
			<Button onClick={onTodoAdd}>✚</Button>
		</div>
	);
};
