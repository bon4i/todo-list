import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import { ListItem } from './components/list-item/list-item';
import { Header } from './components/header/header';
import { readTodos } from './api';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		readTodos().then((loadedTodos) => setTodos(loadedTodos));
	})

    return (
        <div className={styles.app}>
			<Header/>
			<main className={styles.main}>
					{todos.map(({id, title, completed}) => (
						<ListItem  key={id} id={id} title={title} completed={completed}/>
					))}
			</main>
		</div>
    );
};
