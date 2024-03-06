import { CSSProperties } from 'react';

export default interface ISmallItemProps {
	name: string;
	imgSrc: string;
	style: CSSProperties;
	overflowHidden: boolean;
}
