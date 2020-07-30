import React from 'react';
import { connect } from 'react-redux';
import ProptTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite, openVideoPLayer } from '../actions/index';
import '../assets/styles/components/CarouselItem.scss';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import DeleteIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isList, source } = props;//Es como si lo estuvieramos destructurando el objeto cuando va a entrar los argumentos...
  const handleSetFavorite = () => {
    props.setFavorite(
      {
        cover, title, year, contentRating, duration, id,
      },
    );
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  const openPlayer = (url) => {
    props.openVideoPLayer(url);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/reproductor/${id}`}>
            <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' onClick={() => openPlayer(source)} />
          </Link>
          {
            isList ?
              <img className='carousel-item__details--img' src={DeleteIcon} alt='Delete Icon' onClick={() => handleDeleteFavorite(id)} /> :
              <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' onClick={handleSetFavorite} />
          }
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
  deleteFavorite,
  openVideoPLayer,
};

export default connect(null, mapDispatchProps)(CarouselItem);
