import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Images: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Массив рефов для удобства
		const refs = [ref1, ref2, ref3];

		refs.forEach((ref, index) => {
			// Создаем индивидуальный ScrollTrigger для каждого изображения
			ScrollTrigger.create({
				trigger: ref.current,
				start: 'top center+=150',
				// end: '+=600',
				markers: true,
				scrub: 1, // Начать анимацию, когда элемент входит в область видимости
				onEnter: () => {
					gsap.fromTo(
						ref.current,
						{
							y: +100, // Двигаем по оси Y
							duration: 2,
							autoAlpha: 0, // Плавное появление
							ease: 'power2.out',
						},
						{ y: -16, autoAlpha: 1, stagger: 0.1 },
					);
				},
			});
		});
	}, []);

	return (
		<div className={styles.images}>
			<div ref={ref1}>
				<Image src='/xr-suits/1.png' alt='xr-suit' width={1000 / 2} height={1300 / 2} />
			</div>
			<div ref={ref2}>
				<Image src='/xr-suits/2.png' alt='xr-suit' width={1000 / 2} height={1300 / 2} />
			</div>
			<div ref={ref3}>
				<Image src='/xr-suits/3.png' alt='xr-suit' width={1000 / 2} height={1300 / 2} />
			</div>
		</div>
	);
};

export default Images;
