import React from 'react';

// Components
import { Hero } from '@/components/feature';
import { GotoMap, Loader } from '@/components/common';

const Home = () => {
  return (
    <>
      <Loader />
      <GotoMap />
      <Hero />
    </>
  );
};

export default Home;
