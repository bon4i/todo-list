import styles from './add-todo-form.module.css';

export const AddTodoForm = () => {
	return (
		<form className={styles['add-todo-form']}>
			<input
				type="text"
				placeholder={'Введите название новой задачи'}
				className={styles['add-todo-input']}
			/>
			<input
				type="button"
				className={styles['add-todo-button']}
				value={'Add Todo'}
			/>
		</form>
	)
}
