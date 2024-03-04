import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import IMediumItemProps from './interface';

const MediumItem: React.ForwardRefRenderFunction<HTMLDivElement, IMediumItemProps> = (
	{ name, nameBlur, imgSrc, style, overflowHidden },
	ref,
) => {
	const dynamicStyles: React.CSSProperties = {
		position: 'absolute',
		width: style?.width,
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
			<h3>{nameBlur}</h3>
			<div style={dynamicStyles}>
				<Image  src={imgSrc} alt='items2' width={2000} height={2000} />
			</div>
		</div>
	);
};

export default React.forwardRef(MediumItem);
