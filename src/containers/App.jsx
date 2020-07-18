/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'; //useState:Manejar estado  useEffects: Hacer transmiciones, hacer peticiones a ua API
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const InitialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {InitialState.mylist.length > 0 && (
        <Categories title='MI lista'>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            InitialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            InitialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
