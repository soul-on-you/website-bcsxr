// import Test from '@/components/0-test';
// import Test2 from '@/components/0-test2';
import MastheadTest from '@/components/1-masthead-test';
import React, { Suspense, lazy } from 'react';

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
		<main className='overflow-x-hidden'>
			<Suspense fallback={<div>Loading...</div>}>
				{/* <Test /> */}
				{/* <Test2 /> */}
				<MastheadTest />
				{/* <Masthead /> */}
				<Mission />
				<Proprietary />
				<XRSuits />
				<OurTeam />
				<OurDivision />
				<Partners />
				<Black />
			</Suspense>
		</main>
	);
};

export default Home;
