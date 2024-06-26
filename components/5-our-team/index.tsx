'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import gsap from 'gsap';
import Image from 'next/image';
import HeadlineCentered from '@/ui/headline-centered';
import useWindowSize from '@/hooks/useWindowSize';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import MarqueeContainer from './marquee';
import { NULL } from 'sass';

const OurTeam: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;
	const cardsContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (cardsContainerRef.current) {
			// const items = gsap.utils.toArray(cardsContainerRef.current.children);
			const items = gsap.utils.toArray(cardsContainerRef.current.children) as Element[];

			items.forEach((card, index) => {
				gsap.fromTo(
					card,
					{ autoAlpha: 0, y: 120 },
					{
						autoAlpha: 1,
						y: 0,
						duration: 1.4,
						ease: 'power3.out',
						delay: index * 0.08,
						scrollTrigger: {
							trigger: card,
							start: isMobile ? 'top-=48 bottom-=32' : 'top bottom-=250',
							end: 'bottom top',
							toggleActions: 'play none none none',
						},
					},
				);
			});			
		}

		return () => {
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	}, []);

	return (
		<section className={styles.ourTeam} id='team'>
			<div className={styles.ourTeam__container}>
				<div className={`${styles.marqueeRefContainer} ${styles.marqueeRefContainer1}`}>
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
				<div className={`${styles.marqueeRefContainer} ${styles.marqueeRefContainer2}`}>
					<MarqueeContainer direction='right' />
				</div>

				<div className={styles.gridContainer} ref={cardsContainerRef}>
					<div>
						<Card
							name='DMITRY'
							surname='SAKSONOV'
							jobTitle='CEO'
							backgroundImage='/5-our-team/dmitry_saksonov.webp'
						/>
					</div>
					<div>
						<Card
							name='DMITRY'
							surname='Mikhalchuk'
							jobTitle='Biz Dev'
							backgroundImage='/5-our-team/dmitry_mikhalchuk.webp'
						/>
					</div>
					<div>
						<Card
							name='MICHAIL'
							surname='POLYAKOV'
							jobTitle='COO'
							backgroundImage='/5-our-team/polyakov.webp'
						/>
					</div>
					<div>
						<Card
							name='YAROSLAV'
							surname='FERTYAKOV'
							jobTitle='CTO'
							backgroundImage='/5-our-team/fertyakov.webp'
						/>
					</div>
					{/* <div>
						<Card
							name='ALEXEY'
							surname='ISAEV'
							jobTitle='LEAD UNITY'
							backgroundImage='/5-our-team/alexey_isaev.webp'
						/>
					</div> */}
					<div>
						<Card
							name='NIKOLAY'
							surname='DOLGOV'
							jobTitle='PRODUCT'
							backgroundImage='/5-our-team/dolgov.webp'
						/>
					</div>
					<div>
						<Card
							name='SERGEY'
							surname='ISAEV'
							jobTitle='PRODUCT'
							backgroundImage='/5-our-team/isaev.webp'
						/>
					</div>
					<div>
						<Card
							name='PAVEL'
							surname='CHURSIN'
							jobTitle='PRODUCT'
							backgroundImage='/5-our-team/chursin.webp'
						/>
					</div>
					<div>
						<Card
							name='ALEXANDER'
							surname='ZELLNER'
							jobTitle='DESIGNER'
							backgroundImage='/5-our-team/zellner.webp'
						/>
					</div>
					{isMobile ? null : (
						<div>
							<Card
								name='ELENA'
								surname='GRACHEVA'
								jobTitle='PROJECT'
								backgroundImage='/5-our-team/elena_gracheva.webp'
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

// export default React.memo(OurTeam);
export default OurTeam;
