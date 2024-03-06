import React, { useRef, useEffect, useState } from 'react';
// Импортируйте остальные необходимые зависимости

const Masthead = () => {
  const [scrollCount, setScrollCount] = useState(0);
  const mastheadRef = useRef(null);
  const firstH1Ref = useRef(null);
  const secondH1Ref = useRef(null);
  const thirdH1Ref = useRef(null);
  const backgroundImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const handleScroll = () => {
      // Повышаем счетчик скролла и запускаем анимацию, если страница скроллилась достаточно
      if (window.scrollY > 10) {
        setScrollCount((prevCount) => {
          if (prevCount < 3) {
            return prevCount + 1;
          }
          return prevCount;
        });
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Возвращаем пользователя наверх страницы
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Инициализируем анимации в зависимости от значения scrollCount
    if (scrollCount === 1) {
      gsap.fromTo(firstH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' });
      gsap.to(backgroundImageRef.current, { duration: 1, scale: 1.4, ease: 'none' });
    } else if (scrollCount === 2) {
      gsap.fromTo(secondH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' });
      gsap.to(backgroundImageRef.current, { duration: 1, scale: 1, ease: 'none' });
    } else if (scrollCount === 3) {
      gsap.fromTo(thirdH1Ref.current, { y: -500 }, { duration: 1, autoAlpha: 1, y: 0, ease: 'none' });
      // Дополните анимацией для третьего скролла
    }
  }, [scrollCount]);

  // JSX код компонента
  return (
    // Ваш JSX код
  );
};

export default Masthead;
