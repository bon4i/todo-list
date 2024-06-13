import { Link } from 'react-router-dom';
import styles from './button.module.css';

export const Button = ({children, onClick}) => {
	return (
		<button className={styles['list-button']} onClick={onClick}>
			<Link to='/task:id'>{children}</Link>
		</button>
	)
}
