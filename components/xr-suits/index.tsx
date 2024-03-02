'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Images from './images';
import Items from './items';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const XRSuits: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const headingRef = useRef(null);
	const imagesRef = useRef(null);
	const itemsRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		tl.current = gsap.timeline();

		tl.current.fromTo(
			itemsRef.current,
			{
				opacity: 0,
				y: +100,
				duration: 1,
				ease: 'none',
			},
			{
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: itemsRef.current,
					start: 'top 96%',
					end: '+=500',
					scrub: 1,
				},
			},
		);
	});
	return (
		<section className={styles.xrsuits} id='suit'>
			<div className={styles.xrsuits__container}>
				<div ref={itemsRef}>
					<h2>XR SUITS</h2>
					<h5>
						Suit of our own design <br /> with haptic feedback & biometric reading
					</h5>
				</div>
				<Images />
				<Items />
			</div>
		</section>
	);
};

export default XRSuits;
