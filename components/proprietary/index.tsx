'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const Proprietary: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const span = new SplitType(textRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});

		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top 95%',
				toggleActions: 'play none resume reset',
			},
		});

		tl.current.fromTo(
			headingRef.current,
			{ autoAlpha: 0, y: 64 },
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
		<section className={styles.proprietary} id='lab'>
			<div className={styles.proprietary__container}>
				<div className={styles.headline}>
					<div ref={headingRef}>
						<h2>proprietary xr-lab</h2>
						<h2>proprietary xr-lab</h2>
					</div>
					<h5 ref={textRef}>
						We are creating our own laboratory, which will be used to develop and test the best VR
						equipment.
					</h5>
				</div>
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
