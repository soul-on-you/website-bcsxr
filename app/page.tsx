'use client';

import Masthead from '@/components/masthead';
import styles from './page.module.scss';
import Mission from '@/components/mission';
import Proprietary from '@/components/proprietary';
import XRSuits from '@/components/xr-suits';
import Items from '@/components/xr-suits/items';
import OurTeam from '@/components/our-team';
import Card from '@/components/our-team/card';
import OurDivision from '@/components/our-division';
import Partners from '@/components/partners';
import Input from '@/components/footer/input';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Home() {
	const tl = useRef<gsap.core.Timeline | null>(null);

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const trigger = ScrollTrigger.create({
	// 		trigger: '#uebina',
	// 		start: 'top bottom',
	// 		end: '+=500',
	// 		// markers: true,
	// 		onEnter: () => {
	// 			// alert(123)
	// 			gsap.to('.su4ka', {
	// 				width: '100vw',
	// 				height: '100vh',
	// 				position: 'sticky',
	// 				top: '0',
	// 			});
	// 		},
	// 		onLeaveBack: () => {
	// 			gsap.to('.su4ka', {
	// 				clearProps: 'all',
	// 			});
	// 		},
	// 	});

	// 	return () => {
	// 		trigger.kill();
	// 	};
	// }, []);

	return (
		<main className=''>
			<div>
				{/* <div className='su4ka'>
					<Masthead />
				</div> */}
				<div className='su4ka' id='uebina'>
					<Mission />
				</div>
			</div>
			<Proprietary />
			<XRSuits />
			<OurTeam />

			<OurDivision />
			<Partners />
		</main>
	);
}
