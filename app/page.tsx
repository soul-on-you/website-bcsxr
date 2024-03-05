import React from 'react';
import Masthead from '@/components/1-masthead';
import Mission from '@/components/2-mission';
import Proprietary from '@/components/3-proprietary';
import XRSuits from '@/components/4-xr-suits';
import OurTeam from '@/components/5-our-team';
import OurDivision from '@/components/6-our-division';
import Partners from '@/components/7-partners';
import Black from '@/components/black';

const Home = () => {
	return (
		<main className='overflow-x-hidden'>
			{/* <Masthead />
			<Mission />
			<Proprietary />
			<XRSuits />
			<OurTeam />
			<OurDivision /> */}
			<Partners />
			<Black />
		</main>
	);
};

export default Home;
