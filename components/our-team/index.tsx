import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const OurTeam: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.refresh();

		gsap.utils.toArray(`.${styles.gridContainer} > div`).forEach((card, index) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					// stagger: 0.2,
					ease: 'power2.out',
					delay: index * 0.2,
					scrollTrigger: {
						trigger: card,
						start: 'top bottom-=100',
						toggleActions: 'play none none none',
						// scrub: 1,
					},
				},
			);
		});
	}, []);
	return (
		<section className={styles.ourTeam} id='team'>
			<div className={styles.ourTeam__container}>
				<div className={styles.headline}>
					<h2>Our Team</h2>
					<h5>Leading specialists in the field of VR</h5>
				</div>
				<div className={styles.gridContainer}>
					<Card name='MICHAIL' surname='ZEUS' jobTitle='CEO' backgroundImage='/our-team/1.png' />
					<Card name='YAROSLAV' surname='FERT' jobTitle='CTO' backgroundImage='/our-team/1.png' />
					<Card name='NIKOLAY' surname='DOLGOV' jobTitle='COO' backgroundImage='/our-team/1.png' />
					<Card name='PAVEL' surname='CHURSIN' jobTitle='PRODUCT' backgroundImage='/our-team/1.png' />
					<Card name='ALEXANDER' surname='ZELLNER' jobTitle='DESIGNER' backgroundImage='/our-team/1.png' />
					<Card name='SERGEY' surname='ISAEV' jobTitle='PROJECT' backgroundImage='/our-team/1.png' />
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
