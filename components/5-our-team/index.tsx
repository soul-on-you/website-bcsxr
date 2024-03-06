'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import gsap from 'gsap';
import Image from 'next/image';
import HeadlineCentered from '@/ui/headline-centered';
import useWindowSize from '@/hooks/useWindowSize';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import MarqueeContainer from './marquee';

const OurTeam: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	gsap.registerPlugin(ScrollTrigger);
	// const tl = useRef<gsap.core.Timeline | null>(null);
	const tl2 = useRef<gsap.core.Timeline | null>(null);
	const card1Ref = useRef<HTMLDivElement | null>(null);
	const card2Ref = useRef<HTMLDivElement | null>(null);
	const card3Ref = useRef<HTMLDivElement | null>(null);
	const card4Ref = useRef<HTMLDivElement | null>(null);
	const card5Ref = useRef<HTMLDivElement | null>(null);
	const card6Ref = useRef<HTMLDivElement | null>(null);
	const marqueeRef = useRef(null);
	const marqueeRef2 = useRef(null);
	const cards = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		cards.forEach((card, index) => {
			gsap.fromTo(
				card.current,
				{ autoAlpha: 0, y: 120 },
				{
					autoAlpha: 1,
					y: 0,
					duration: 1.4,
					ease: 'power3.out',
					delay: index * 0.1,
					scrollTrigger: {
						trigger: card.current,
						start: isMobile ? 'top-=48 bottom-=32' : 'top bottom-=250',
						toggleActions: 'play none none none',
						markers: true,
					},
				},
			);
		});

		return () => {
			// Удаление всех инстансов ScrollTrigger
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<section className={styles.ourTeam} id='team'>
			<div className={`${styles.bgImage} hide-on-mobile`}>
				<Image src='/5-our-team/pink.webp' alt='bg' width={2880 / 2} height={1600 / 2} />
			</div>

			<div className={styles.ourTeam__container}>
				<div ref={marqueeRef} className={styles.marqueeRefContainer}>
					<MarqueeContainer direction='left' />
				</div>
				<HeadlineCentered
					span1='our'
					span2='team'
					span3='our'
					span4='team'
					colorSpan1='#E833EC'
					colorSpan2='#E833EC'
					colorSpan3='#E833EC'
					colorSpan4='#E833EC'
					textShadow1='2px 2px 72px #E833EC'
					textShadow2='2px 2px 72px #E833EC'
				>
					{/* Leading specialists in the field of VR */}
				</HeadlineCentered>
				<div ref={marqueeRef2} className={styles.marqueeRefContainer}>
					<MarqueeContainer direction='right' />
				</div>

				<div className={styles.gridContainer}>
					<div ref={card1Ref}>
						<Card name='MICHAIL' surname='ZEUS' jobTitle='CEO' backgroundImage='/5-our-team/1.png' />
					</div>
					<div ref={card2Ref}>
						<Card name='YAROSLAV' surname='FERT' jobTitle='CTO' backgroundImage='/5-our-team/1.png' />
					</div>
					<div ref={card3Ref}>
						<Card name='NIKOLAY' surname='DOLGOV' jobTitle='COO' backgroundImage='/5-our-team/1.png' />
					</div>
					<div ref={card4Ref}>
						<Card name='PAVEL' surname='CHURSIN' jobTitle='PRODUCT' backgroundImage='/5-our-team/1.png' />
					</div>
					<div ref={card5Ref}>
						<Card
							name='ALEXANDER'
							surname='ZELLNER'
							jobTitle='DESIGNER'
							backgroundImage='/5-our-team/1.png'
						/>
					</div>
					<div ref={card6Ref}>
						<Card name='SERGEY' surname='ISAEV' jobTitle='PROJECT' backgroundImage='/5-our-team/1.png' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurTeam;
