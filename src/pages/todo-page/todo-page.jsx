export const TodoPage = () => {
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

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
	};
	return (
		<div>Страница задачи</div>
	);
};
