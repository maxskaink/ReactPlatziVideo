/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Search.scss';
import { element } from 'prop-types';
import { searchRequest } from '../actions';

const Search = (props) => {
  const [elements, getElements] = useState([]);
  let inputSearch = null;

  const getElement = (a) => {
    inputSearch = a;
  };

  const downKey = (key) => {
    if (key.keyCode === 13) {
      if (inputSearch.value.length > 0) {
        console.log('hola buenos dias');
      }
    }
  };
  const searchMedia = () => {
    props.searchRequest(inputSearch.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='search'
        type='text'
        className='input input_home'
        placeholder='Buscar...'
        onKeyDown={downKey}
        onChange={searchMedia}
        ref={(a) => getElement(a)}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return ({ ...state });
};
const mapDispathToProps = {
  searchRequest,
};

export default connect(mapStateToProps, mapDispathToProps)(Search);

//onKeyPress
