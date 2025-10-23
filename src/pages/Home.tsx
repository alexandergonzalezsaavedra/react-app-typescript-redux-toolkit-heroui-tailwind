import { Image } from '@heroui/react';

const Home = () => {
  return (
    <div className='container mx-auto p-4'>
      <Image
        isBlurred
        alt='HeroUI Album Cover'
        className='m-5'
        src='/hanna-y-yo.jpg'
        width={240}
      />
    </div>
  );
};

export default Home;
