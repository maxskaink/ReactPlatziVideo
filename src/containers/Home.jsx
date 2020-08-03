/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'; //useState:Manejar estado  useEffects: Hacer transmiciones, hacer peticiones a ua API
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const Home = (props) => {
  const { myList, trends, originals, search } = props;
  return (
    <>
      <Search history={props.history} />
      {
        search.length > 0 && (
          <Categories title='Encontramos esto'>
            <Carousel>
              {
                // eslint-disable-next-line react/jsx-props-no-spreading
                search.map((item) => <CarouselItem key={item.id} {...item} />)
              }
            </Carousel>
          </Categories>
        )
      }
      {myList.length > 0 && (
        <Categories title='MI lista'>
          <Carousel>
            {
            // eslint-disable-next-line react/jsx-props-no-spreading
              myList.map((item) => <CarouselItem key={item.id} {...item} isList />)
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
