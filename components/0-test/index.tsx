'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Test = () => {
	const swipeSectionRef = useRef(null);
	const swipePanels = useRef([]);
	swipePanels.current = [];

	const addToSwipePanels = (el) => {
		if (el && !swipePanels.current.includes(el)) {
			swipePanels.current.push(el);
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let currentIndex = -1;
		let animating;

		gsap.set('.x-100', { xPercent: 100 });

		gsap.set(swipePanels.current, {
			zIndex: (i) => i,
		});

		let intentObserver = ScrollTrigger.observe({
			type: 'wheel,touch',
			onUp: () => !animating && gotoPanel(currentIndex + 1, true),
			onDown: () => !animating && gotoPanel(currentIndex - 1, false),
			wheelSpeed: -1,
			tolerance: 10,
			preventDefault: true,
			onPress: (self) => {
				ScrollTrigger.isTouch && self.event.preventDefault();
			},
		});
		intentObserver.disable();

		function gotoPanel(index, isScrollingDown) {
			animating = true;
			if ((index === swipePanels.current.length && isScrollingDown) || (index === -1 && !isScrollingDown)) {
				let target = index;
				gsap.to(target, {
					duration: 0.0,
					onComplete: () => {
						animating = false;
						isScrollingDown && intentObserver.disable();
					},
				});
				return;
			}

			let target = isScrollingDown ? swipePanels.current[index] : swipePanels.current[currentIndex];

			gsap.to(target, {
				xPercent: isScrollingDown ? 0 : 100,
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
		<div className='swipe-section' ref={swipeSectionRef}>
			<section
				className='panel red bg-yellow-500 h-screen w-screen flex justify-center items-center'
				ref={addToSwipePanels}
			>
				ScrollTrigger.observe() section
			</section>
			<section
				className='panel purple x-100 h-screen w-screen bg-red-700 flex justify-center items-center'
				ref={addToSwipePanels}
			>
				Section 2
			</section>
			<section
				className='panel blue x-100 h-screen w-screen bg-blue-700 flex justify-center items-center'
				ref={addToSwipePanels}
			>
				Section 3
			</section>
			<section className='panel orange x-100 vh-200' ref={addToSwipePanels}>
				This section should switch to vertical scroll (500vh)
			</section>
			<div style={{ height: '400vh' }}></div>
		</div>
	);
};

export default Test;
