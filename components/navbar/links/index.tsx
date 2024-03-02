import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Links: React.FC = () => {
	return (
		<div className={`${styles.links} hide-on-mobile`}>
			<ul className=''>
				<li>
					<Link href='#mission'>
						<span>mission</span>
					</Link>
				</li>
				<li>
					<Link href='#lab'>
						<span>lab</span>
					</Link>
				</li>
				<li>
					<Link href='#suit'>
						<span>suit</span>
					</Link>
				</li>
				<li>
					<Link href='#team'>
						<span>team</span>
					</Link>
				</li>
				<li>
					<Link href='#partners'>
						<span>partners</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Links;
