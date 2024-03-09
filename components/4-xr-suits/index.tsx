'use client';

import React from 'react';
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
					span2='suit'
					span3='xr'
					span4='suit'
					textShadow1='2px 2px 72px #2DE8E8'
					textShadow2='2px 2px 72px #E833EC'
					colorSpan1='#2DE8E8'
					colorSpan2='#E833EC'
					colorSpan3='#2DE8E8'
					colorSpan4='#E833EC'
				>
					Suit of our own design
					<br />
					With haptic feedback & biometric reading
				</HeadlineCentered>
				{/* {isMobile ? <ImagesMobile /> : <Images />} */}
				<Items />
			</div>
		</section>
	);
};

export default XRSuits;
// export default React.memo(XRSuits);
