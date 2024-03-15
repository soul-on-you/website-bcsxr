import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import IButtonProps from './interface';

const Button: React.FC<IButtonProps> = ({ children }) => {
	return (
		<>
			<Link href='https://t.me/DorsigalVR' className={styles.buttonContainer}>
				<span>{children}</span>
			</Link>
		</>
	);
};

export default Button;
