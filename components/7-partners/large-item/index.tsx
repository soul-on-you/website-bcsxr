import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ILargeItemProps from './interface';
import Link from 'next/link';

const LargeItem: React.ForwardRefRenderFunction<HTMLDivElement, ILargeItemProps> = (
	{ img, width, height, href },
	ref,
) => {
	return (
		<div className={styles.largeItem} ref={ref}>
			<Link href={href} target='_blank' rel='noopener noreferrer'>
				<Image src={img} alt='partners' width={width} height={height} />
			</Link>
		</div>
	);
};

export default React.forwardRef(LargeItem);
