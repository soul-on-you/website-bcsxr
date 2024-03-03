import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SmallItem from './small-item';
import MediumItem from './medium-item';
import LargeItem from './large-item';

const Stuff: React.FC = () => {
	const item1Ref = useRef<HTMLDivElement | null>(null);
	const item2Ref = useRef<HTMLDivElement | null>(null);
	const item3Ref = useRef<HTMLDivElement | null>(null);
	const item4Ref = useRef<HTMLDivElement | null>(null);
	const item5Ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Анимация для второго контейнера
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: item1Ref.current,
				start: 'top bottom-=200',
				toggleActions: 'play none none reverse',
				// markers: true,
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
				start: 'top bottom-=200',
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

		// Анимация для второго контейнера
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: item5Ref.current,
				start: 'top bottom-=200',
				toggleActions: 'play none none reverse',
			},
		});

		tl3.fromTo(
			item5Ref.current,
			{ autoAlpha: 0, y: 64 },
			{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
		);
	}, []);

	return (
		<div className={styles.items}>
			<div className={styles.container1}>
				<SmallItem ref={item1Ref} name='haptic shin guards' nameBlur='haptic shin guards' />
				<MediumItem ref={item2Ref} name='ai cleats' nameBlur='ai cleats' />
			</div>
			<div className={styles.container2}>
				<MediumItem ref={item3Ref} name='goal keeper gloves' nameBlur='goal keeper gloves' />
				<SmallItem ref={item4Ref} name='xr suit' nameBlur='xr suit' />
			</div>
			<div className={styles.container3}>
				<LargeItem ref={item5Ref}/>
			</div>
		</div>
	);
};

export default Stuff;
