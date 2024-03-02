'use client';
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Partners: React.FC = () => {
	const textRef = useRef(null);
	const largeBlockRef = useRef(null);
	const bottomBlocksRef1 = useRef(null);
	const bottomBlocksRef2 = useRef(null);
	const bottomBlocksRef3 = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top bottom',
				toggleActions: 'play none none none',
				markers: true,
			},
		});

		tl.fromTo(textRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 })
			.fromTo(largeBlockRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01')
			.fromTo(bottomBlocksRef1.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01')
			.fromTo(bottomBlocksRef2.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01')
			.fromTo(bottomBlocksRef3.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0.01');
	}, []);

	return (
		<section className={styles.partners} id='partners'>
			<div className={styles.partners__container}>
				<div ref={textRef}>
					<h2>PARTNERS</h2>
					<h5>We are part of a corporate group of companies</h5>
				</div>
				<div>
					<div className={styles.largeBlock} ref={largeBlockRef}>
						<Image src='/partners/1.png' alt='partners' width={1352 / 2} height={184 / 2} />
					</div>
					<div className={styles.bottomBlocks} ref={bottomBlocksRef1}>
						<Image src='/partners/2.png' alt='partners' width={532 / 2} height={156 / 2} />
					</div>
					<div className={styles.bottomBlocks} ref={bottomBlocksRef2}>
						<Image src='/partners/3.png' alt='partners' width={604 / 2} height={156 / 2} />
					</div>
					<div className={styles.bottomBlocks} ref={bottomBlocksRef3}>
						<Image src='/partners/4.png' alt='partners' width={626 / 2} height={174 / 2} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partners;
