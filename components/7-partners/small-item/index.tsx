import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ISmallItemProps from './interface';

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = ({ img, width, height }, ref) => {
	return (
		<div className={styles.smallItem} ref={ref}>
			<Image src={img} alt='partners' width={width} height={height} />
		</div>
	);
};

export default React.forwardRef(SmallItem);
