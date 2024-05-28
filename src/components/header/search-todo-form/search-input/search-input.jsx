import { useRef, useState } from 'react';
import { Button } from '../../../button/button';
import { debounce } from './utils';
import styles from './search-input.module.css';

export const SearchInput = ({onSearch}) => {
	const [value, setValue] = useState('');

	const debouncedOnSearch = useRef(debounce(onSearch, 1500)).current;

	const onChange = ({ target }) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onSearch(value);
	}
	return (
		<div onSubmit={onSubmit}>
			<input
				type="text"
				placeholder={'Поиск задачи'}
				className={styles['search-input']}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
