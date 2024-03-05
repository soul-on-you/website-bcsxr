import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import IHeadlineCenteredProps from './interface';

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
}) => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top bottom-=80',
				toggleActions: 'play none none none',
				// scrub: 1
			},
		});

		tl.current.fromTo(
			titleRef.current,
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

		return () => {
			tl.current?.kill();
		};
	}, []);

	return (
		<div className={styles.headline}>
			<div className={styles.title} ref={titleRef}>
				<h2>
					<span style={{ color: colorSpan1 }}>{span1}</span>
					<span style={{ color: colorSpan2 }}>{span2}</span>
				</h2>
				<h2>
					<span style={{ color: colorSpan3 }}>{span3}</span>
					<span style={{ color: colorSpan4 }}>{span4}</span>
				</h2>
			</div>
			<h5 ref={textRef}>{children}</h5>
		</div>
	);
};

export default HeadlineCentered;
