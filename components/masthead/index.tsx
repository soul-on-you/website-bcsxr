'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from '@/ui/arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Masthead: React.FC = () => {
	const mastheadRef = useRef(null);
	const firstLineRef = useRef(null);
	const secondLineRef = useRef(null);
	const thirdLineRef = useRef(null);
	const fourthLineRef = useRef(null);
	const backgroundImageRef = useRef(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (mastheadRef.current) {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: mastheadRef.current,
					start: 'top top',
					end: '+=100',
					//end: '+=3000' ВОТ ТУТ ОШИБКА БЫЛА
					scrub: 0.4,
					pin: true,
					// markers: true,
				},
			});

			tl.current
				.fromTo(
					firstLineRef.current,
					{
						y: -500,
					},
					{
						autoAlpha: 1,
						y: 0,
					},
				)
				.to(backgroundImageRef.current, { scale: 1.7, ease: 'none' }, '<')
				.fromTo(
					secondLineRef.current,
					{
						y: -500,
					},
					{
						autoAlpha: 1,
						y: 0,
					},
				)
				.to(backgroundImageRef.current, { scale: 1, ease: 'none' }, '<')

				.fromTo(
					thirdLineRef.current,
					{
						y: -500,
					},
					{
						autoAlpha: 1,
						y: 0,
					},
				)

				.fromTo(
					fourthLineRef.current,
					{
						opacity: 0,
						y: 500,
					},
					{
						autoAlpha: 1,
						y: 0,
					},
					'<',
				);

			return () => {
				if (tl.current) {
					if (tl.current.scrollTrigger) {
						tl.current.scrollTrigger.kill();
					}
					tl.current.kill();
				}
			};
		}
	}, []);

	return (
		<section className={styles.masthead} ref={mastheadRef}>
			<div className={styles.masthead__container}>
				<div className={styles.title}>
					<h1 ref={firstLineRef}>
						<span>new format</span>
						<span>new format</span>
					</h1>
					<br />
					<h1 ref={secondLineRef}>
						<span>of competitive</span>
						<span>of competitive</span>
					</h1>
					<br />
					<h1 ref={thirdLineRef}>
						<span>sport</span>
						<span>sport</span>
					</h1>
				</div>
				<div className={`${styles.arrowDown} hide-on-mobile`} ref={fourthLineRef}>
					<ArrowDown />
				</div>
				<Image
					ref={backgroundImageRef}
					className={styles.backgroundImage}
					src='/masthead/bg.webp'
					alt='bg-image'
					width={2880 / 2}
					height={1120 / 2}
				/>
			</div>
		</section>
	);
};

export default Masthead;
