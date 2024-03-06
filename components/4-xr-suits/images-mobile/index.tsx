'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ImagesMobile: React.FC = () => {
	const images = [
		'/4-xr-suits/images/1.webp',
		'/4-xr-suits/images/2.webp',
		'/4-xr-suits/images/3.webp',
		'/4-xr-suits/images/1.webp',
		'/4-xr-suits/images/2.webp',
		'/4-xr-suits/images/3.webp',
	];

	return (
		<>
			<Swiper
				slidesPerView={1.4}
				spaceBetween={20}
				loop={true}
				centeredSlides={true}
				speed={1000}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} style={{ width: 'auto', height: '140vw' }}>
						<Image src={image} alt={`Slide ${index}`} width={800 / 2} height={1000 / 2} />
					</SwiperSlide>
				))}
				...
			</Swiper>
		</>
	);
};

export default ImagesMobile;
// export default React.memo(ImagesMobile);
