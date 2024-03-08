'use client';
//invincibleRef добавил чтобы была задержка у анимации
import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from './arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Title from './title';

const Masthead: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	gsap.registerPlugin(ScrollTrigger);
	const [currentAnimation, setCurrentAnimation] = useState(0);

	const mastheadRef = useRef<HTMLDivElement | null>(null);
	const firstH1Ref = useRef<HTMLHeadingElement | null>(null);
	const secondH1Ref = useRef<HTMLHeadingElement | null>(null);
	const thirdH1Ref = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const invincibleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		ScrollTrigger.normalizeScroll(true); //фиксанула скролл на мобилке (когда для скролла пина нужно очень сильно стараться, но из-за него лаги, поэтму потом выключаю)
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
				scroller: null,
				immediateRender: false,
				onLeave: () => {
					ScrollTrigger.normalizeScroll(false);
					console.log('normalizeScroll отключен при покидании области');
				},
				onEnterBack: () => {
					ScrollTrigger.normalizeScroll(true);
					console.log('normalizeScroll включен при возвращении');
				},
			},
			paused: true,
		});

		tl.current
			.fromTo(firstH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' }) //1 итерация
			.to(backgroundImageRef.current, { duration: 1, scale: 1.4, ease: 'none' }, '<') //1 итерация
			.fromTo(secondH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' }) //2 итерация
			.to(backgroundImageRef.current, { duration: 1, scale: 1, ease: 'none' }, '<') //2 итерация
			.fromTo(thirdH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' }) //3 итерация
			.fromTo(arrowRef.current, { opacity: 0, y: 500 }, { duration: 1, autoAlpha: 1, y: 0 }, '<'); //3 итерация
		// .to(invincibleRef.current, { opacity: 0, y: 0, duration: 1 });

		ScrollTrigger.refresh(); //фиксанула автоматический скролл при ф5

		return () => {
			if (tl.current) {
				if (tl.current.scrollTrigger) {
					tl.current.scrollTrigger.kill();
				}
				tl.current.kill();
			}
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
			// ScrollTrigger.normalizeScroll(false);
		};
	}, []);

	return (
		<>
			<div className={styles.masthead} ref={mastheadRef}>
				<div className={styles.masthead__container}>
					<Title firstH1Ref={firstH1Ref} secondH1Ref={secondH1Ref} thirdH1Ref={thirdH1Ref} />
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