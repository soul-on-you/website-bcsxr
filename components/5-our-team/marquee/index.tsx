import React from 'react';
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

interface IMarqueeContainerProps {
	direction: any;
}

const MarqueeContainer: React.FC<IMarqueeContainerProps> = ({ direction }) => {
	return (
		<div className={styles.marqueeContainer}>
			<Marquee direction={direction}>
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
