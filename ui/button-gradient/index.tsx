// кнопка используется в navbar
import React from 'react';
import styles from './styles.module.scss';
import IButtonGradientProps from './interface';
import Link from 'next/link';

const ButtonGradient: React.FC<IButtonGradientProps> = ({ children }) => {
	return (
		<button className={styles.buttonContainer}>
			<Link href='#footer'>
				<span>{children}</span>
			</Link>
		</button>
	);
};

export default ButtonGradient;
