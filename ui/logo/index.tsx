import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
	return (
		<Link href='#'>
			<Image src='/nav/logo.webp' alt='logo' width={320 / 2} height={190 / 2} />
		</Link>
	);
};

export default Logo;
