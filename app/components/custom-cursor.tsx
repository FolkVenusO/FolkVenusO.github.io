'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 250, damping: 25 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 9);
      y.set(event.clientY - 9);
    };

    const handleEnter = () => setActive(true);
    const handleLeave = () => setActive(false);

    window.addEventListener('mousemove', move);
    const interactives = document.querySelectorAll('[data-hoverable="true"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className="custom-cursor"
        data-active={active}
        style={{ translateX: x, translateY: y }}
      />
      <motion.div
        className="cursor-ring"
        data-active={active}
        style={{ translateX: ringX, translateY: ringY }}
      />
    </>
  );
};

export default CustomCursor;
