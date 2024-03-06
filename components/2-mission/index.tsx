'use client';

import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import HeadingLeft from '@/ui/headling-left';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Mission: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);
	return (
		<section className={styles.mission} id='mission'>
			<div className={styles.mission__container}>
				<HeadingLeft heading1='mission' textShadow='2px 2px 72px #E833EC' color='#E833EC'>
					New format of competitive sport <br /> where teams from different parts <br /> of the world compete
					against each other
				</HeadingLeft>
				<Image
					className={styles.backgroundImage}
					src='/2-mission/bg.webp'
					alt='mission bg image'
					width={2880 / 2}
					height={1120 / 2}
				/>
			</div>
		</section>
	);
};

// export default Mission;
export default React.memo(Mission);
