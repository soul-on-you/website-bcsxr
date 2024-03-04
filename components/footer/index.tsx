'use client';
import React from 'react';
import styles from './styles.module.scss';
import Input from './input';
import Links from './links';
import HeadlineCentered from '@/ui/headline-centered';

const Footer: React.FC = () => {
	return (
		<section className={styles.footer} id='footer'>
			<div className={styles.footer__container}>
				<div className={styles.suka}>
					<HeadlineCentered
						span1='join'
						span2='us'
						span3='join'
						span4='us'
						colorSpan1='#FFFFFF'
						colorSpan2='#FFFFFF'
						// colorSpan3='#FFFFFF'
						// colorSpan4='#FFFFFF'
					/>
					<Input />
				</div>

				<Links />

				<div className='flex justify-center items-center pt-[48px]'>
					<p className='text-white text-[24px]'>Copyright © 2024 BCSports XRLAB</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
