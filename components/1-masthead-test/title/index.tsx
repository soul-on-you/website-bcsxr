import React from 'react';
import styles from './styles.module.scss';
import ITitleProps from './interface';
import Image from 'next/image';

const Title: React.ForwardRefRenderFunction<HTMLDivElement, ITitleProps> = ({
	invincibleRef,
	firstH1Ref,
	secondH1Ref,
	thirdH1Ref,
}) => {
	return (
		<div className={styles.title}>
			<h1 ref={invincibleRef} style={{ willChange: 'transform, opacity' }}>
				{/* as */}
			</h1>
			<h1 ref={firstH1Ref} style={{ willChange: 'transform, opacity' }}>
				new format
			</h1>
			<br />

			<h1 ref={secondH1Ref} style={{ willChange: 'transform, opacity' }}>
				of competitive
			</h1>
			<br />

			<h1 ref={thirdH1Ref} style={{ willChange: 'transform, opacity' }}>
				<span>sport</span>
			</h1>
		</div>
	);
};

// export default React.forwardRef(Title);
export default React.memo(React.forwardRef(Title));
