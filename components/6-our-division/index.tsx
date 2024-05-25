'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import MediumItem from './medium-item';
import LargeItem from './large-item';
import Image from 'next/image';
import HeadlineCentered from '@/ui/headline-centered';
import useWindowSize from '@/hooks/useWindowSize';
import Link from 'next/link';

const OurDivision: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	const tl = useRef<gsap.core.Timeline | null>(null);
	const largeBlockRef = useRef<HTMLDivElement | null>(null);
	const bottomBlock1Ref = useRef<HTMLDivElement | null>(null);
	const bottomBlock2Ref = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: largeBlockRef.current,
				start: isMobile ? 'top-=48 bottom-=32' : 'top bottom-=250',
				end: 'bottom top',
				toggleActions: 'play none none none',
			},
		});

		tl.current
			.fromTo(
				largeBlockRef.current,
				{ autoAlpha: 0, y: 120 },
				{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
			)
			.fromTo(
				[bottomBlock1Ref.current, bottomBlock2Ref.current],
				{ autoAlpha: 0, y: 120 },
				{ autoAlpha: 1, y: 0, duration: 1.4, stagger: 0.2, ease: 'power3.out' },
				'0.4',
			);

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);

	return (
		<section className={styles.ourDivision}>
			<div className={`${styles.backgroundImageSmall} hide-on-mobile`}>
				<Image src='/6-our-division/bg.webp' alt='bg' width={2880 / 2} height={1600 / 2} />
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
					textShadow1='2px 2px 72px #2DE8E8'
					textShadow2='2px 2px 72px #2DE8E8'
				>
					We are part of blockchain sports ecosystem
				</HeadlineCentered>

				<div className={styles.containerItems}>
					<LargeItem
						ref={largeBlockRef}
						img='/6-our-division/ecosystem.svg'
						href='https://bcsports.io/
'
					/>
					<MediumItem
						ref={bottomBlock1Ref}
						img='/6-our-division/atleta.webp'
						href='https://atleta.network/'
					/>
					<MediumItem
						ref={bottomBlock2Ref}
						img='/6-our-division/football.svg'
						href='https://football.bcsports.io/'
					/>
				</div>
			</div>
		</section>
	);
};

export default OurDivision;
