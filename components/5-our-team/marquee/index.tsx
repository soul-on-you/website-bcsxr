'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

interface IMarqueeContainerProps {
	direction: 'left' | 'right';
}

const MarqueeContainer: React.FC<IMarqueeContainerProps> = ({ direction }) => {
	return (
		<div className={styles.marqueeContainer}>
			<Marquee direction={direction}>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={1500 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={1500 / 2} height={500 / 2} />
				</div>
				<div className={styles.imageWrapper}>
					<Image src='/5-our-team/line.svg' alt='line' width={1500 / 2} height={500 / 2} />
				</div>
			</Marquee>
		</div>
	);
};

export default MarqueeContainer;
// export default React.memo(MarqueeContainer);
