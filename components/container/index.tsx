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

const Container: React.FC = () => {
	return (
		<div className='overflow-x-hidden'>
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
