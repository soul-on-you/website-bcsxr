'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

interface IMarqueeContainerProps {
	direction: any;
}

const MarqueeContainer: React.FC<IMarqueeContainerProps> = ({ direction }) => {
	const { width } = useWindowSize();
	const isMobile = width < 768;

	return (
		<div className={styles.marqueeContainer}>
			<Marquee direction={direction} speed={isMobile ? 10 : 50}>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={2800 / 2} height={500 / 2} />
				</div>
			</Marquee>
		</div>
	);
};

export default MarqueeContainer;
// export default React.memo(MarqueeContainer);
