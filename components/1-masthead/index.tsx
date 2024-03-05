'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from './arrow-down';
import gsap from 'gsap';
import Title from './title';

const Masthead: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const mastheadRef = useRef<HTMLDivElement | null>(null);
	const firstH1Ref = useRef<HTMLHeadingElement | null>(null);
	const secondH1Ref = useRef<HTMLHeadingElement | null>(null);
	const thirdH1Ref = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: mastheadRef.current,
				start: '1% top',
				end: '+=3000px',
				scrub: 1,
				pin: true,
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
		};
	}, []);

	return (
		<section className={styles.masthead} ref={mastheadRef}>
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
		</section>
	);
};

export default Masthead;
