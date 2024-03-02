'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const OurDivision: React.FC = () => {
	const headingRef = useRef(null);
	const largeBlockRef = useRef(null);
	const bottomBlock1Ref = useRef(null);
	const bottomBlock2Ref = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Анимация для заголовка
		gsap.fromTo(
			headingRef.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: headingRef.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);

		// Анимация для largeBlock
		gsap.fromTo(
			largeBlockRef.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: largeBlockRef.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);

		// Анимация для первого bottomBlock
		gsap.fromTo(
			bottomBlock1Ref.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 1.0,
				scrollTrigger: {
					trigger: bottomBlock1Ref.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);

		// Анимация для второго bottomBlock
		gsap.fromTo(
			bottomBlock2Ref.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 1.5,
				scrollTrigger: {
					trigger: bottomBlock2Ref.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);
	}, []);

	return (
		<section className={styles.ourDivision}>
			<div className={styles.ourDivision__container}>
				<div className={styles.heading} ref={headingRef}>
					<h2>Our Division</h2>
					<h5>We are part of blockchain sports ecosystem</h5>
				</div>
				<div className={styles.container}>
					<div className={styles.largeBlock} ref={largeBlockRef}>
						<Image src='/our-division/1.png' alt='orrd' width={900 / 2} height={222 / 2} />
					</div>
					<div className={styles.bottomBlocks} ref={bottomBlock1Ref}>
						<Image src='/our-division/2.png' alt='orrd' width={710 / 2} height={200 / 2} />
					</div>
					<div className={styles.bottomBlocks} ref={bottomBlock2Ref}>
						<Image src='/our-division/3.png' alt='orrd' width={710 / 2} height={200 / 2} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurDivision;
