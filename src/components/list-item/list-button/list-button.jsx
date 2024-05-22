import styles from './list-button.module.css';

export const ListButton = ({children, onClick}) => {
	return (
		<button className={styles['list-button']} onClick={onClick}>
			{children}
		</button>
	)
}
