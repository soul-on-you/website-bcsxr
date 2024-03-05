import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import IHeadingLeftProps from './interface';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const HeadingLeft: React.FC<IHeadingLeftProps> = ({ heading1, heading2, children, color }) => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef<gsap.core.Timeline | null>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const span = new SplitType(textRef.current!, {
			types: 'lines',
			lineClass: 'splitType',
		});

		const split = new SplitType(span?.lines ?? [], {
			types: 'lines',
		});

		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top bottom-=80',
				toggleActions: 'play none none none',
				//suka suka
			},
		});

		tl.current.fromTo(
			headingRef.current,
			{ autoAlpha: 0, y: 56 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
			},
		);

		tl.current.fromTo(
			split.lines,
			{ autoAlpha: 0, y: 16 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power2.out',
			},
			'<',
		);

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);
	return (
		<div className={styles.headingLeft}>
			<div ref={headingRef}>
				<h2 style={{ color: color }}>{heading1}</h2>
				<h2 style={{ color: color }}>{heading2}</h2>
			</div>
			<h5 ref={textRef}>{children}</h5>
		</div>
	);
};

export default HeadingLeft;
