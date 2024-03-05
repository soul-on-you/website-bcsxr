import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ISmallItemProps {
	name?: string;
	nameBlur?: string;
	img: any;
}

const LargeItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = ({ name, nameBlur, img }, ref) => {
	return (
		<div className={styles.largeItem} ref={ref}>
			<Image src={img} alt='orrd' width={900 / 2} height={222 / 2} />
		</div>
	);
};

export default React.forwardRef(LargeItem);
