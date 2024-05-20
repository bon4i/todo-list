import { AddTodoForm } from './add-todo-form/add-todo-form';
import { SearchTodoForm } from './search-todo-form/search-todo-form';
import styles from './header.module.css';
import { useState } from 'react';

export const Header = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isSortingEnabled, setIsSortingEnabled] = useState(false);

	const onSearchPhraseChange = ({ target }) => {
		setSearchPhrase(target.value)
	}

	const onSortingChange = ({ target }) => {
		setIsSortingEnabled(target.checked)
	}

	const onTodoAdd = () => {
		
	};

	return (
		<header className={styles.header}>
			<h1 className={styles['header-title']}>
				to-do list
			</h1>
			<SearchTodoForm
				searchPhrase={searchPhrase}
				isSortingEnabled={isSortingEnabled}
				onSearchPhraseChange={onSearchPhraseChange}
				onSortingChange={onSortingChange}
			/>
			<AddTodoForm />
		</header>
	)
}
