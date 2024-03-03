'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import HeadingLeft from '@/ui/headling-left';

const Proprietary: React.FC = () => {
	return (
		<section className={styles.proprietary} id='lab'>
			<div className={styles.proprietary__container}>
				<HeadingLeft heading1='proprietary xr-lab' heading2='proprietary xr-lab' color='#2DE8E8'>
					We are creating our own laboratory, which will be used <br />
					to develop and test the best VR equipment.
				</HeadingLeft>
				<Image
					className={styles.backgroundImage}
					src='/proprietary/bg.webp'
					alt='bg-image'
					width={2880 / 2}
					height={1648 / 2}
				/>
			</div>
		</section>
	);
};

export default Proprietary;
