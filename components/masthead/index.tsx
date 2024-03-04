'use client';

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from '@/ui/arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const Masthead: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const mastheadRef = useRef<HTMLDivElement | null>(null);
	const firstSpanRef = useRef<HTMLHeadingElement | null>(null);
	const secondSpanRef = useRef<HTMLHeadingElement | null>(null);
	const thirdSpanRef = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (
			mastheadRef.current &&
			firstSpanRef.current &&
			secondSpanRef.current &&
			thirdSpanRef.current &&
			arrowRef.current &&
			backgroundImageRef.current
		) {
			tl.current = gsap.timeline({
				scrollTrigger: {
					trigger: mastheadRef.current,
					start: 'top top',
					end: '+=3000',
					scrub: 0.4,
					pin: true,
				},
			});

			tl.current
				.fromTo(firstSpanRef.current, { y: -500 }, { autoAlpha: 1, y: 0 })
				.to(backgroundImageRef.current, { scale: 1.4, ease: 'none' }, '<')
				.fromTo(secondSpanRef.current, { y: -500 }, { autoAlpha: 1, y: 0 })
				.to(backgroundImageRef.current, { scale: 1, ease: 'none' }, '<')
				.fromTo(thirdSpanRef.current, { y: -500 }, { autoAlpha: 1, y: 0 })
				.fromTo(arrowRef.current, { opacity: 0, y: 500 }, { autoAlpha: 1, y: 0 }, '<');

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
					<h1 ref={firstSpanRef}>
						<span>new format</span>
						<span>new format</span>
					</h1>
					<br />
					<h1 ref={secondSpanRef}>
						<span>of competitive</span>
						<span>of competitive</span>
					</h1>
					<br />
					<h1 ref={thirdSpanRef}>
						<span>sport</span>
						<span>sport</span>
					</h1>
				</div>
				<div className={`${styles.arrowDown} hide-on-mobile`} ref={arrowRef}>
					<ArrowDown />
				</div>
				<Image
					ref={backgroundImageRef}
					className={styles.backgroundImage}
					src='/masthead/bg-best.jpg'
					alt='bg-image'
					width={2880 / 2}
					height={1120 / 2}
				/>
			</div>
		</section>
	);
};

export default Masthead;
