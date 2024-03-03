import React, { useRef, useLayoutEffect, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import IHeadlineCenteredProps from './interface';

const HeadlineCentered: React.FC<IHeadlineCenteredProps> = ({ span1, span2, span3, span4, text }) => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: textRef.current,
				start: 'top 98%',
				toggleActions: 'play none resume reset',
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
					<span>{span1}</span>
					<span>{span2}</span>
				</h2>
				<h2>
					<span>{span3}</span>
					<span>{span4}</span>
				</h2>
			</div>
			<h5 ref={textRef}>
				{text}
			</h5>
		</div>
	);
};

export default HeadlineCentered;
