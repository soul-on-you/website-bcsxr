// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import Image from 'next/image';

// const Test2 = () => {
// 	const h1Ref = useRef(null);
// 	const h2Ref = useRef(null);
// 	const h3Ref = useRef(null);
// 	const swipePanels = useRef([]);
// 	const backgroundImageRef = useRef(null);
// 	const intentObserverRef = useRef(null);

// 	useEffect(() => {
// 		gsap.registerPlugin(ScrollTrigger);
// 		swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current];

// 		let currentIndex = -1;
// 		let animating = false;
// 		let scaleValue = 1.6;

// 		// функция для перехода к панели
// 		const gotoPanel = (index) => {
// 			if (animating || index < 0 || index >= swipePanels.current.length) return; // предотвращаем анимацию, если уже что-то анимируется или индекс вне допустимого диапазона

// 			animating = true; // начинаем анимацию
// 			const direction = index > currentIndex ? 1 : -1; // определяем направление анимации
// 			scaleValue -= 0.2;

// 			gsap.to(swipePanels.current[index], {
// 				y: direction * 300, // перемещаем на 300px в зависимости от направления
// 				duration: 1,
// 				onComplete: () => {
// 					animating = false; // анимация завершена
// 					currentIndex = index; // обновляем текущий индекс
// 					if (currentIndex === swipePanels.current.length - 1) {
// 						// Если да, отключаем intentObserver, чтобы разрешить стандартный скролл
// 						intentObserverRef.current.kill();
// 					}
// 				},
// 			});

// 			gsap.to(backgroundImageRef.current, {
// 				scale: scaleValue,
// 				duration: 1,
// 			});
// 		};

// 		// Наблюдатель за скроллом
// 		intentObserverRef.current = ScrollTrigger.observe({
// 			type: 'wheel,touch',
// 			onDown: () => !animating && gotoPanel(currentIndex + 1),
// 			onUp: () => !animating && gotoPanel(currentIndex - 1),
// 			preventDefault: true,
// 			tolerance: 10,
// 			onPress: (self) => {
// 				ScrollTrigger.isTouch && self.event.preventDefault();
// 			},
// 		});

// 		return () => {
// 			// Очистка
// 			if (intentObserverRef.current) {
// 				intentObserverRef.current.kill();
// 			}
// 			ScrollTrigger.getAll().forEach((st) => st.kill());
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<div className='flex flex-col justify-center items-center h-screen w-screen'>
// 				<h1 ref={h1Ref} className='panel translate-y-[-400px]'>
// 					Section 1
// 				</h1>
// 				<h2 ref={h2Ref} className='panel'>
// 					Section 2
// 				</h2>
// 				<h3 ref={h3Ref} className='panel'>
// 					Section 3
// 				</h3>
// 			</div>

// 			<Image
// 				ref={backgroundImageRef}
// 				className='backgroundImage'
// 				src='/1-masthead/bg.webp'
// 				alt='bg-image'
// 				width={2880 / 2}
// 				height={1600 / 2}
// 				priority={true}
// 				// style={{ willChange: 'transform, opacity' }}
// 			/>
// 		</>
// 	);
// };

// export default Test2;
