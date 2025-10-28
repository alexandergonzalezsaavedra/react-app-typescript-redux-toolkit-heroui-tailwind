import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  return (
    <section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{
          duration: 0.3,
          ease: [0.17, 0.55, 0.55, 1],
          delay: 0.2,
        }}
      >
        <h1>Alexander Gonzalez</h1>
      </motion.div>
    </section>
  );
};

export default IntroSection;
