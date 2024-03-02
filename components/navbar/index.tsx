'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ButtonGradient from '@/ui/button-gradient';
import Links from './links';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Navbar: React.FC = () => {
	const buttonRef = useRef(null)
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 3400);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={styles.navbar}>
			<div className={`${styles.navbar__container} ${isScrolled ? styles.scrolled : ''}`}>
				<Link href='#'>
					<Image src='/nav/logo.webp' alt='logo' width={240 / 2} height={90 / 2} />
				</Link>
				<Links />
				<div ref={buttonRef}>
					<ButtonGradient>JOIN US</ButtonGradient>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
