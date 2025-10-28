import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const GalleryHorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-60%']);
  return (
    <>
      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll down
        </span>
      </div>

      <section
        ref={targetRef}
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
      </section>

      <div className='flex h-48 items-center justify-center'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll up
        </span>
      </div>
    </>
  );
};

export default GalleryHorizontalScroll;
