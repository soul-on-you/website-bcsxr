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

	const mastheadRef = useRef<HTMLDivElement | null>(null);
	const firstH1Ref = useRef<HTMLHeadingElement | null>(null);
	const secondH1Ref = useRef<HTMLHeadingElement | null>(null);
	const thirdH1Ref = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const invincibleRef = useRef<HTMLDivElement>(null);
	const redRef = useRef(null)

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	ScrollTrigger.normalizeScroll(true); //фиксанула скролл на мобилке (когда для скролла пина нужно очень сильно стараться, но из-за него лаги, поэтму потом выключаю)
	// 	if (!mastheadRef.current) {
	// 		return;
	// 	}
	// 	const endValue = `+=${mastheadRef.current.offsetHeight * 3}`;

	// 	tl.current = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: mastheadRef.current,
	// 			start: '1% top',
	// 			end: () => endValue,
	// 			scrub: false,
	// 			pin: true,
	// 			scroller: null,
	// 			immediateRender: false,
	// 			onLeave: () => {
	// 				ScrollTrigger.normalizeScroll(false);
	// 				console.log('normalizeScroll отключен при покидании области');
	// 			},
	// 			onEnterBack: () => {
	// 				ScrollTrigger.normalizeScroll(true);
	// 				console.log('normalizeScroll включен при возвращении');
	// 			},
	// 		},
	// 		paused: true,
	// 	});

	// 	tl.current
	// 		.fromTo(firstH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' }) //1 итерация
	// 		.to(backgroundImageRef.current, { duration: 1, scale: 1.4, ease: 'none' }, '<') //1 итерация
	// 		.fromTo(secondH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' }) //2 итерация
	// 		.to(backgroundImageRef.current, { duration: 1, scale: 1, ease: 'none' }, '<') //2 итерация
	// 		.fromTo(thirdH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' }) //3 итерация
	// 		.fromTo(arrowRef.current, { opacity: 0, y: 500 }, { duration: 1, autoAlpha: 1, y: 0 }, '<'); //3 итерация
	// 	// .to(invincibleRef.current, { opacity: 0, y: 0, duration: 1 });

	// 	ScrollTrigger.refresh(); //фиксанула автоматический скролл при ф5

	// 	return () => {
	// 		if (tl.current) {
	// 			if (tl.current.scrollTrigger) {
	// 				tl.current.scrollTrigger.kill();
	// 			}
	// 			tl.current.kill();
	// 		}
	// 		ScrollTrigger.getAll().forEach((instance) => instance.kill());
	// 		// ScrollTrigger.normalizeScroll(false);
	// 	};
	// }, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (!mastheadRef.current) {
			return;
		}
		const endValue = `+=${mastheadRef.current.offsetHeight * 3}`;
		const endValue2 = `+=${mastheadRef.current.offsetHeight * 3}`;
		const endValue3 = `+=${mastheadRef.current.offsetHeight * 3}`;

		const tl1 = gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: redRef.current,
				start: '1% top', // Начать анимацию сразу при входе во вьюпорт
				end: '+=30%', // Конец первой итерации
				toggleActions: 'play none none reverse',
				pin: redRef.current,
				markers: true
			},
		});

		tl1.fromTo(firstH1Ref.current, { y: -500 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'none' }).to(
			backgroundImageRef.current,
			{ scale: 1.4, ease: 'none' },
			'<',
		);

		const tl2 = gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: redRef.current,
				start: 'top -=30%', // Начать вторую итерацию после первой
				end: '+=60%', // Конец второй итерации
				toggleActions: 'play none none reverse',
				pin: redRef.current,
				// markers: true,
			},
		});

		tl2.fromTo(secondH1Ref.current, { y: -500 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'none' }).to(
			backgroundImageRef.current,
			{ scale: 1, ease: 'none' },
			'<',
		);

		const tl3 = gsap.timeline({
			paused: true,
			scrollTrigger: {
				trigger: redRef.current,
				start: 'top -=60%',
				end: '+=90%', // Конец третьей итерации
				toggleActions: 'play none none reverse',
				pin: redRef.current,
			},
		});

		tl3.fromTo(thirdH1Ref.current, { y: -500 }, { y: 0, autoAlpha: 1, duration: 1, ease: 'none' }).fromTo(
			arrowRef.current,
			{ opacity: 0, y: 500 },
			{ opacity: 1, y: 0, duration: 1 },
			'<',
		);

		// Аналогично добавьте tl3 для третьей итерации

		return () => {
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<>
			<div className={styles.red} ref={redRef}>
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
			</div>
		</>
	);
};

export default Masthead;
