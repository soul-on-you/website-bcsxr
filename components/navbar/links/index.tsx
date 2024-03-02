import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Links: React.FC = () => {
	return (
		<div className={`${styles.links} hide-on-mobile`}>
			<ul className=''>
				<li>
					<Link href='#mission'>mission</Link>
				</li>
				<li>
					<Link href='#lab'>lab</Link>
				</li>
				<li>
					<Link href='#suit'>suit</Link>
				</li>
				<li>
					<Link href='#team'>team</Link>
				</li>
				<li>
					<Link href='#partners'>partners</Link>
				</li>
			</ul>
		</div>
	);
};

export default Links;
