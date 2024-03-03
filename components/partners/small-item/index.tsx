import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ISmallItemProps {
	name?: string;
	nameBlur?: string;
	img: string;
	width: number;
	height: number;
}

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = (
	{ name, nameBlur, img, width, height },
	ref,
) => {
	return (
		<div className={styles.smallItem} ref={ref}>
			<Image src={img} alt='partners' width={width} height={height} />
		</div>
	);
};

export default React.forwardRef(SmallItem);
