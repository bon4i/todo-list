import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
const URL_TASKS = 'https://jsonplaceholder.typicode.com/todos';

export const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch(URL_TASKS)
			.then((response) => {
				return response.json();
			}).then((data) => {
				setTasks(data);
			})
	}, []);

    return (
        <div className={styles.app}>
			<header className={styles.header}>
				<h1 className={styles.title}>To-do list</h1>
			</header>
			<main className={styles.main}>
				{tasks.map((tasks) => {
					return <li key={tasks.id} className={styles.list}>{tasks.title}</li>
				})}
			</main>
		</div>
    );
};
