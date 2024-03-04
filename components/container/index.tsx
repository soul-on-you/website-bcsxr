'use client';

import React, { useEffect, useState } from 'react';
import Masthead from '@/components/masthead';
import Mission from '@/components/mission';
import Proprietary from '@/components/proprietary';
import XRSuits from '@/components/xr-suits';
import OurTeam from '@/components/our-team';
import OurDivision from '@/components/our-division';
import Partners from '@/components/partners';
import Black from '@/components/black';
import Navbar from '../navbar';
import Navbar2 from '../navbar2';
import useWindowSize from '@/hooks/useWindowSize';

const Container: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;
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
