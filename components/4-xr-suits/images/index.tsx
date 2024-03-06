import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Images: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const imageRef1 = useRef<HTMLDivElement | null>(null);
	const imageRef2 = useRef<HTMLDivElement | null>(null);
	const imageRef3 = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: imageRef1.current,
				start: 'top bottom-=250',
				end: 'bottom top',
				toggleActions: 'play none none none',
			},
		});

		tl.current
			.fromTo(
				imageRef1.current,
				{ y: 120, autoAlpha: 0 },
				{ y: 8, autoAlpha: 1, duration: 1.4, ease: 'power3.out' },
			)
			.fromTo(
				imageRef2.current,
				{ y: 120, autoAlpha: 0 },
				{ y: 8, autoAlpha: 1, duration: 1.4, ease: 'power3.out' },
				'0.4',
			)
			.fromTo(
				imageRef3.current,
				{ y: 120, autoAlpha: 0 },
				{ y: 8, autoAlpha: 1, duration: 1.4, ease: 'power3.out' },
				'0.8',
			);

		return () => {
			if (tl.current) {
				tl.current.kill();
			}
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};
	}, []);

	return (
		<div className={styles.images}>
			<div ref={imageRef1}>
				<Image src='/4-xr-suits/images/1.webp' alt='xr-suit' width={500} height={650} />
			</div>
			<div ref={imageRef2}>
				<Image src='/4-xr-suits/images/2.webp' alt='xr-suit' width={500} height={650} />
			</div>
			<div ref={imageRef3}>
				<Image src='/4-xr-suits/images/3.webp' alt='xr-suit' width={500} height={650} />
			</div>
		</div>
	);
};

export default Images;
// export default React.memo(Images);


