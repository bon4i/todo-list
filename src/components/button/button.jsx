import styles from './button.module.css';

export const Button = ({children, onClick}) => {
	return (
		<button className={styles['list-button']} onClick={onClick}>
			{children}
		</button>
	)
}
