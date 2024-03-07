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
	const scaleValues = [1.7, 1.7, 1.3, 1.0];

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
		ScrollTrigger.normalizeScroll({
			target: swipeSectionRef.current,
			allowNestedScroll: true,
			type: 'touch,scroll,pointer',
		});
		// ScrollTrigger.normalizeScroll(true);
		// swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current].filter(Boolean) as HTMLElement[];
		let currentIndex = -1;
		let animating: boolean;
		let scaleValue = 1.6;
		// let scaleValue = 1.6;

		// gsap.set('.x-100', { yPercent: 100 });

		gsap.set(swipePanels.current, {
			zIndex: (i) => i,
		});
		gsap.set(swipePanels.current, { autoAlpha: 0, y: '-500px' });

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
			const newScale = scaleValues[Math.max(0, Math.min(scaleValues.length - 1, index))];
			animating = true;
			scaleValue -= 0.2;
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
			const target2 = isScrollingDown ? backgroundImageRef.current : backgroundImageRef.current;

			gsap.to(target, {
				// yPercent: isScrollingDown ? 0 : 100,
				// translateY: isScrollingDown ? 0 : '-800px',
				transform: isScrollingDown ? 'translate3d(0, 0, 0)' : 'translate3d(0, -800px, 0)',
				autoAlpha: 1,
				duration: 0.75,
				onComplete: () => {
					animating = false;
				},
			});

			if (backgroundImageRef.current) {
				gsap.to(backgroundImageRef.current, {
					scale: newScale,
					duration: 0.75,
				});
			}

			if (arrowRef.current) {
				gsap.fromTo(
					arrowRef.current,
					{
						y: 500,
						opacity: 0,
					},
					{
						autoAlpha: index >= 3 ? 1 : 0, // Появляется на третьем скролле (index == 2) и скрывается на остальных
						duration: 1,
						y: 0,
					},
				);
			}

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

		ScrollTrigger.refresh(); //фиксанула автоматический скролл при ф5

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
							{/* as */}
						</h1>
						<h1 ref={addToSwipePanels} style={{ willChange: 'transform, opacity' }}>
							new format
						</h1>
						<br />

						<h1 ref={addToSwipePanels} style={{ willChange: 'transform, opacity' }}>
							of competitive
						</h1>
						<br />

						<h1 ref={addToSwipePanels} style={{ willChange: 'transform, opacity' }}>
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
