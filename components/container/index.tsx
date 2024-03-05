'use client';
//контейнер создал чтобы в home компоненте не прописывать use client
import React, { useEffect, useState } from 'react';
import Navbar from '../navbar';
import Navbar2 from '../navbar2';
import Masthead from '@/components/1-masthead';
import Mission from '@/components/2-mission';
import Proprietary from '@/components/3-proprietary';
import XRSuits from '@/components/4-xr-suits';
import OurTeam from '@/components/5-our-team';
import OurDivision from '@/components/6-our-division';
import Partners from '@/components/7-partners';
import Black from '@/components/black';
import useWindowSize from '@/hooks/useWindowSize';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Container: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	return (
		<div className='overflow-x-hidden'>
			{isMobile ? <Navbar2 /> : <Navbar />}
			<Masthead />
			<Mission />
			<Proprietary />
			<XRSuits />
			<OurTeam />
			<OurDivision />
			<Partners />
			<Black />
		</div>
	);
};

export default Container;
