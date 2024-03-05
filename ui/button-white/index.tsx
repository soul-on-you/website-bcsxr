// кнопка используется в footer
import React from 'react';
import styles from './styles.module.scss';
import IButtonWhiteProps from './interface';
import Link from 'next/link';

const ButtonWhite: React.FC<IButtonWhiteProps> = ({ children }) => {
	return (
		<Link href='#footer' className={styles.buttonContainer}>
			<span>{children}</span>
		</Link>
	);
};

export default ButtonWhite;
