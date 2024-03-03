//стрелка на главном экране
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const ArrowDown: React.FC = () => {
	return (
		<div className={styles.arrowContainer}>
			<Link href='#mission'>
				<Image src='/masthead/arrow.svg' alt='arrow' width={44 / 2} height={76 / 2} />
			</Link>
		</div>
	);
};

export default ArrowDown;
