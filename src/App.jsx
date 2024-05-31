import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route} from './react-router-dom';
import { ListItem } from './components/list-item/list-item';
import { Header } from './components/header/header';
import { createTodo, readTodos, updateTodo, deleteTodo } from './api';
import { addTodoInTodos, setTodoInTodos, removeTodoInTodos, findTodo } from './utils';
import { NEW_TODO_ID } from './constants';
import { MainPage, TodoPage } from './pages';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isAlphabetSorting, setAlphabetSorting] = useState(false);

	const onTodoAdd = () => {
		setTodos(addTodoInTodos(todos));
	};

	const onTodoSave = (todoID) => {
		const { title, completed } = findTodo(todos, todoID) || {};

		if (todoID === NEW_TODO_ID) {
			createTodo({ title, completed}).then(( todo ) => {
				let updatedTodos = setTodoInTodos(todos, {
					id: NEW_TODO_ID,
					isEditing: false
			});
			updatedTodos = removeTodoInTodos(updatedTodos, NEW_TODO_ID);
			updatedTodos = addTodoInTodos(updatedTodos, todo);
			setTodos(updatedTodos);
		});
		} else {
			updateTodo({ id: todoID, title }).then(() => {
				setTodos(setTodoInTodos(todos, { id: todoID, isEditing: false }));
			});
		}
	};

	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({id, completed: newCompleted}).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
	};

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos),
		);
	}, [searchPhrase, isAlphabetSorting]);

	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/' element={<MainPage />}/>
				<Route path='/task/:id' element={<TodoPage />}/>
			</Routes>
		</div>
	)

    return (
        <div className={styles.app}>
			<Header
				onTodoAdd={onTodoAdd}
				onSearch={setSearchPhrase}
				onSorting={setAlphabetSorting}
			/>
			<main className={styles.main}>
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
		</div>
    );
};
