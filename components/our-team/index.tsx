import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const OurTeam: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const card1Ref = useRef<HTMLDivElement | null>(null);
	const card2Ref = useRef<HTMLDivElement | null>(null);
	const card3Ref = useRef<HTMLDivElement | null>(null);
	const card4Ref = useRef<HTMLDivElement | null>(null);
	const card5Ref = useRef<HTMLDivElement | null>(null);
	const card6Ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		tl.current = gsap.timeline();
		const cards = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

		cards.forEach((card, index) => {
			if (card.current) {
				gsap.fromTo(
					card.current,
					{ autoAlpha: 0, y: 120 },
					{
						autoAlpha: 1,
						y: 0,
						ease: 'power3.out',
						duration: 4,
						scrollTrigger: {
							trigger: card.current,
							start: 'top bottom-=200',
							toggleActions: 'play none none reverse',
							// markers: true,
						},
						delay: index * 0.1,
					},
				);
			}
		});

		// return () => {
		// 	if (tl.current) {
		// 		if (tl.current.scrollTrigger) {
		// 			tl.current.scrollTrigger.kill();
		// 		}
		// 		tl.current.kill();
		// 	}
		// };
	}, []);

	return (
		<section className={styles.ourTeam} id='team'>
			<div className={styles.ourTeam__container}>
				<div className={styles.headline}>
					<h2>Our Team</h2>
					<h5>Leading specialists in the field of VR</h5>
				</div>
				<div className={styles.gridContainer}>
					<div ref={card1Ref}>
						<Card name='MICHAIL' surname='ZEUS' jobTitle='CEO' backgroundImage='/our-team/1.png' />
					</div>
					<div ref={card2Ref}>
						<Card name='YAROSLAV' surname='FERT' jobTitle='CTO' backgroundImage='/our-team/1.png' />
					</div>
					<div ref={card3Ref}>
						<Card name='NIKOLAY' surname='DOLGOV' jobTitle='COO' backgroundImage='/our-team/1.png' />
					</div>
					<div ref={card4Ref}>
						<Card name='PAVEL' surname='CHURSIN' jobTitle='PRODUCT' backgroundImage='/our-team/1.png' />
					</div>
					<div ref={card5Ref}>
						<Card
							name='ALEXANDER'
							surname='ZELLNER'
							jobTitle='DESIGNER'
							backgroundImage='/our-team/1.png'
						/>
					</div>
					<div ref={card6Ref}>
						<Card name='SERGEY' surname='ISAEV' jobTitle='PROJECT' backgroundImage='/our-team/1.png' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
