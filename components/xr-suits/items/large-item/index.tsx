import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ISmallItemProps {
	name?: string;
	nameBlur?: string;
}

const LargeItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = ({ name, nameBlur }, ref) => {
	return (
		<div className={styles.container} ref={ref}>
			<h3>
				<span>VR</span> <span>HEADSET</span>
			</h3>
			<h3>
				<span>VR</span> <span>HEADSET</span>
			</h3>
			{/* <Image src='/xr-suits/items/5.png' alt='items5' width={1000} height={1000} /> */}
		</div>
	);
};

export default React.forwardRef(LargeItem);
