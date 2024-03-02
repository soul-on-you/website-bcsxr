'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const Mission: React.FC = () => {
	const headingRef = useRef(null);
	const subheadingRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			headingRef.current,
			{ autoAlpha: 0, y: 40 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: headingRef.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
					// markers: true,
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
					// markers: true,
				},
			},
		);
	}, []);

	const tl = useRef<gsap.core.Timeline | null>(null);
	const mm = gsap.matchMedia();

	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		mm.add('(min-width: 769px)', () => {
			const span = new SplitType(textRef.current!, {
				types: 'chars',
				lineClass: 'lineParent',
			});

			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: textRef.current,
					start: 'top bottom-=120px',
					toggleActions: 'play none none none',
				},
			});

			tl.current.fromTo(
				span.chars,
				{ y: 8, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.03,
					ease: 'power3.out',
				},
			);
		});

		return () => {
			tl.current?.kill();
		};
	}, []);

	return (
		<section className={styles.mission} id='mission'>
			<div className={styles.mission__container}>
				<h2 ref={headingRef}>MISSION</h2>
				<h5 ref={textRef}>
					New format of competitive sport where teams from different parts of the world compete against each
					other
				</h5>
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
