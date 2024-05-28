import { SearchTodoForm } from './search-todo-form/search-todo-form';
import { Title } from './title/title';
import styles from './header.module.css';

export const Header = ({onTodoAdd, onSearch, onSorting}) => {

	return (
		<header className={styles.header}>
			<Title />
			<SearchTodoForm
				onSearch={onSearch}
				onSorting={onSorting}
				onTodoAdd={onTodoAdd}
			/>
		</header>
	)
}
