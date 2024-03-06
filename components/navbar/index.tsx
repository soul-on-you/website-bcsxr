'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Links from './links';
import ButtonGradient from '@/ui/button-gradient';
import Logo from '@/ui/logo';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Navbar: React.FC = () => {
	const [show, setShow] = useState<boolean>(true);
	const [lastScrollY, setLastScrollY] = useState<number>(0);
	const [background, setBackground] = useState<boolean>(false);

	const handleNavbar = () => {
		const currentScrollY = window.scrollY;

		if (window.scrollY > lastScrollY) {
			setShow(false);
		} else if (lastScrollY - currentScrollY > 32) {
			setShow(true);
		}
		if (currentScrollY > window.innerHeight * 3) {
			setBackground(true);
		} else {
			setBackground(false);
		}

		setLastScrollY(currentScrollY);
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
				className={`${styles.navbar__container} ${show ? styles.active : styles.hidden} ${background ? styles.backgroundBlack : ''}`}
			>
				<Logo />
				<Links />
				<ButtonGradient>JOIN US</ButtonGradient>
			</div>
		</nav>
	);
};

// export default Navbar;
export default React.memo(Navbar);
