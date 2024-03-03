'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import MediumItem from './medium-item';
import LargeItem from './large-item';
import Image from 'next/image';
import HeadlineCentered from '@/ui/headline-centered';

const OurDivision: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const largeBlockRef = useRef<HTMLDivElement | null>(null);
	const bottomBlock1Ref = useRef<HTMLDivElement | null>(null);
	const bottomBlock2Ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		tl.current = gsap.timeline();

		tl.current.fromTo(
			largeBlockRef.current,
			{ y: 50, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: largeBlockRef.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);

		tl.current.fromTo(
			bottomBlock1Ref.current,
			{ y: 50, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				duration: 1,
				delay: 1.0,
				scrollTrigger: {
					trigger: bottomBlock1Ref.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);

		tl.current.fromTo(
			bottomBlock2Ref.current,
			{ y: 50, autoAlpha: 0 },
			{
				y: 0,
				autoAlpha: 1,
				duration: 1,
				delay: 1.5,
				scrollTrigger: {
					trigger: bottomBlock2Ref.current,
					start: 'top bottom-=100',
					toggleActions: 'play none none none',
				},
			},
		);

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);

	return (
		<section className={styles.ourDivision}>
			<div className={`${styles.bgImage} hide-on-mobile`}>
				<Image src='/bg2.webp' alt='bg' width={2880 / 2} height={1600 / 2} />
			</div>
			<div className={styles.ourDivision__container}>
				<HeadlineCentered
					span1='our'
					span2='division'
					span3='our'
					span4='divison'
					text='We are part of blockchain sports ecosystem'
				/>

				<div className={styles.container}>
					<LargeItem ref={largeBlockRef} img='/our-division/1.png' />

					<MediumItem ref={bottomBlock1Ref} img='/our-division/2.png' />
					<MediumItem ref={bottomBlock2Ref} img='/our-division/3.png' />
				</div>
			</div>
		</section>
	);
};

export default OurDivision;
