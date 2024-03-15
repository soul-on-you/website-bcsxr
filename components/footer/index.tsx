'use client';
import React from 'react';
import styles from './styles.module.scss';
// import Input from './input';
import Links from './links';
import HeadlineCentered from '@/ui/headline-centered';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/ui/logo';
import Button from './button';

const Footer: React.FC = () => {
	return (
		<section className={styles.footer} id='footer'>
			<div className={styles.footer__container}>
				<div className={styles.input}>
					<HeadlineCentered
						span1='join'
						span2='us'
						colorSpan1='#FFFFFF'
						colorSpan2='#FFFFFF'
					/>
					{/* <Input /> */}
					<Button>send message</Button>
				</div>
				<div className={styles.linksLogo}>
					<Logo />
					<Links />
				</div>

				<div className={styles.copyright}>
					<p className=''>Copyright © 2024 BCSports XR LAB</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
