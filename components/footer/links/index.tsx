import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Links: React.FC = () => {
	return (
		<div className={styles.links}>
			<ul>
				<li>
					<span>company</span>
				</li>
				<li>
					<Link href='#'>how it works</Link>
				</li>
				<li>
					<Link href='#'>pricing</Link>
				</li>
				<li>
					<Link href='#'>demo</Link>
				</li>
			</ul>
			<ul>
				<li>
					<span>resources</span>
				</li>
				<li>
					<Link href='#'>blog</Link>
				</li>
				<li>
					<Link href='#'>blog</Link>
				</li>
				<li>
					<Link href='#'>blog</Link>
				</li>
			</ul>
			<ul>
				<li>
					<span>about</span>
				</li>
				<li>
					<Link href='#'>terms & conditions</Link>
				</li>
				<li>
					<Link href='#'>privacy policy</Link>
				</li>
			</ul>
		</div>
	);
};

export default Links;
