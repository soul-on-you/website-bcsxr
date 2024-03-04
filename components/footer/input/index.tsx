import React from 'react';
import styles from './styles.module.scss';
import ButtonGradient from '@/ui/button-gradient';

const Input: React.FC = () => {
	return (
		<>
			<form className={`${styles.inputContainer} ${styles.cf}`}>
				<input type='text' placeholder='YOUR MAIL' required style={{ boxShadow: 'none' }} />
				<button type='submit'>
					<ButtonGradient>send</ButtonGradient>
				</button>
			</form>
		</>
	);
};

export default Input;
