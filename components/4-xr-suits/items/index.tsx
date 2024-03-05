import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SmallItem from './small-item';
import MediumItem from './medium-item';
import LargeItem from './large-item';
import useWindowSize from '@/hooks/useWindowSize';

const Items: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;
	gsap.registerPlugin(ScrollTrigger);

	const item1Ref = useRef<HTMLDivElement | null>(null);
	const item2Ref = useRef<HTMLDivElement | null>(null);
	const item3Ref = useRef<HTMLDivElement | null>(null);
	const item4Ref = useRef<HTMLDivElement | null>(null);
	const item5Ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: item1Ref.current,
				start: isMobile ? 'top-=32 bottom' : 'top bottom-=200',
				toggleActions: 'play none none none',
			},
		});

		tl1.fromTo(
			item1Ref.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
		).fromTo(
			item2Ref.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
			'0.2',
		);

		// Анимация для второго контейнера
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: item3Ref.current,
				// start: 'top bottom-=200',
				start: isMobile ? 'top-=64 bottom' : 'top bottom-=200',
				toggleActions: 'play none none reverse',
			},
		});

		tl2.fromTo(
			item3Ref.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
		).fromTo(
			item4Ref.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
			'0.2',
		);

		// Анимация для третьего контейнера
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: item5Ref.current,
				start: isMobile ? 'top-=96 bottom' : 'top bottom-=200',
				// start: 'top bottom-=200',
				toggleActions: 'play none none reverse',
			},
		});

		tl3.fromTo(
			item5Ref.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
		);

		return () => {
			tl1.current?.kill();
			tl2.current?.kill();
			tl3.current?.kill();
			// ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};
	}, []);

	return (
		<div className={styles.items}>
			<div className={styles.container1}>
				<SmallItem
					ref={item1Ref}
					name='haptic shin guards'
					nameBlur='haptic shin guards'
					imgSrc='/4-xr-suits/items/haptic.webp'
					style={
						isMobile
							? { width: '59.375vw', right: '-6.875vw', bottom: '-10.625vw' }
							: { width: '20.833vw', right: '-2.569vw', bottom: '-3.889vw' }
					}
					overflowHidden={false}
				/>
				<MediumItem
					ref={item2Ref}
					name='ai cleats'
					nameBlur='ai cleats'
					imgSrc='/4-xr-suits/items/ai-cleats.webp'
					style={
						isMobile
							? { width: '111.875vw', right: '-17.188vw', bottom: '-1.875vw' }
							: { width: '43.833vw', right: '-2.569vw', bottom: '-3.889vw' }
					}
					overflowHidden={true}
				/>
			</div>
			<div className={styles.container2}>
				<MediumItem
					ref={item3Ref}
					name='goal keeper gloves'
					nameBlur='goal keeper gloves'
					imgSrc='/4-xr-suits/items/goalkeeper.webp'
					style={
						isMobile
							? { width: '103.125vw', right: '-11.875vw', bottom: '-6.25vw' }
							: { width: '52.083vw', right: '0.694vw', bottom: '-3.194vw' }
					}
					overflowHidden={false}
				/>
				<SmallItem
					ref={item4Ref}
					name='xr suit'
					nameBlur='xr suit'
					imgSrc='/4-xr-suits/items/xr-suit.webp'
					style={
						isMobile
							? { width: '81.25vw', right: '5.313vw', bottom: '-118.75vw' }
							: { width: '20.833vw', right: '4.792vw', bottom: '-24.722vw' }
					}
					overflowHidden={true}
				/>
			</div>
			<div className={styles.container3}>
				<LargeItem ref={item5Ref} />
			</div>
		</div>
	);
};

export default Items;
