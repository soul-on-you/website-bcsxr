'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ButtonGradient from '@/ui/button-gradient';
import Links from './links';
import Link from 'next/link';

const Navbar2: React.FC = () => {
	const [show, setShow] = useState(true);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const controlNavbar = () => {
			if (typeof window !== 'undefined') {
				if (window.scrollY > lastScrollY.current) {
					setShow(false);
				} else {
					setShow(true);
				}

				lastScrollY.current = window.scrollY;
			}
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			return () => window.removeEventListener('scroll', controlNavbar);
		}
	}, []);

	return (
		<nav className={`${styles.navbar} ${!show ? styles.hide : ''}`}>
			<div className={`${styles.navbar__container}`}>
				<Link href='#'>
					<Image src='/nav/logo.png' alt='logo' width={800 / 2} height={800 / 2} />
				</Link>
				<Links />
				<div className={styles.buttonTest}>
					<ButtonGradient>JOIN US</ButtonGradient>
				</div>
			</div>
		</nav>
	);
};

export default Navbar2;
