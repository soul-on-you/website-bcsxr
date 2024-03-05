'use client';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SmallItem from './small-item';
import LargeItem from './large-item';
import HeadlineCentered from '@/ui/headline-centered';

const Partners: React.FC = () => {
	const largeBlockRef = useRef(null);
	const bottomBlocksRef1 = useRef(null);
	const bottomBlocksRef2 = useRef(null);
	const bottomBlocksRef3 = useRef(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useLayoutEffect(() => {
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
			[bottomBlocksRef1.current, bottomBlocksRef2.current, bottomBlocksRef3.current],
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.3, ease: 'power3.out' },
			'<',
		);

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);

	return (
		<section className={styles.partners} id='partners'>
			<div className={`${styles.bgImage} hide-on-mobile`}>
				<Image src='/bg3.webp' alt='bg' width={2880 / 2} height={1600 / 2} />
			</div>
			<div className={styles.partners__container}>
				<HeadlineCentered
					span1='partners'
					span3='partners'
					colorSpan1='#E833EC'
					colorSpan2='#E833EC'
					colorSpan3='#E833EC'
					colorSpan4='#E833EC'
				>
					We are part of a corporate group of companies
				</HeadlineCentered>
				<div className={styles.blocksContainer}>
					<LargeItem
						ref={largeBlockRef}
						img='/7-partners/atommining.webp'
						width={1352 / 2}
						height={184 / 2}
					/>
					<SmallItem ref={bottomBlocksRef1} img='/7-partners/enigma.webp' width={532 / 2} height={156 / 2} />
					<SmallItem ref={bottomBlocksRef2} img='/7-partners/uplift.webp' width={604 / 2} height={226 / 2} />
					<SmallItem
						ref={bottomBlocksRef3}
						img='/7-partners/liquid-mining.webp'
						width={626 / 2}
						height={174 / 2}
					/>
				</div>
			</div>
		</section>
	);
};

export default Partners;
