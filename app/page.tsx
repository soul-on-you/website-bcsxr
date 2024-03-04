import React, { useEffect } from 'react';
import Masthead from '@/components/masthead';
import Mission from '@/components/mission';
import Proprietary from '@/components/proprietary';
import XRSuits from '@/components/xr-suits';
import OurTeam from '@/components/our-team';
import OurDivision from '@/components/our-division';
import Partners from '@/components/partners';

const Home = () => {
	return (
		<main className='overflow-x-hidden'>
			<Masthead />
			<Mission />
			<Proprietary />
			<XRSuits />
			<OurTeam />
			<OurDivision />
			<Partners />
		</main>
	);
};

export default Home;
