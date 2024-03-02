// кнопка используется в navbar
import React from 'react';
import styles from './styles.module.scss';
import IButtonGradientProps from './interface';

const ButtonGradient: React.FC<IButtonGradientProps> = ({ children }) => {
	return (
		<button className={styles.buttonContainer}>
			<span>{children}</span>
		</button>
	);
};

export default ButtonGradient;
