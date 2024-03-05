'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import gsap from 'gsap';
import Image from 'next/image';
import HeadlineCentered from '@/ui/headline-centered';
import useWindowSize from '@/hooks/useWindowSize';

const OurTeam: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	const tl = useRef<gsap.core.Timeline | null>(null);
	const card1Ref = useRef<HTMLDivElement | null>(null);
	const card2Ref = useRef<HTMLDivElement | null>(null);
	const card3Ref = useRef<HTMLDivElement | null>(null);
	const card4Ref = useRef<HTMLDivElement | null>(null);
	const card5Ref = useRef<HTMLDivElement | null>(null);
	const card6Ref = useRef<HTMLDivElement | null>(null);
	const cards = [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref];

	useEffect(() => {
		const tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: card1Ref.current,
				start: isMobile ? 'top bottom-=32' : 'top bottom-=200',
				toggleActions: 'play none none none',
			},
		});

		tl1.fromTo(card1Ref.current, { autoAlpha: 0, y: 64 }, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' })
			.fromTo(
				card2Ref.current,
				{ autoAlpha: 0, y: 64 },
				{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
				'0.2',
			)
			.fromTo(
				card3Ref.current,
				{ autoAlpha: 0, y: 64 },
				{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
				'0.4',
			);

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: card4Ref.current,
				start: isMobile ? 'top bottom-=64' : 'top bottom-=200',
				toggleActions: 'play none none none',
			},
		});

		tl2.fromTo(card4Ref.current, { autoAlpha: 0, y: 64 }, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' })
			.fromTo(
				card5Ref.current,
				{ autoAlpha: 0, y: 64 },
				{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
				'0.2',
			)
			.fromTo(
				card6Ref.current,
				{ autoAlpha: 0, y: 64 },
				{ autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' },
				'0.4',
			);

		return () => {
			if (tl1.current && tl2.current) {
				tl1.current.kill();
				tl2.current.kill();
			}
		};
	}, []);

	return (
		<section className={styles.ourTeam} id='team'>
			<div className={`${styles.bgImage} hide-on-mobile`}>
				<Image src='/bg1.webp' alt='bg' width={2880 / 2} height={1600 / 2} />
			</div>
			<div className={styles.ourTeam__container}>
				<HeadlineCentered
					span1='our'
					span2='team'
					span3='our'
					span4='team'
					colorSpan1='#E833EC'
					colorSpan2='#E833EC'
					colorSpan3='#E833EC'
					colorSpan4='#E833EC'
				>
					Leading specialists in the field of VR
				</HeadlineCentered>

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
