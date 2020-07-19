import React from 'react';
import { connect } from 'react-redux';
import ProptTypes from 'prop-types';
import { setFavorite } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id } = props;
  const handleSetFavorite = () => {
    props.setFavorite(
      {
        cover, title, year, contentRating, duration, id,
      },
    );
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' onClick={handleSetFavorite} />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.proptTypes = {
  cover: ProptTypes.string,
  title: ProptTypes.string,
  year: ProptTypes.number,
  contentRating: ProptTypes.number,
  duration: ProptTypes.number,
};//Declaramos que tipo de variables vamos a resibir en este archivo :v

const mapDispatchProps = {
  setFavorite,
};

export default connect(null, mapDispatchProps)(CarouselItem);
