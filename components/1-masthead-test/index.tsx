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

	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const swipePanels = useRef<HTMLElement[]>([]);

	swipePanels.current = [];
	const swipeSectionRef = useRef(null);

	// const addToSwipePanels = (el) => {
	// 	if (el && !swipePanels.current.includes(el)) {
	// 		swipePanels.current.push(el);
	// 	}
	// };
	const addToSwipePanels = (el: HTMLElement | null) => {
		if (el && !swipePanels.current.includes(el)) {
			swipePanels.current.push(el);
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current].filter(Boolean) as HTMLElement[];
		let currentIndex = -1;
		let animating: boolean;
		// let scaleValue = 1.6;

		// gsap.set('.x-100', { yPercent: 100 });

		gsap.set(swipePanels.current, {
			zIndex: (i) => i,
		});
		gsap.set(swipePanels.current, { autoAlpha: 0 });

		const intentObserver = ScrollTrigger.observe({
			type: 'wheel,touch',
			onUp: () => !animating && gotoPanel(currentIndex + 1, true),
			onDown: () => !animating && gotoPanel(currentIndex - 1, false), //обратный скрол
			wheelSpeed: -1,
			tolerance: 10,
			preventDefault: true,
			onPress: (self) => {
				ScrollTrigger.isTouch && self.event.preventDefault();
			},
		});
		intentObserver.disable();

		function gotoPanel(index: any, isScrollingDown: boolean) {
			animating = true;
			if ((index === swipePanels.current.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
				const target = index;
				gsap.to(target, {
					duration: 0.0,
					onComplete: () => {
						animating = false;
						isScrollingDown && intentObserver.disable();
					},
				});
				return;
			}

			const target = isScrollingDown ? swipePanels.current[index] : swipePanels.current[currentIndex];

			gsap.to(target, {
				// yPercent: isScrollingDown ? 0 : 100,
				translateY: isScrollingDown ? 0 : '-100px',
				autoAlpha: 1,
				duration: 0.75,
				onComplete: () => {
					animating = false;
				},
			});
			currentIndex = index;
		}

		ScrollTrigger.create({
			trigger: swipeSectionRef.current,
			pin: true,
			start: 'top top',
			end: '+=1',
			onEnter: () => {
				intentObserver.enable();
				gotoPanel(currentIndex + 1, true);
			},
			onEnterBack: () => {
				intentObserver.enable();
				gotoPanel(currentIndex - 1, false);
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<>
			<div className={styles.masthead}>
				<div className={styles.masthead__container} ref={swipeSectionRef}>
					<div className={styles.title}>
						<h1 ref={addToSwipePanels} style={{ willChange: 'transform, opacity' }}>
							new format
						</h1>
						<br />

						<h1 ref={addToSwipePanels} className='x-100' style={{ willChange: 'transform, opacity' }}>
							of competitive
						</h1>
						<br />

						<h1 ref={addToSwipePanels} className='x-100' style={{ willChange: 'transform, opacity' }}>
							sport
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
						style={{ willChange: 'transform, opacity' }}
					/>
				</div>
			</div>
		</>
	);
};

export default MastheadTest;
