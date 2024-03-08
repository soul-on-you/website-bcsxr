// 'use client';
// //invincibleRef добавил чтобы была задержка у анимации
// import React, { useRef, useEffect, useState } from 'react';
// import styles from './styles.module.scss';
// import Image from 'next/image';
// import ArrowDown from './arrow-down';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import Title from './title';
// import useWindowSize from '@/hooks/useWindowSize';

// const Masthead: React.FC = () => {
// 	const { width } = useWindowSize();
// 	const isMobile = width < 768;

// 	const tl = useRef<gsap.core.Timeline | null>(null);
// 	const arrowRef = useRef<HTMLDivElement | null>(null);
// 	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
// 	const swipeH1 = useRef<HTMLElement[]>([]);
// 	const scaleBackgroundValues = [1.7, 1.7, 1.3, 1.0];

// 	swipeH1.current = [];
// 	const swipeSectionRef = useRef(null);

// 	const addToSwipePanels = (el: HTMLElement | null) => {
// 		if (el && !swipeH1.current.includes(el)) {
// 			swipeH1.current.push(el);
// 		}
// 	};

// 	useEffect(() => {
// 		gsap.registerPlugin(ScrollTrigger);
// 		tl.current = gsap.timeline({});
// 		// ScrollTrigger.normalizeScroll(true);
// 		// swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current].filter(Boolean) as HTMLElement[];
// 		let currentIndex = -1;
// 		let animating: boolean;
// 		let allowScroll = true;

// 		// gsap.set('.x-100', { yPercent: 100 });

// 		gsap.set(swipeH1.current, {
// 			zIndex: (i) => i,
// 		});
// 		gsap.set(swipeH1.current, { autoAlpha: 0, y: '-500px' });

// 		const calculateDynamicEnd = () => {
// 			const totalHeight = swipeH1.current.reduce((acc, panel) => acc + panel.offsetHeight, 0);

// 			return totalHeight + window.innerHeight * 0.5;
// 		};

// 		const endValue = isMobile ? calculateDynamicEnd() : '+=1';

// 		const intentObserver = ScrollTrigger.observe({
// 			type: 'wheel, touch, pointer',
// 			onUp: () => !animating && gotoPanel(currentIndex + 1, true),
// 			onDown: () => !animating && gotoPanel(currentIndex - 1, false), //обратный скрол
// 			// onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
// 			// onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
// 			wheelSpeed: -1,
// 			tolerance: 10,
// 			// preventDefault: isMobile ? false : true,
// 			preventDefault: true,
// 			onPress: (self) => {
// 				ScrollTrigger.isTouch && self.event.preventDefault();
// 			},
// 		});
// 		intentObserver.disable();

// 		function gotoPanel(index: any, isScrollingDown: boolean) {
// 			if (!allowScroll || animating) return;

// 			const newScale = scaleBackgroundValues[Math.max(0, Math.min(scaleBackgroundValues.length - 1, index))];

// 			animating = true;
// 			allowScroll = false;

// 			if ((index === swipeH1.current.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
// 				allowScroll = true;
// 				const target = index;
// 				gsap.to(target, {
// 					duration: 0.0,
// 					onComplete: () => {
// 						animating = false;
// 						isScrollingDown && intentObserver.disable();
// 					},
// 				});
// 				return;
// 			}

// 			const target = isScrollingDown ? swipeH1.current[index] : swipeH1.current[currentIndex];

// 			gsap.to(target, {
// 				// yPercent: isScrollingDown ? 0 : 100,
// 				// translateY: isScrollingDown ? 0 : '-800px',
// 				transform: isScrollingDown ? 'translate3d(0, 0, 0)' : 'translate3d(0, -800px, 0)',
// 				autoAlpha: 1,
// 				duration: 0.75,
// 				onComplete: () => {
// 					animating = false;
// 					gsap.delayedCall(0.5, () => {
// 						allowScroll = true;
// 					});
// 				},
// 			});

// 			if (backgroundImageRef.current) {
// 				gsap.to(backgroundImageRef.current, {
// 					scale: newScale,
// 					duration: 0.75,
// 				});
// 			}

// 			if (arrowRef.current) {
// 				gsap.fromTo(
// 					arrowRef.current,
// 					{
// 						y: 500,
// 						opacity: 0,
// 					},
// 					{
// 						autoAlpha: index >= 3 ? 1 : 0, // Появляется на третьем скролле (index == 2) и скрывается на остальных
// 						duration: 1,
// 						y: 0,
// 					},
// 				);
// 			}

// 			currentIndex = index;
// 		}

// 		ScrollTrigger.create({
// 			trigger: swipeSectionRef.current,
// 			pin: true,
// 			start: 'top top',
// 			end: '+=70%',
// 			// end: isMobile ? '+=4000' : '+=1',
// 			// end: endValue,
// 			immediateRender: false,
// 			scroller: null,
// 			onToggle: (self) => {
// 				if (self.isActive) {
// 					intentObserver.enable();
// 				} else {
// 					intentObserver.disable();
// 				}
// 			},
// 			onEnter: () => {
// 				intentObserver.enable();
// 				gotoPanel(currentIndex + 1, true);
// 			},
// 			onEnterBack: () => {
// 				intentObserver.enable();
// 				gotoPanel(currentIndex - 1, false);
// 			},
// 			onLeave: () => {
// 				intentObserver.disable();
// 			},
// 			onLeaveBack: () => {
// 				intentObserver.disable();
// 			},
// 			// onEnter: () => {
// 			// 	intentObserver.enable({ preventDefault: true });
// 			// },
// 			// onLeave: () => {
// 			// 	intentObserver.enable({ preventDefault: false });
// 			// },
// 			// onEnterBack: () => {
// 			// 	intentObserver.enable({ preventDefault: true });
// 			// },
// 			// onLeaveBack: () => {
// 			// 	intentObserver.enable({ preventDefault: false });
// 			// },
// 		});
// 		// ScrollTrigger.normalizeScroll(true);
// 		ScrollTrigger.refresh(); //фиксанула автоматический скролл при ф5

// 		return () => {
// 			ScrollTrigger.getAll().forEach((st) => st.kill());
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<div className={styles.masthead}>
// 				<div className={styles.masthead__container} ref={swipeSectionRef}>
// 					<Title
// 						invincibleRef={addToSwipePanels}
// 						firstH1Ref={addToSwipePanels}
// 						secondH1Ref={addToSwipePanels}
// 						thirdH1Ref={addToSwipePanels}
// 					/>

// 					<div className={`${styles.arrowDown} hide-on-mobile`} ref={arrowRef}>
// 						<ArrowDown />
// 					</div>

// 					<Image
// 						ref={backgroundImageRef}
// 						className={styles.backgroundImage}
// 						src='/1-masthead/bg.webp'
// 						alt='bg-image'
// 						width={2880 / 2}
// 						height={1600 / 2}
// 						priority={true}
// 						style={{ willChange: 'transform, opacity' }}
// 					/>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Masthead;