import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ICardProps } from './interface';

const Card: React.FC<ICardProps> = ({ name, surname, backgroundImage, jobTitle }) => {
	return (
		<div className={styles.card} style={{ backgroundImage: `url(${backgroundImage})` }}>
			<h4>
				{name} <br /> {surname}
			</h4>
			<div>
				<span>{jobTitle}</span>
			</div>
		</div>
	);
};

export default Card;
