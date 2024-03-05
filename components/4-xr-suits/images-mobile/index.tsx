import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const ImagesMobile: React.FC = () => {
	const images = ['/4-xr-suits/images/1.webp', '/4-xr-suits/images/2.webp', '/4-xr-suits/images/3.webp'];
	const [imageIndex, setImageIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const showNextImage = () => {
		setImageIndex((index) => (index + 1) % images.length);
	};

	useEffect(() => {
		let interval: string | number | NodeJS.Timeout | undefined;
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (entry.isIntersecting) {
					console.log('Анимация стартовала');
					interval = setInterval(showNextImage, 1500);
				} else {
					if (interval) {
						console.log('Анимация остановлена');
						clearInterval(interval);
					}
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.1,
			},
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				observer.unobserve(containerRef.current);
			}
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [containerRef, images.length]);

	return (
		<>
			<div ref={containerRef} className={styles.imagesContainer}>
				{images.map((url) => (
					<Image
						key={url}
						src={url}
						className={styles.image}
						style={{ translate: `${-100 * imageIndex}%` }}
						width={800 / 2}
						height={1000 / 2}
						alt={url}
					/>
				))}
			</div>
		</>
	);
};

export default ImagesMobile;
