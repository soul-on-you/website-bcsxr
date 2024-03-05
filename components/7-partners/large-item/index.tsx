import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ILargeItemProps from './interface';

const LargeIte: React.ForwardRefRenderFunction<HTMLDivElement, ILargeItemProps> = ({ img, width, height }, ref) => {
	return (
		<div className={styles.largeItem} ref={ref}>
			<Image src={img} alt='partners' width={width} height={height} />
		</div>
	);
};

export default React.forwardRef(LargeIte);
