import styles from './completed-flag.module.css';

export const CompletedFlag = (completed) => {
	return (
		<div>
			<input
				type='checkbox'
				checked={completed}
				readOnly
				className={styles['completed-flag']}
			/>
		</div>
	)
}
