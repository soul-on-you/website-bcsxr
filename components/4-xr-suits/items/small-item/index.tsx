import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import ISmallItemProps from './interface';

const SmallItem: React.ForwardRefRenderFunction<HTMLDivElement, ISmallItemProps> = (
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
		<div className={styles.smallItem} style={containerStyles} ref={ref}>
			<h3>{name}</h3>
			<h3>{nameBlur}</h3>
			<div style={dynamicStyles}>
				<Image src={imgSrc} alt='items1' width={1000} height={1000} />
			</div>
		</div>
	);
};

export default React.forwardRef(SmallItem);
