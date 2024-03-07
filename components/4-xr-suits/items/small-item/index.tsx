import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ISmallItemProps from './interface';

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = (
	{ name, imgSrc, style, overflowHidden },
	ref,
) => {
	const imageStyles: React.CSSProperties = {
		position: 'absolute',
		maxWidth: style?.width,
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
		<div className={styles.smallItem} style={containerStyles} ref={ref}>
			<h3>{name}</h3>
			<Image style={imageStyles} src={imgSrc} alt='image' width={1500} height={1500} />
		</div>
	);
};

export default React.forwardRef(SmallItem);
