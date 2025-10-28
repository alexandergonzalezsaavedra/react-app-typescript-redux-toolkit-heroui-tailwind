import GalleryImage from '../components/gallery/GalleryImage';
import GalleryHorizontalScroll from '../components/gallery/GalleryHorizontalScroll';
import IntroSection from '../components/gallery/IntroSection';

const Home = () => {
  return (
    <div className='container mx-auto p-4'>
      <GalleryImage />
      <div className='flex h-[50dvh] items-center'>
        <IntroSection />
      </div>
      <GalleryHorizontalScroll />
      <div className='flex h-dvh bg-neutral-700'></div>
    </div>
  );
};

export default Home;
