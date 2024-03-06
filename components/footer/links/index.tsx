import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Links: React.FC = () => {
	return (
		<ul className={styles.links}>
			<li>
				<Link href='https://blockchain-sports.gitbook.io/whitepaper/' target='_blank' rel='noopener noreferrer'>
					whitepaper
				</Link>
			</li>
			<li>
				<Link href='https://storage.googleapis.com/bcsports-bucket/ecosystem-static/docs/T&C.pdf'>
					terms & conditions
				</Link>
			</li>
			<li>
				<Link href='https://storage.googleapis.com/bcsports-bucket/ecosystem-static/docs/Privacy_Policy.pdf'>
					privacy policy
				</Link>
			</li>
		</ul>
	);
};

export default Links;
