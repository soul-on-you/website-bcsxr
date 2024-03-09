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

	const tl1 = useRef<gsap.core.Timeline | null>(null);
	const tl2 = useRef<gsap.core.Timeline | null>(null);
	const tl3 = useRef<gsap.core.Timeline | null>(null);
	const item1Ref = useRef<HTMLDivElement | null>(null);
	const item2Ref = useRef<HTMLDivElement | null>(null);
	const item3Ref = useRef<HTMLDivElement | null>(null);
	const item4Ref = useRef<HTMLDivElement | null>(null);
	const item5Ref = useRef<HTMLDivElement | null>(null);

	// useEffect(() => {
	// 	tl1.current = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: item1Ref.current,
	// 			start: isMobile ? 'top-=48 bottom-=32' : 'top bottom-=250',
	// 			end: 'bottom top',
	// 			toggleActions: 'play none none none',
	// 		},
	// 	});

	// 	tl1.current
	// 		.fromTo(
	// 			item1Ref.current,
	// 			{ autoAlpha: 0, y: 120 },
	// 			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
	// 		)
	// 		.fromTo(
	// 			item2Ref.current,
	// 			{ autoAlpha: 0, y: 120 },
	// 			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
	// 			'0.4',
	// 		);

	// 	// Анимация для второго контейнера
	// 	tl2.current = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: item3Ref.current,
	// 			start: isMobile ? 'top-=48 bottom-=32' : 'top bottom-=250',
	// 			end: 'bottom top',
	// 			toggleActions: 'play none none none',
	// 		},
	// 	});

	// 	tl2.current
	// 		.fromTo(
	// 			item3Ref.current,
	// 			{ autoAlpha: 0, y: 120 },
	// 			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
	// 		)
	// 		.fromTo(
	// 			item4Ref.current,
	// 			{ autoAlpha: 0, y: 120 },
	// 			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
	// 			'0.4',
	// 		);

	// 	// Анимация для третьего контейнера
	// 	tl3.current = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: item5Ref.current,
	// 			start: isMobile ? 'top-=48 bottom-=32' : 'top bottom-=250',
	// 			end: 'bottom top',
	// 			toggleActions: 'play none none none',
	// 		},
	// 	});

	// 	tl3.current.fromTo(
	// 		item5Ref.current,
	// 		{ autoAlpha: 0, y: 120 },
	// 		{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
	// 	);

	// 	return () => {
	// 		tl1.current?.kill();
	// 		tl2.current?.kill();
	// 		tl3.current?.kill();
	// 		// ScrollTrigger.getAll().forEach((instance) => instance.kill());
	// 	};
	// }, []);

	return (
		<div className={styles.items}>
			<div className={styles.container1}>
				<SmallItem
					ref={item1Ref}
					name='haptic shin guards'
					imgSrc='/4-xr-suits/items/haptic.webp'
					style={
						isMobile
							? { width: '50.375vw', right: '-2.875vw', bottom: '-4.625vw' }
							: { width: '17.833vw', right: '-1.569vw', bottom: '-0.889vw' }
					}
					overflowHidden={false}
				/>
				<MediumItem
					ref={item2Ref}
					name='ai cleats'
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
					imgSrc='/4-xr-suits/items/goalkeeper.webp'
					style={
						isMobile
							? { width: '92.125vw', right: '-2.875vw', bottom: '-6.25vw' }
							: { width: '50.083vw', right: '0.069vw', bottom: '-0.625vw' }
					}
					overflowHidden={false}
				/>

				<SmallItem
					ref={item4Ref}
					name='xr suit'
					// imgSrc='/4-xr-suits/items/haptic.webp'
					imgSrc='/4-xr-suits/items/xr-suit.webp'
					style={
						isMobile
							? { width: '74.375vw', right: '8.875vw', bottom: '-72.625vw' }
							: { width: '20.833vw', right: '4.569vw', bottom: '-24.889vw' }
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

// export default React.memo(Items);
export default Items;
