import { CompletedFlag } from './completed-flag/completed-flag';
import styles from './list-item.module.css';
import { useState } from 'react';
import { ListButton } from './list-button/list-button';
import {updateTodo, deleteTodo} from '../../api/api';

export const ListItem = ({id, title, completed}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewtitle] = useState(title);

	const onTodoTitleChange = ({ target }) => {
		setNewtitle(target.value);
	}

	const onTodoEdit = () => {
		setIsEditing(true);
	};

	const onTodoSave = () => {
		setIsEditing(false);
		updateTodo({id, title: newTitle});
	};

	const onTodoRemove = () => {
		deleteTodo(id);
	};

	return (
		<div className={styles.list}>
			<p className={styles.title}>
				{isEditing ? (
						<input type='text' value={newTitle}
						onChange={onTodoTitleChange}
						/>
					) : <div onClick={onTodoEdit}></div>}
			</p>
			<CompletedFlag completed={completed}/>
			<div>
				{isEditing ? (
					<ListButton onClick={onTodoRemove}>Save</ListButton>
				) : (
					<ListButton onClick={onTodoSave}>Edit</ListButton>
				)}
			</div>
		</div>
	)
}
