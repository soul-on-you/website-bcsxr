import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ButtonGradient from '@/ui/button-gradient';
import Links from './links';
import Link from 'next/link';

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__container}>
				<Link href='#'>
					<Image src='/nav/logo.webp' alt='logo' width={240 / 2} height={90 / 2} />
				</Link>
				<Links />
				<div>
					<ButtonGradient>JOIN US</ButtonGradient>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
