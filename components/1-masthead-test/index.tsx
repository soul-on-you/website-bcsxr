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

	const h1Ref = useRef(null);
	const h2Ref = useRef(null);
	const h3Ref = useRef(null);
	const swipePanels = useRef([]);
	const intentObserverRef = useRef(null);
	const backgroundImageRef = useRef(null);
	let scaleValue = 1.6;
	let currentIndex = -1;
	let animating = false;

	const arrowRef = useRef<HTMLDivElement | null>(null);
	const invincibleRef = useRef<HTMLDivElement>(null);
	const redRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		swipePanels.current = [h1Ref.current, h2Ref.current, h3Ref.current]; // добавляем наши панели (элементы) в массив для управления анимациями

		// let currentIndex = -1; // начинаем с первой панели
		// let animating = false; // флаг для отслеживания состояния анимации
		// let scaleValue = 1.6;

		// функция для перехода к панели
		const gotoPanel = (index) => {
			if (animating || index < 0 || index >= swipePanels.current.length) return; // предотвращаем анимацию, если уже что-то анимируется или индекс вне допустимого диапазона

			animating = true; // начинаем анимацию
			const direction = index > currentIndex ? 1 : -1; // определяем направление анимации
			scaleValue -= 0.2;

			gsap.fromTo(
				swipePanels.current[index],
				{ y: -500 },
				{
					y: 0, // перемещаем на 300px в зависимости от направления
					autoAlpha: 1,
					duration: 1,
					onComplete: () => {
						animating = false; // анимация завершена
						currentIndex = index; // обновляем текущий индекс
						if (currentIndex === swipePanels.current.length - 1) {
							// Если да, отключаем intentObserver, чтобы разрешить стандартный скролл
							intentObserverRef.current.kill();
						}
					},
				},
			);

			gsap.to(backgroundImageRef.current, {
				scale: scaleValue,
				duration: 1,
			});
		};

		// Наблюдатель за скроллом
		intentObserverRef.current = ScrollTrigger.observe({
			type: 'wheel,touch',
			onDown: () => !animating && gotoPanel(currentIndex + 1),
			onUp: () => !animating && gotoPanel(currentIndex - 1),
			preventDefault: true,
			tolerance: 10,
			onPress: (self) => {
				ScrollTrigger.isTouch && self.event.preventDefault();
			},
		});

		return () => {
			// Очистка
			if (intentObserverRef.current) {
				intentObserverRef.current.kill();
			}
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<>
			<div className={styles.red} ref={redRef}>
				<div className={styles.masthead} >
					<div className={styles.masthead__container}>
						<div className={styles.title}>
							<h1 ref={h1Ref} style={{ willChange: 'transform, opacity' }}>
								<span>new format</span>
								<Image src='/blur-pink.webp' alt='blur-pink' width={1800 / 2} height={500 / 2} />
							</h1>
							<br />
							<h1 ref={h2Ref} style={{ willChange: 'transform, opacity' }}>
								<span>of competitive</span>
							</h1>
							<br />
							<h1 ref={h3Ref} style={{ willChange: 'transform, opacity' }}>
								<span>sport</span>
								<Image src='/blur-blue.webp' alt='blur-pink' width={1800 / 2} height={500 / 2} />
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
							// style={{ willChange: 'transform, opacity' }}
						/>
						<div className='absolute opacity-0' ref={invincibleRef} />
					</div>
				</div>
			</div>
		</>
	);
};

export default MastheadTest;
