import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Links: React.FC = () => {
	return (
		<ul className={styles.links}>
			<li>
				<Link href='#'>whitepaper</Link>
			</li>
			<li>
				<Link href='#'>terms & conditions</Link>
			</li>
			<li>
				<Link href='#'>privacy policy</Link>
			</li>
		</ul>
	);
};

export default Links;
