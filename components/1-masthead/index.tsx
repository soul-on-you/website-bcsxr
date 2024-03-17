'use client';
//invincibleRef добавил чтобы была задержка у анимации
import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ArrowDown from './arrow-down';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Title from './title';
import useWindowSize from '@/hooks/useWindowSize';

const Masthead: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	const tl = useRef<gsap.core.Timeline | null>(null);
	const arrowRef = useRef<HTMLDivElement | null>(null);
	const backgroundImageRef = useRef<HTMLImageElement | null>(null);
	const scaleBackgroundValues = [1.7, 1.7, 1.3, 1.0];
	const swipeH1 = useRef<HTMLElement[]>([]);
	const swipeSectionRef = useRef(null);
	swipeH1.current = [];

	let currentIndex = -1;
	let animating: boolean;
	let allowScroll = true;

	const addToSwipePanels = (el: HTMLElement | null) => {
		if (el && !swipeH1.current.includes(el)) {
			swipeH1.current.push(el);
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline();

		gsap.set(swipeH1.current, { autoAlpha: 0, y: -500 });
		// gsap.set(arrowRef.current, { autoAlpha: 0, y: 500 });
		gsap.set(backgroundImageRef.current, { transform: 'scale(1.7)' });

		const intentObserver = ScrollTrigger.observe({
			type: 'wheel, touch, pointer',
			onUp: () => !animating && allowScroll && gotoPanel(currentIndex + 1, true),
			onDown: () => !animating && allowScroll && gotoPanel(currentIndex - 1, false), //обратный скрол
			wheelSpeed: -1,
			tolerance: 10,
			// preventDefault: isMobile ? false : true,
			preventDefault: true,
			onPress: (self) => {
				ScrollTrigger.isTouch && self.event.preventDefault();
			},
		});
		intentObserver.disable();

		const gotoPanel = (index: any, isScrollingDown: boolean) => {
			if (!allowScroll || animating) return;

			animating = true;
			allowScroll = false;

			const newScale = scaleBackgroundValues[Math.max(0, Math.min(scaleBackgroundValues.length - 1, index))];

			if ((index === swipeH1.current.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
				allowScroll = true;
				const target = index;

				if (tl.current) {
					tl.current.to(target, {
						duration: 0.0,
						onComplete: () => {
							animating = false;
							// setPreventDefault(false);
							isScrollingDown && intentObserver.disable();
						},
					});
				}
				return;
			}

			const target = isScrollingDown ? swipeH1.current[index] : swipeH1.current[currentIndex];

			gsap.to(target, {
				translateY: isScrollingDown ? 0 : -800,
				// transform: isScrollingDown ? 'translate3d(0, 0, 0)' : 'translate3d(0, -500, 0)',
				autoAlpha: 1,
				duration: 0.8,
				ease: 'power2.out',

				onComplete: () => {
					animating = false;
					gsap.delayedCall(index === swipeH1.current.length - 1 ? 0 : 0.4, () => {
						allowScroll = true;
					});
				},
			});

			if (backgroundImageRef.current) {
				gsap.to(backgroundImageRef.current, {
					scale: newScale,
					duration: 0.8,
					ease: 'power2.out',
				});
			}

			if (arrowRef.current) {
				gsap.fromTo(
					arrowRef.current,
					{ y: 500 },

					{
						autoAlpha: index >= 3 ? 1 : 0,
						duration: 0.8,
						ease: 'power2.out',
						y: 0,
					},
				);
			}

			currentIndex = index;
		};

		ScrollTrigger.create({
			trigger: swipeSectionRef.current,
			pin: true,
			start: 'top top',
			// end: '+=70%',
			end: '+=1',
			// end: isMobile ? '+=4000' : '+=1',
			immediateRender: false,
			// scroller: null,
			onToggle: (self) => {
				if (self.isActive) {
					intentObserver.enable();
				} else {
					intentObserver.disable();
				}
			},
			onEnter: () => {
				intentObserver.enable();
				gotoPanel(currentIndex + 1, true);
			},
			onEnterBack: () => {
				intentObserver.enable();
				gotoPanel(currentIndex - 1, false);
			},
			onLeave: () => {
				intentObserver.disable();
			},
			onLeaveBack: () => {
				intentObserver.disable();
			},
		});
		ScrollTrigger.refresh(); //фиксанула автоматический скролл при ф5

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<>
			<div className={styles.masthead}>
				<div className={styles.masthead__container} ref={swipeSectionRef}>
					<Title
						invincibleRef={addToSwipePanels}
						firstH1Ref={addToSwipePanels}
						secondH1Ref={addToSwipePanels}
						thirdH1Ref={addToSwipePanels}
					/>

					<div className={`${styles.arrowDown} hide-on-mobile`} ref={arrowRef}>
						<ArrowDown />
					</div>

					<Image
						ref={backgroundImageRef}
						className={styles.backgroundImage}
						src='/1-masthead/bg_new.webp'
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

export default Masthead;
