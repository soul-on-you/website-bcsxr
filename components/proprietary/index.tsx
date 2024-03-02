'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Proprietary: React.FC = () => {
	const headingRef = useRef(null);
	const subheadingRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			headingRef.current,
			{ autoAlpha: 0, y: 30 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: headingRef.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
					markers: true,
				},
			},
		);

		gsap.fromTo(
			subheadingRef.current,
			{ autoAlpha: 0, y: 30 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				delay: 0.5, // Добавляем задержку, чтобы подзаголовок появился после заголовка
				scrollTrigger: {
					trigger: subheadingRef.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
					markers: true,
				},
			},
		);
	}, []);
	return (
		<section className={styles.proprietary} id='lab'>
			<div className={styles.proprietary__container}>
				<h2 ref={headingRef}> proprietary xr-lab</h2>
				<h5 ref={subheadingRef}>
					We are creating our own laboratory, which will be used to develop and test the best VR equipment.
				</h5>
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
