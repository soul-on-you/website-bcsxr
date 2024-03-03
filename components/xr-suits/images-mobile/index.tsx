import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';

const ImagesMobile: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imagesRef = useRef([]);
	const numOfImages = 3; // Общее количество изображений

	useEffect(() => {
		imagesRef.current = imagesRef.current.slice(0, numOfImages);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			// Переключаем на следующее изображение
			setCurrentIndex((prevIndex) => (prevIndex + 1) % numOfImages);

			// Анимация для переключения изображений
			gsap.to(imagesRef.current, {
				xPercent: -100 * currentIndex,
				duration: 1,
				ease: 'power1.inOut',
			});
		}, 1000); // Интервал в 1 секунду

		return () => clearInterval(timer); // Очищаем интервал при размонтировании компонента
	}, [currentIndex]);

	return (
		<div className={styles.images} style={{ overflow: 'hidden', width: '100vw', height: '100vh' }}>
			<div style={{ display: 'flex', width: '300%' }}>
				{[1, 2, 3].map((num, index) => (
					<div key={index} ref={(el) => (imagesRef.current[index] = el)} style={{ flex: '0 0 100%' }}>
						<Image
							src={`/xr-suits/images/${num}.webp`}
							alt={`xr-suit-${num}`}
							layout='fill'
							objectFit='cover'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImagesMobile;
