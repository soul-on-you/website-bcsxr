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

const LargeItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = (
	{ name, nameBlur, img, href },
	ref,
) => {
	return (
		<div className={styles.largeItem} ref={ref}>
			<Link href={href} target='_blank' rel='noopener noreferrer'>
				<Image src={img} alt='orrd' width={900 / 2} height={222 / 2} />
			</Link>
		</div>
	);
};

export default React.forwardRef(LargeItem);
