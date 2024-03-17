import React from 'react';
import styles from './styles.module.scss'

const Copyright: React.FC = () => {
	return (
		<div className={styles.copyright}>
			<span>©2024 Blockchain Sports</span>
			<p>
				Limited, registration number 238747 (“Company”), address:
				<br />
				lle Du Port, House Of Francis, room 303, Mahe, Seychells
			</p>
		</div>
	);
};

export default Copyright;
