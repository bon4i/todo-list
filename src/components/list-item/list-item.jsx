
import { DeleteListButton } from './delete-list-button/delete-list-button';
import { EditListButton } from './edit-list-button/edit-list-button';
import { CompletedFlag } from './completed-flag/completed-flag';
import styles from './list-item.module.css';

export const ListItem = ({title, completed}) => {
	return (
		<div className={styles.list}>
			{title}
			<CompletedFlag completed={completed}/>
			<EditListButton />
			<DeleteListButton />
		</div>
	)
}
