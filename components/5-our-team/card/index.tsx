import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ICardProps } from './interface';

const Card: React.FC<ICardProps> = ({ name, surname, backgroundImage, jobTitle }) => {
	return (
		<div className={styles.card}>
			<h4>
				{name} <br /> {surname}
			</h4>
			<div>
				<span>{jobTitle}</span>
			</div>
			<Image className={styles.backgroundImage} src={backgroundImage} alt='bgimage' width={1000} height={2000} />
		</div>
	);
};

export default Card;
