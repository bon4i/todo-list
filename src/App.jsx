import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import { ListItem } from './components/list-item/list-item';
import { Header } from './components/header/header';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3003/todos')
			.then((todosData) => todosData.json())
			.then((loadedTodos) => setTodos(loadedTodos));
	}, [])

    return (
        <div className={styles.app}>
			<Header/>
			<main className={styles.main}>
					{todos.map(({id, title, completed}) => (
						<ListItem  key={id} title={title} completed={completed}/>
					))}
			</main>
		</div>
    );
};
