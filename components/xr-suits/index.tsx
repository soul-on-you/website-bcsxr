'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Images from './images';
import Items from './items';
import HeadlineCentered from '@/ui/headline-centered';
import useWindowSize from '@/hooks/useWindowSize';
import ImagesMobile from './images-mobile';

const XRSuits: React.FC = () => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	return (
		<section className={styles.xrsuits} id='suit'>
			<div className={styles.xrsuits__container}>
				<HeadlineCentered
					span1='xr'
					span2='suits'
					span3='xr'
					span4='suits'
					text='Suit of our own design With haptic feedback & biometric reading'
					colorSpan1='#2DE8E8'
					colorSpan2='#E833EC'
					colorSpan3='#2DE8E8'
					colorSpan4='#E833EC'
				/>
				{isMobile ? <ImagesMobile /> : <Images />}
				<Items />
			</div>
		</section>
	);
};

export default XRSuits;
