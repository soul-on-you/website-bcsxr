import React from 'react';
import styles from './styles.module.scss';
import ITitleProps from './interface';
import Image from 'next/image';

const Title: React.ForwardRefRenderFunction<HTMLDivElement, ITitleProps> = ({
	firstH1Ref,
	secondH1Ref,
	thirdH1Ref,
}) => {
	return (
		<div className={styles.title}>
			<h1 ref={firstH1Ref} style={{ willChange: 'transform, opacity' }}>
				<span>new format</span>
				<Image src='/blur-pink.webp' alt='blur-pink' width={1800 / 2} height={500 / 2} />
			</h1>
			<br />
			<h1 ref={secondH1Ref} style={{ willChange: 'transform, opacity' }}>
				<span>of competitive</span>
			</h1>
			<br />
			<h1 ref={thirdH1Ref} style={{ willChange: 'transform, opacity' }}>
				<span>sport</span>
				<Image src='/blur-blue.webp' alt='blur-pink' width={1800 / 2} height={500 / 2} />
			</h1>
		</div>
	);
};

// export default React.forwardRef(Title);
export default React.memo(React.forwardRef(Title));
