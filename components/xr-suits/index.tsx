'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Images from './images';
import Items from './items';
import HeadlineCentered from '@/ui/headline-centered';

const XRSuits: React.FC = () => {
	return (
		<section className={styles.xrsuits} id='suit'>
			<div className={styles.xrsuits__container}>
				<HeadlineCentered
					span1='xr'
					span2='suits'
					span3='xr'
					span4='suits'
					text='Suit of our own design With haptic feedback & biometric reading'
				/>
				<Images />
				<Items />
			</div>
		</section>
	);
};

export default XRSuits;
