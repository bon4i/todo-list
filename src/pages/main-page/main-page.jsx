import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {readTodos, updateTodo} from '../../api/api';
import { setTodoInTodos} from './../../utils';
import { Title } from "./title/title";
import { SearchTodoForm } from "./search-todo-form/search-todo-form";
import { Button, Header, ListItem } from "../../components";
import styles from './main-page.module.css';


export const MainPage = () => {
	const [todos, setTodos] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setAlphabetSorting] = useState(false);

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({id, completed: newCompleted}).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [searchPhrase, isAlphabetSorting]);

	return (
        <>
			<Header>
				<Title />
				<SearchTodoForm
					onSearch={setSearchPhrase}
					onSorting={setAlphabetSorting}
				/>
				<Button><Link to='/task'></Link></Button>
			</Header>
			<main className={styles['main-page']}>
					{todos.map(({id, title, completed, isEditing = false}) => (
						<ListItem
							key={id}
							id={id}
							title={title}
							completed={completed}
							isEditing={isEditing}
							onEdit={() => onTodoEdit(id)}
							onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
							onCompletedChange={(newCompleted) =>
								onTodoCompletedChange(id, newCompleted)}
							onSave={() => onTodoSave(id)}
							onRemove={() => onTodoRemove(id)}
						/>
					))}
			</main>
		</>
    );
};
