'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Images from './images';
import Items from './items';
import gsap from 'gsap';

const XRSuits: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top 98%',
				toggleActions: 'play none resume reset',
			},
		});

		tl.current.fromTo(
			headingRef.current,
			{ autoAlpha: 0, y: 64 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1.4,
				ease: 'power3.out',
			},
		);

		tl.current.fromTo(
			textRef.current,
			{ autoAlpha: 0, y: 64 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1.6,
				ease: 'power3.out',
			},
			'<',
		);

		return () => {
			tl.current?.kill();
		};
	}, []);

	return (
		<section className={styles.xrsuits} id='suit'>
			<div className={styles.xrsuits__container}>
				<div className={styles.headline}>
					<div ref={headingRef}>
						<h2>
							<span>xr</span>
							<span>suits</span>
						</h2>
						<h2>
							<span>xr</span>
							<span>suits</span>
						</h2>
					</div>
					<h5 ref={textRef}>
						Suit of our own design <br /> With haptic feedback & biometric reading
					</h5>
				</div>
				<Images />
				<Items />
			</div>
		</section>
	);
};

export default XRSuits;
