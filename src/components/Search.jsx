/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../assets/styles/components/Search.scss';
import { element } from 'prop-types';

const Search = (props) => {
  const [elements, getElements] = useState([]);
  let inputSearch = null;

  const getElement = (a) => {
    inputSearch = a;
  };

  const downKey = (key) => {
    if (key.keyCode === 13) {
      if (inputSearch.value.length > 0) {
        console.log(inputSearch.value);
        console.log(props.history);
        debugger
        props.history.push(`/buscar${inputSearch.value}`);
      }
    }
  };
  const searchMedia = () => {

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
        ref={(a) => getElement(a)}
      />
    </section>
  );
};
export default Search;

//onKeyPress
