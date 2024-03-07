'use client';
//invincibleRef добавил чтобы была задержка у анимации
import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from './arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Title from './title';

const MastheadTest: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const h1Ref = useRef<HTMLHeadingElement | null>(null);
	const h2Ref = useRef<HTMLHeadingElement | null>(null);
	const h3Ref = useRef<HTMLHeadingElement | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const swipePanels = useRef<HTMLElement[]>([]);
	const intentObserverRef = useRef<Observer | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current].filter(Boolean) as HTMLElement[];
		let animating: any;
		let currentIndex = -1;
		let scaleValue = 1.6;

		const gotoPanel = (index: any, isScrollingDown: boolean) => {
			// if (animating || index < 0 || index >= swipePanels.current.length) return;
			scaleValue -= 0.2;

			animating = true;
			if ((index === swipePanels.current.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
				const target = index;
				gsap.to(target, {
					duration: 0.0,
					onComplete: () => {
						animating = false;
						if (intentObserverRef.current) {
							isScrollingDown && intentObserverRef.current.disable();
						}
					},
				});
				return;
			}
			const target = isScrollingDown ? swipePanels.current[index] : swipePanels.current[currentIndex];

			gsap.to(target, {
				yPercent: isScrollingDown ? 0 : 0,
				duration: 0.75,
				autoAlpha: 1,
				onComplete: () => {
					animating = false;
				},
			});
			currentIndex = index;

			gsap.to(backgroundImageRef.current, {
				scale: scaleValue,
				duration: 1,
			});
			if (index === 2) {
				gsap.fromTo(arrowRef.current, { opacity: 0, y: 500 }, { autoAlpha: 1, y: 0, duration: 1 });
			}
		};

		// Наблюдатель за скроллом
		intentObserverRef.current = ScrollTrigger.observe({
			type: 'wheel,touch',
			// onDown: () => !animating && gotoPanel(currentIndex + 1),
			// onUp: () => !animating && gotoPanel(currentIndex - 1),
			onUp: () => !animating && gotoPanel(currentIndex - 1, false),
			onDown: () => !animating && gotoPanel(currentIndex + 1, true),
			preventDefault: true,
			tolerance: 10,
			onPress: (self) => {
				ScrollTrigger.isTouch && self.event.preventDefault();
			},
		});

		return () => {
			if (intentObserverRef.current) {
				intentObserverRef.current.kill();
			}
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<>
			<div className={styles.masthead}>
				<div className={styles.masthead__container}>
					<Title firstH1Ref={h1Ref} secondH1Ref={h2Ref} thirdH1Ref={h3Ref} />

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
						style={{ willChange: 'transform, opacity' }}
					/>
				</div>
			</div>
		</>
	);
};

export default MastheadTest;
