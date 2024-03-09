'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

interface IMarqueeContainerProps {
	direction?: any;
}

const MarqueeContainer: React.FC<IMarqueeContainerProps> = ({ direction }) => {
	// const { width } = useWindowSize();
	// const isMobile = width < 768;

	return (
		<div className={styles.marqueeContainer}>
			<Marquee >
				<div className={styles.imageWrapper}>
					<img src='/5-our-team/line.webp' alt='line' />
				</div>
				<div className={styles.imageWrapper}>
					<img src='/5-our-team/line.webp' alt='line' />
				</div>
				<div className={styles.imageWrapper}>
					<img src='/5-our-team/line.webp' alt='line' />
				</div>
			</Marquee>
		</div>
	);
};

// export default MarqueeContainer;
export default React.memo(MarqueeContainer);
