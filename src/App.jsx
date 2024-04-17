import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import { Task } from './components/Task';

export const App = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const URL_TASKS = 'https://jsonplaceholder.typicode.com/todos'

	const requestAddTasks = () => {
		fetch(URL_TASKS, {
			method: 'GET',
		})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			setTasks([...tasks, response]);
			if (response.ok) {
				console.log('Задачи загружены, ответ сервера: ', response);
			} else {
				throw new Error('Ошибка загрузки задач');
			}
		})
		.catch((error) => {
			console.error(error)
		})
	}
    return (
        <div className={styles.app}>
			<header className={styles.header}>
				<h1>To-do list step 1</h1>
			</header>
			<button onClick={requestAddTasks}>Загрузить список</button>
			<main className={styles.main}>
				{isLoading ? (
					<div>Загрузка</div>
				) : (
					<Task tasks={tasks}/>
				)
			}
			</main>
		</div>
    );
};
