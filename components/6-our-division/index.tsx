'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import MediumItem from './medium-item';
import LargeItem from './large-item';
import Image from 'next/image';
import HeadlineCentered from '@/ui/headline-centered';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const OurDivision: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const largeBlockRef = useRef<HTMLDivElement | null>(null);
	const bottomBlock1Ref = useRef<HTMLDivElement | null>(null);
	const bottomBlock2Ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: largeBlockRef.current,
				start: 'top bottom-=200',
				end: 'bottom top',
				toggleActions: 'play none none none',
			},
		});

		tl.current.fromTo(
			largeBlockRef.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out' },
		);
		tl.current.fromTo(
			[bottomBlock1Ref.current, bottomBlock2Ref.current],
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' },
			'<',
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
					colorSpan1='#2DE8E8'
					colorSpan2='#2DE8E8'
					colorSpan3='#2DE8E8'
					colorSpan4='#2DE8E8'
				>
					We are part of blockchain sports ecosystem
				</HeadlineCentered>

				<div className={styles.container}>
					<LargeItem ref={largeBlockRef} img='/6-our-division/ecosystem.webp' />
					<MediumItem ref={bottomBlock1Ref} img='/6-our-division/foundation.webp' />
					<MediumItem ref={bottomBlock2Ref} img='/6-our-division/football.webp' />
				</div>
			</div>
		</section>
	);
};

export default OurDivision;
