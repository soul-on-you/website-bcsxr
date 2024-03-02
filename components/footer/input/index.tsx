import React from 'react';
import styles from './styles.module.scss';

const Input: React.FC = () => {
	return (
		<form action='#' method='post'>
			<div className={styles.inputContainer}>
				<input type='text' placeholder='YOUR MAIL' />
				<input type='submit' value='SEND' />
			</div>
		</form>
	);
};

export default Input;
