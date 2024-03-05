'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Links from './links';
import ButtonGradient from '@/ui/button-gradient';
import Logo from '@/ui/logo';

const Navbar: React.FC = () => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [background, setBackground] = useState(false);

	const handleNavbar = () => {
		if (window.scrollY > lastScrollY) {
			setShow(false);
		} else {
			setShow(true);
		}
		if (window.scrollY > window.innerHeight * 3) {
			setBackground(true);
		} else {
			setBackground(false);
		}

		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavbar);

		return () => {
			window.removeEventListener('scroll', handleNavbar);
		};
	}, [lastScrollY]);

	return (
		<nav className={styles.navbar}>
			<div
				className={`${styles.navbar__container} ${show ? styles.active : styles.hidden} ${background ? styles.backgroundRed : ''}`}
			>
				<Logo />
				<Links />
				<div className={styles.buttonTest}>
					<ButtonGradient>JOIN US</ButtonGradient>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
