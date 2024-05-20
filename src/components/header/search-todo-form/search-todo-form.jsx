import styles from './search-todo-form.module.css';

export const SearchTodoForm = ({...props}) => {
	return (
		<form className={styles['search-form']}>
			<div>
			<input
				type="text"
				placeholder={'Поиск задачи'}
				className={styles['search-input']}
				value={props.searchPhrase}
				onChange={props.onSearchPhraseChange}
			/>
			<input
				className={['sorting-button']}
				type='checkbox'
				checked={props.isSortingEnabled}
				onChange={props.onSortingChange}
			/>
			<input
				type="button"
				className={styles['search-todo-button']}
				value={'Search'}
			/>
			</div>
		</form>
	)
}
