import { Image } from '@heroui/react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GalleryImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-60%']);
  return (
    <div>
      <div
        ref={ref}
        className='flex justify-center gap-16 h-[70dvh] rounded-xl border-2 border-dotted border-slate-200 dark:border-slate-600 p-10'
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

      <hr className='my-50' />

      <div className='min-h-96 p-6'>
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

        <div
          ref={ref}
          className='relative h-[300vh] bg-neutral-900'
        >
          <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
            <motion.div
              style={{ x }}
              className='flex gap-4'
            >
              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>

              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>

              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>

              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>

              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>

              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>

              <div className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200'>
                <div
                  style={{
                    backgroundImage: `url('/hanna-bb.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className='absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110'
                ></div>
                <div className='absolute inset-0 z-10 grid place-content-center'>
                  <p className='from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
                    Hanna
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='flex h-dvh bg-neutral-700'></div>
      </div>
    </div>
  );
};

export default GalleryImage;
