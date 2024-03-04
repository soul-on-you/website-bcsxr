'use client';
import { useState, useEffect } from 'react';

const isSSR = typeof window === 'undefined';

const useWindowSize = () => {
	const [size, setSize] = useState({
		width: isSSR ? 768 : window.innerWidth,
	});

	useEffect(() => {
		if (isSSR) return;

		const handleResize = () => {
			setSize({ width: window.innerWidth });
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return size;
};

export default useWindowSize;
