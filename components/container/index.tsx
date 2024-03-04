import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Masthead from '@/components/masthead';
import Mission from '@/components/mission';
import Proprietary from '@/components/proprietary';
import XRSuits from '@/components/xr-suits';
import OurTeam from '@/components/our-team';
import OurDivision from '@/components/our-division';
import Partners from '@/components/partners';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Container: React.FC = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);
	return (
		<main className='overflow-x-hidden'>
			{/* <Masthead />
			<Mission />
			<Proprietary />
			<XRSuits />
			<OurTeam />
			<OurDivision /> */}
			<Partners />
		</main>
	);
};

export default Container;
