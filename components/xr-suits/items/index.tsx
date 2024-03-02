import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Items: React.FC = () => {
	const item1Ref = useRef(null);
	const item2Ref = useRef(null);
	const item3Ref = useRef(null);
	const item4Ref = useRef(null);
	const item5Ref = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	
		// Анимация для первого контейнера
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: item1Ref.current.parentElement,
				start: 'top bottom-=200',
				toggleActions: 'play none none reverse',
			},
		});
	
		tl1.fromTo(item1Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 })
			.fromTo(item2Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0'); // Убираем задержку
	
		// Анимация для второго контейнера
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: item3Ref.current.parentElement,
				start: 'top bottom-=200',
				toggleActions: 'play none none reverse',
			},
		});
	
		tl2.fromTo(item3Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 })
			.fromTo(item4Ref.current, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 }, '+=0'); // Убираем задержку для item4
	
		// Анимация для третьего контейнера
		gsap.fromTo(item5Ref.current, { autoAlpha: 0, y: 50 }, {
			autoAlpha: 1,
			y: 0,
			scrollTrigger: {
				trigger: item5Ref.current,
				start: 'top bottom-=200',
				toggleActions: 'play none none reverse',
			},
			duration: 1
		});
	}, []);
	

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	// Анимируем элементы по одному
	// 	gsap.utils.toArray('.item').forEach((item: any) => {
	// 		gsap.fromTo(
	// 			item,
	// 			{ autoAlpha: 0, y: 100 },
	// 			{
	// 				autoAlpha: 1,
	// 				y: 0,
	// 				scrollTrigger: {
	// 					trigger: item,
	// 					start: 'top bottom-=200',
	// 					end: 'bottom top',
	// 					toggleActions: 'play none none reverse',
	// 					scrub: 2,
	// 				},
	// 				duration: 1.5,
	// 			},
	// 		);
	// 	});
	// }, []);

	return (
		<div className={styles.items}>
			<div className={styles.container1}>
				<div ref={item1Ref}>
					<h3>
						HAPTIC SHIN <br /> GUARDS
					</h3>
					<Image src='/xr-suits/items/1.png' alt='items1' width={1000} height={1000} />
				</div>
				<div ref={item2Ref}>
					<h3>AI CLEATS</h3>
					<Image src='/xr-suits/items/2.png' alt='items2' width={1000} height={1000} />
				</div>
			</div>
			<div className={styles.container2}>
				<div ref={item3Ref}>
					<h3>GOAL KEEPER GLOVES</h3>
					<Image src='/xr-suits/items/3.png' alt='items3' width={1000} height={1000} />
				</div>
				<div ref={item4Ref}>
					<h3>XR SUIT</h3>
					<Image src='/xr-suits/items/4.png' alt='items4' width={1000} height={1000} />
				</div>
			</div>
			<div className={styles.container3}>
				<div ref={item5Ref}>
					<h3>VR HEADSET</h3>
					<Image src='/xr-suits/items/5.png' alt='items5' width={1000} height={1000} />
				</div>
			</div>
		</div>
	);
};

export default Items;
