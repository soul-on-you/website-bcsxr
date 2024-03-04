import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ILargeItemProps from './interface';

const LargeItem: React.ForwardRefRenderFunction<HTMLDivElement, ILargeItemProps> = ({ name, nameBlur }, ref) => {
	return (
		<div className={styles.largeItem} ref={ref}>
			<h3>
				<span>VR</span> <span>HEADSET</span>
			</h3>
			<h3>
				<span>VR</span> <span>HEADSET</span>
			</h3>
			<div className={styles.imageContainer}>
				<div className={styles.pinkBlur} />
				<Image
					className=''
					src='/xr-suits/items/vr-headset.webp'
					alt='items1'
					width={6200 / 2}
					height={5800 / 2}
				/>
				<div className={styles.blueBlur} />
			</div>
		</div>
	);
};

export default React.forwardRef(LargeItem);
