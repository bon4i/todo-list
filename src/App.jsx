import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { ListItem } from './components/list-item/list-item';
import { Header } from './components/header/header';
import { createTodo, readTodos, updateTodo, deleteTodo } from './api';
import { addTodoInTodos, setTodoInTodos, removeTodoInTodos, findTodo } from './utils';
import { NEW_TODO_ID } from './constants';
import { MainPage, TodoPage } from './pages';

export const App = () => {

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
