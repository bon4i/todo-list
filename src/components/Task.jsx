import styles from './Task.module.css';


export const Task = ({tasks}) => {
	<div>
		{tasks.map(({id, title}) => (
			<div key={id}>{title}</div>
		))}
	</div>
}
