// кнопка используется в navbar
import React from 'react';
import styles from './styles.module.scss';
import IButtonGradientProps from './interface';
import Link from 'next/link';

const ButtonGradient: React.FC<IButtonGradientProps> = ({ children }) => {
	return (
		<Link href='#footer' className={styles.buttonContainer}>
			<span>{children}</span>
		</Link>
	);
};

// export default React.memo(ButtonGradient);
export default ButtonGradient;
