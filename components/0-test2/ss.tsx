'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const Test2 = () => {
	const h1Ref = useRef(null);
	const h2Ref = useRef(null);
	const h3Ref = useRef(null);
	const swipePanels = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current]; // добавляем наши панели (элементы) в массив для управления анимациями

		let currentIndex = -1; // начинаем с первой панели
		let animating = false; // флаг для отслеживания состояния анимации

		// функция для перехода к панели
		const gotoPanel = (index) => {
			if (animating || index < 0 || index >= swipePanels.current.length) return; // предотвращаем анимацию, если уже что-то анимируется или индекс вне допустимого диапазона

			animating = true; // начинаем анимацию
			const direction = index > currentIndex ? 1 : -1; // определяем направление анимации

			gsap.to(swipePanels.current[index], {
				y: direction * 300, // перемещаем на 300px в зависимости от направления
				duration: 1,
				onComplete: () => {
					animating = false; // анимация завершена
					currentIndex = index; // обновляем текущий индекс
				},
			});
		};

		// Наблюдатель за скроллом
		let intentObserver = ScrollTrigger.observe({
			type: 'wheel,touch', // наблюдение за колесиком мыши и касаниями
			onDown: () => gotoPanel(currentIndex + 1), // при скролле вниз переходим к следующей панели
			onUp: () => gotoPanel(currentIndex - 1), // при скролле вверх возвращаемся к предыдущей панели
			preventDefault: true, // предотвращаем стандартное поведение прокрутки
			tolerance: 10,
		});

		return () => {
			intentObserver.kill(); // удаляем наблюдатель при размонтировании компонента
			ScrollTrigger.getAll().forEach((st) => st.kill()); // удаляем все инстансы ScrollTrigger
		};
	}, []);

	return (
		<>
			<div className='flex flex-col justify-center items-center h-screen w-screen'>
				<h1 ref={h1Ref} className='panel translate-y-[-400px]'>
					Section 1
				</h1>
				<h2 ref={h2Ref} className='panel'>
					Section 2
				</h2>
				<h3 ref={h3Ref} className='panel'>
					Section 3
				</h3>
			</div>
			<Image
				// ref={backgroundImageRef}
				src='/1-masthead/bg.webp'
				alt='bg-image'
				width={2880 / 2}
				height={1600 / 2}
				priority={true}
				// style={{ willChange: 'transform, opacity' }}
			/>
		</>
	);
};

export default Test2;
