'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import HeadingLeft from '@/ui/headling-left';

const Mission: React.FC = () => {
	return (
		<section className={styles.mission} id='mission'>
			<div className={styles.mission__container}>
				<HeadingLeft heading1='mission' heading2='mission' color='#E833EC'>
					New format of competitive sport <br /> where teams from different parts <br /> of the world compete
					against each other
				</HeadingLeft>
				<Image
					className={styles.backgroundImage}
					src='/mission/bg.webp'
					alt='bg-image'
					width={2880 / 2}
					height={1120 / 2}
				/>
			</div>
		</section>
	);
};

export default Mission;
