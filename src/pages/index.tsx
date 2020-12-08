import React from 'react';
import Head from 'next/head';

import Logo from '../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World</h1>
        <Logo />
      </main>
    </div>
  );
};

export default Home;
