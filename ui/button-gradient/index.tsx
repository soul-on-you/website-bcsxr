// кнопка используется в navbar
import React from 'react';
import styles from './styles.module.scss';

interface IButtonGradientProps {
	children: React.ReactNode;
}

const ButtonGradient: React.FC<IButtonGradientProps> = ({ children }) => {
	return (
		<button className={styles.buttonContainer}>
			<span>{children}</span>
		</button>
	);
};

export default ButtonGradient;
