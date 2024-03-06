'use client';
//invincibleRef добавил чтобы была задержка у анимации
import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from './arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Title from './title';

const Masthead: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	gsap.registerPlugin(ScrollTrigger);

	const mastheadRef = useRef<HTMLDivElement | null>(null);
	const firstH1Ref = useRef<HTMLHeadingElement | null>(null);
	const secondH1Ref = useRef<HTMLHeadingElement | null>(null);
	const thirdH1Ref = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const invincibleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!mastheadRef.current) {
			return;
		}
		const endValue = `+=${mastheadRef.current.offsetHeight * 3}`;

		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: mastheadRef.current,
				start: '1% top',
				end: () => endValue,
				scrub: true,
				pin: true,
				// scroller: null,
				immediateRender: false,
			},
			paused: true,
		});

		tl.current
			.fromTo(firstH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' })
			.to(backgroundImageRef.current, { duration: 1, scale: 1.4, ease: 'none' }, '<')
			.fromTo(secondH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' })
			.to(backgroundImageRef.current, { duration: 1, scale: 1, ease: 'none' }, '<')
			.fromTo(thirdH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' })
			.fromTo(arrowRef.current, { opacity: 0, y: 500 }, { duration: 1, autoAlpha: 1, y: 0 }, '<')
			.to(invincibleRef.current, { opacity: 0, y: 0, duration: 1 });

		ScrollTrigger.refresh();

		return () => {
			if (tl.current) {
				if (tl.current.scrollTrigger) {
					tl.current.scrollTrigger.kill();
				}
				tl.current.kill();
			}
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};
	}, []);

	return (
		<>
			<div className={styles.masthead} ref={mastheadRef}>
				<div className={styles.masthead__container}>
					<div className={styles.title}>
						<h1 ref={firstH1Ref} style={{ willChange: 'transform, opacity' }}>
							<span>new format</span>
							<span>new format</span>
						</h1>
						<br />
						<h1 ref={secondH1Ref} style={{ willChange: 'transform, opacity' }}>
							<span>of competitive</span>
							<span>of competitive</span>
						</h1>
						<br />
						<h1 ref={thirdH1Ref} style={{ willChange: 'transform, opacity' }}>
							<span>sport</span>
							<span>sport</span>
						</h1>
					</div>
					<div className={`${styles.arrowDown} hide-on-mobile`} ref={arrowRef}>
						<ArrowDown />
					</div>

					<Image
						ref={backgroundImageRef}
						className={styles.backgroundImage}
						src='/1-masthead/bg.webp'
						alt='bg-image'
						width={2880 / 2}
						height={1600 / 2}
						priority={true}
						// style={{ willChange: 'transform, opacity' }}
					/>
					<div className='absolute opacity-0' ref={invincibleRef} />
				</div>
			</div>
		</>
	);
};

export default Masthead;
