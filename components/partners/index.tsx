'use client';
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SmallItem from './small-item';
import LargeItem from './large-item';

const Partners: React.FC = () => {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const largeBlockRef = useRef(null);
	const bottomBlocksRef1 = useRef(null);
	const bottomBlocksRef2 = useRef(null);
	const bottomBlocksRef3 = useRef(null);
	const tl2 = useRef<gsap.core.Timeline | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		// ДЛЯ ЗАГОЛОВКА
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
		// ДЛЯ ЗАГОЛОВКА

		tl2.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top bottom',
				toggleActions: 'play none none none',
			},
		});

		// const tl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: textRef.current,
		// 		start: 'top bottom',
		// 		toggleActions: 'play none none none',
		// 	},
		// });

		tl2.current
			.fromTo(textRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 })
			.fromTo(largeBlockRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01')
			.fromTo(bottomBlocksRef1.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01')
			.fromTo(bottomBlocksRef2.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01')
			.fromTo(bottomBlocksRef3.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01');

		return () => {
			if (tl2.current) {
				tl2.current.kill();
			}
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);

	return (
		<section className={styles.partners} id='partners'>
			<div className={styles.partners__container}>
				<div className={styles.headline}>
					<div ref={headingRef}>
						<h2>partners</h2>
						<h2>partners</h2>
					</div>
					<h5 ref={textRef}>We are part of a corporate group of companies</h5>
				</div>
				<div>
					<LargeItem ref={largeBlockRef} img='/partners/1.png' width={1352 / 2} height={184 / 2} />
					<SmallItem ref={bottomBlocksRef1} img='/partners/2.png' width={532 / 2} height={156 / 2} />
					<SmallItem ref={bottomBlocksRef2} img='/partners/3.png' width={604 / 2} height={156 / 2} />
					<SmallItem ref={bottomBlocksRef3} img='/partners/4.png' width={626 / 2} height={174 / 2} />
				</div>
			</div>
		</section>
	);
};

export default Partners;
