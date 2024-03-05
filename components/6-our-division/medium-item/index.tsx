import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface ISmallItemProps {
	name?: string;
	nameBlur?: string;
    img: any;
}

const MediumItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = ({ name, nameBlur, img }, ref) => {
	return (
		<div className={styles.mediumItem} ref={ref}>
			<Image src={img} alt='orrd' width={710 / 2} height={200 / 2} />
		</div>
	);
};

export default React.forwardRef(MediumItem);
