import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ISmallItemProps {
	name: string;
	nameBlur: string;
}

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = ({ name, nameBlur }, ref) => {
	return (
		<div className={styles.container} ref={ref}>
			<h3>{name}</h3>
			<h3>{nameBlur}</h3>
			{/* <Image className={styles.img} src='/xr-suits/items/1.png' alt='items1' width={1000} height={1000} /> */}
		</div>
	);
};

export default React.forwardRef(SmallItem);
