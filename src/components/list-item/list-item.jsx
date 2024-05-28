import { Button } from '../button/button';
import { Checkbox } from '../checkbox/checkbox';
import styles from './list-item.module.css';

export const ListItem = ({
	title,
	completed,
	onCompletedChange,
	isEditing,
	onEdit,
	onTitleChange,
	onSave,
	onRemove
}) => {

	return (
		<div className={styles.list}>
			<div className={styles.title}>
				{isEditing ? (
						<input
							className={styles['input-edit']}
							type='text'
							value={title}
							onChange={({ target }) => onTitleChange(target.value)}
							maxLength={70}
						/>
					) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<Checkbox
				className={styles['completed-flag']}
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>Save</Button>
				) : (
					<Button onClick={onRemove}>Delete</Button>
				)}
			</div>
		</div>
	)
}
