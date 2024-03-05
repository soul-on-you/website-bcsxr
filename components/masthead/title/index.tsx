import React from 'react';
import styles from './styles.module.scss';
import ITitleProps from './interface';

const Title: React.ForwardRefRenderFunction<HTMLDivElement, ITitleProps> = ({
	firstH1Ref,
	secondH1Ref,
	thirdH1Ref,
}) => {
	return (
		<div className={styles.title}>
			<h1 ref={firstH1Ref}>
				<span>new format</span>
				<span>new format</span>
			</h1>
			<br />
			<h1 ref={secondH1Ref}>
				<span>of competitive</span>
				<span>of competitive</span>
			</h1>
			<br />
			<h1 ref={thirdH1Ref}>
				<span>sport</span>
				<span>sport</span>
			</h1>
		</div>
	);
};

// export default React.forwardRef(Title);
export default React.memo(React.forwardRef(Title));
