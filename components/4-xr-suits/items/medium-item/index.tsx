import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import IMediumItemProps from './interface';

const MediumItem: React.ForwardRefRenderFunction<HTMLDivElement, IMediumItemProps> = (
	{ name, imgSrc, style, overflowHidden },
	ref,
) => {
	const imageStyles: React.CSSProperties = {
		position: 'absolute',
		minWidth: style?.width,
		height: 'auto',
		right: style?.right,
		bottom: style?.bottom,
		zIndex: -1,
		objectFit: 'cover',
	};

	const containerStyles = {
		overflow: overflowHidden ? 'hidden' : 'visible',
	};
	return (
		<div className={styles.mediumItem} style={containerStyles} ref={ref}>
			<h3>{name}</h3>
			<Image style={imageStyles} src={imgSrc} alt='items2' width={4000} height={4000} />
		</div>
	);
};

export default React.forwardRef(MediumItem);
