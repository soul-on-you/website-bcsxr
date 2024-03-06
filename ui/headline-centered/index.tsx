import React, { useRef, useEffect, useLayoutEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import IHeadlineCenteredProps from './interface';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const HeadlineCentered: React.FC<IHeadlineCenteredProps> = ({
	span1,
	span2,
	span3,
	span4,
	children,
	colorSpan1,
	colorSpan2,
	colorSpan3,
	colorSpan4,
	textShadow1,
	textShadow2,
}) => {
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
				{ autoAlpha: 0, y: 64 },
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
				tl.current?.kill();
			}
		};
	}, []);

	return (
		<div className={styles.headlineCenter}>
			<h2 ref={titleRef}>
				<span style={{ color: colorSpan1, textShadow: textShadow1 }}>{span1}</span>
				<span style={{ color: colorSpan2, textShadow: textShadow2 }}>{span2}</span>
			</h2>

			<h5 ref={textRef}>{children}</h5>
		</div>
	);
};

export default HeadlineCentered;
// export default React.memo(HeadlineCentered);
