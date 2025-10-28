import { Image } from '@heroui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const GalleryImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div
        ref={ref}
        className='relative flex justify-center gap-16 h-[70dvh] rounded-xl border-2 border-dotted border-slate-200 dark:border-slate-600 p-10'
      >
        <motion.div
          drag
          dragConstraints={ref}
          whileTap={{ cursor: 'grabbing', rotate: 6 }}
          whileHover={{ scale: 0.9 }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 20 }}
          className='-rotate-6 cursor-grab z-10 w-64 h-96 relative'
        >
          <div onDragStart={(e) => e.preventDefault()}>
            <Image
              isBlurred
              className='relative m-2 w-auto h-auto z-0'
              src='/hanna-conductora.jpg'
              alt='hanna rockera'
              width={240}
            />
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          whileTap={{ cursor: 'grabbing', rotate: -6 }}
          whileHover={{ scale: 0.9 }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 20 }}
          className='rotate-6 cursor-grab z-10 w-64 h-60 relative mt-[10%]'
        >
          <div onDragStart={(e) => e.preventDefault()}>
            <Image
              isBlurred
              alt='HeroUI Album Cover'
              className='relative m-2 w-auto h-[75%] object-cover z-0'
              src='/hanna-y-yo.jpg'
              width={240}
            />
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          whileTap={{ cursor: 'grabbing', rotate: 6 }}
          whileHover={{ scale: 0.9 }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 20 }}
          className='-rotate-6 cursor-grab z-10 w-64 h-96 relative'
        >
          <div onDragStart={(e) => e.preventDefault()}>
            <Image
              isBlurred
              className='relative m-2 w-auto h-[75%] object-cover z-0'
              src='/hanna-rockera-dos.jpg'
              alt='hanna rockera'
              width={240}
            />
          </div>
        </motion.div>
        <motion.div
          drag
          dragConstraints={ref}
          whileTap={{ cursor: 'grabbing', rotate: -6 }}
          whileHover={{ scale: 0.9 }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 20 }}
          className='rotate-6 cursor-grab z-10 w-64 h-60 relative mt-[10%]'
        >
          <div onDragStart={(e) => e.preventDefault()}>
            <Image
              isBlurred
              className='relative m-2 w-auto h-[75%] object-cover z-0'
              src='/hanna-bb.jpg'
              alt='hanna cachorra'
              width={240}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryImage;
