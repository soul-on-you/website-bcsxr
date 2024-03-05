'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from './arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Title from './title';

const Masthead: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const mastheadRef = useRef<HTMLDivElement | null>(null);
	const firstH1Ref = useRef<HTMLHeadingElement | null>(null);
	const secondH1Ref = useRef<HTMLHeadingElement | null>(null);
	const thirdH1Ref = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const pinContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (!pinContainerRef.current) {
			return;
		}
		// const endValue = `+=${pinContainerRef.current.offsetHeight}`;
		const endValue = `+=${pinContainerRef.current.offsetHeight * 2}`;

		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: pinContainerRef.current,
				start: '1% top',
				// end: '+=3000',
				end: () => endValue,
				scrub: true,
				pin: true,
				markers: true,
			},
			paused: true,
		});

		tl.current
			.fromTo(firstH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0 })
			.to(backgroundImageRef.current, { duration: 1, scale: 1.4, ease: 'none' }, '<')
			.fromTo(secondH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0 })
			.to(backgroundImageRef.current, { duration: 1, scale: 1, ease: 'none' }, '<')
			.fromTo(thirdH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0 })
			.fromTo(arrowRef.current, { opacity: 0, y: 500 }, { duration: 1, autoAlpha: 1, y: 0 }, '<');

		return () => {
			if (tl.current) {
				if (tl.current.scrollTrigger) {
					tl.current.scrollTrigger.kill();
				}
				tl.current.kill();
			}
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};

		// return () => {
		// 	if (tl.current) {
		// 		tl.current.kill();
		// 	}
		// 	ScrollTrigger.getAll().forEach((instance) => instance.kill());
		// };
	}, []);

	return (
		<div className={`lol ${styles.lol}`} ref={pinContainerRef}>
			<div className={styles.masthead} ref={mastheadRef}>
				<div className={styles.masthead__container}>
					<Title firstH1Ref={firstH1Ref} secondH1Ref={secondH1Ref} thirdH1Ref={thirdH1Ref} />
					<div className={`${styles.arrowDown} hide-on-mobile`} ref={arrowRef}>
						<ArrowDown />
					</div>

					<Image
						ref={backgroundImageRef}
						className={styles.backgroundImage}
						src='/1-masthead/bg.webp'
						alt='bg-image'
						width={2880 / 2}
						height={1600 / 2}
						priority={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
