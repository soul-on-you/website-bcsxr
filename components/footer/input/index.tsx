import React from 'react';
import styles from './styles.module.scss';
import ButtonWhite from '@/ui/button-white';

const Input: React.FC = () => {
	return (
		<>
			<form className={`${styles.inputContainer}`}>
				<input type='text' placeholder='YOUR MAIL' required style={{ boxShadow: 'none' }} />
				<button type='submit'>
					<ButtonWhite>send</ButtonWhite>
				</button>
			</form>
		</>
	);
};

export default Input;
