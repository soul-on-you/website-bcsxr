'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const Mission: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const span = new SplitType(textRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});

		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top 95%',
				toggleActions: 'play none none reset',
			},
		});

		tl.current.fromTo(
			headingRef.current,
			{ autoAlpha: 0, y: 56 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
			},
		);

		tl.current.fromTo(
			span.chars,
			{ autoAlpha: 0, y: 32 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				stagger: 0.03,
				ease: 'power2.out',
			},
			'<',
		);

		return () => {
			tl.current?.kill();
		};
	}, []);

	return (
		<section className={styles.mission} id='mission'>
			<div className={styles.mission__container}>
				<div className={styles.headline}>
					<div ref={headingRef}>
						<h2>mission</h2>
						<h2>mission</h2>
					</div>
					<h5 ref={textRef}>
						New format of competitive sport where teams from different parts of the world compete against
						each other
					</h5>
				</div>
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
