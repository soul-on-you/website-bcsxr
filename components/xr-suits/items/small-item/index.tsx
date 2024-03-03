import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ISmallItemProps {
	name: string;
	nameBlur: string;
}

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = ({ name, nameBlur }, ref) => {
	return (
		<div className={styles.smallItem} ref={ref}>
			<h3>{name}</h3>
			<h3>{nameBlur}</h3>
			<Image className='' src='/xr-suits/items/haptic.webp' alt='items1' width={1000} height={1000} />
		</div>
	);
};

export default React.forwardRef(SmallItem);
