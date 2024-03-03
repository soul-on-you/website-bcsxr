import React from 'react';
import styles from './styles.module.scss';
import Input from './input';
import Links from './links';

const Footer: React.FC = () => {
	return (
		<section className={styles.footer} id='footer'>
			<div className={styles.footer__container}>
				<div className={styles.suka}>
					<h2>JOIN US</h2>
					<Input />
				</div>

				<Links />

				<div className='flex justify-center items-center pt-[48px]' >
					<p className='text-white text-[24px]'>Copyright © 2024 BCSports XRLAB</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
