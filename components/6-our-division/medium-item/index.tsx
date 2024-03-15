import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface ISmallItemProps {
	name?: string;
	nameBlur?: string;
	img: any;
	href: string;
}

const MediumItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = (
	{ name, nameBlur, img, href },
	ref,
) => {
	return (
		<div className={styles.mediumItem} ref={ref}>
			<Link href={href} target='_blank' rel='noopener noreferrer'>
				<Image src={img} alt='orrd' width={710 / 2} height={200 / 2} />
			</Link>
		</div>
	);
};

export default React.forwardRef(MediumItem);
