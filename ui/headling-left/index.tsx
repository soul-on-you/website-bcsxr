import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';
import IHeadingLeftProps from './interface';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const HeadingLeft: React.FC<IHeadingLeftProps> = ({ heading1, textShadow, children, color }) => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
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
				start: 'top bottom-=100',
				toggleActions: 'play none none none',
			},
		});

		tl.current
			.fromTo(
				titleRef.current,
				{ autoAlpha: 0, y: 64 },
				{
					autoAlpha: 1,
					y: 0,
					duration: 1.4,
					ease: 'power3.out',
				},
			)
			.fromTo(
				split.lines,
				{ autoAlpha: 0, y: 32 },
				{
					autoAlpha: 1,
					y: 0,
					duration: 1,
					stagger: 0.15,
					ease: 'power3.out',
				},
				'0.2',
			);

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
		};
	}, []);
	return (
		<div className={styles.headlineLeft}>
			<h2 ref={titleRef} style={{ color: color, textShadow: textShadow }}>
				{heading1}
			</h2>
			<h5 ref={textRef}>{children}</h5>
		</div>
	);
};

// export default HeadingLeft;
export default React.memo(HeadingLeft);
