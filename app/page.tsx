// import Test from '@/components/0-test';
// import Test2 from '@/components/0-test2';

import MarqueeContainer from '@/components/5-our-team/marquee';
import React, { Suspense, lazy } from 'react';
// import Masthead from '@/components/1-masthead';
const Masthead = lazy(() => import('@/components/1-masthead'));
const Mission = lazy(() => import('@/components/2-mission'));
const Proprietary = lazy(() => import('@/components/3-proprietary'));
const XRSuits = lazy(() => import('@/components/4-xr-suits'));
const OurTeam = lazy(() => import('@/components/5-our-team'));
const OurDivision = lazy(() => import('@/components/6-our-division'));
const Partners = lazy(() => import('@/components/7-partners'));
const Black = lazy(() => import('@/components/black'));

const Home = () => {
	return (
		<main className=''>
			<Suspense fallback={<div>Loading...</div>}>
				{/* <Masthead />
				<Mission />
				<Proprietary />
				<XRSuits /> */}
				<MarqueeContainer direction='left'/>
				<MarqueeContainer direction='right'/>
				{/* <OurTeam />
				<OurDivision />
				<Partners />
				<Black /> */}
			</Suspense>
		</main>
	);
};

export default Home;
