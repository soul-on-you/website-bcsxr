import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ILargeItemProps from './interface';

const LargeItem: React.ForwardRefRenderFunction<HTMLDivElement, ILargeItemProps> = (props, ref) => {
	return (
		<div className={styles.largeItem} ref={ref}>
			<h3>
				<span>vr</span> <span>headset</span>
			</h3>

			<div className={styles.imageContainer}>
				<div className={styles.pinkBlur} />
				<Image
					className=''
					src='/4-xr-suits/items/vr-headset.webp'
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
