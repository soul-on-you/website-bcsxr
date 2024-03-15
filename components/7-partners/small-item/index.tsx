import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ISmallItemProps from './interface';
import Link from 'next/link';

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = (
	{ img, width, height, href },
	ref,
) => {
	return (
		<div className={styles.smallItem} ref={ref}>
			<Link href={href} target='_blank' rel='noopener noreferrer'>
				<Image src={img} alt='partners' width={width} height={height} />
			</Link>
		</div>
	);
};

export default React.forwardRef(SmallItem);
