import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const ArrowDown: React.FC = () => {
	return (
		<div className={styles.arrowContainer}>
			<Image src='/masthead/arrow.svg' alt='arrow' width={44 / 2} height={76 / 2} />
		</div>
	);
};

export default ArrowDown;
