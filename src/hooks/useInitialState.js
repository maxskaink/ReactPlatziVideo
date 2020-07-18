import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] }); //Videos es el nombre de la variablem y con setVideos es una funcion que me permite actualizar el estado.

  useEffect(() => {
    fetch(API)//Trae la informacion de la FakeAPI
      .then((response) => response.json())//Convierte la informacion en la API
      .then((data) => setVideos(data));//Envia los datos a la variable videos
  }, []);//En el array vacio es para que escuche si hay un cambio, pero no es necesario en este caso
  console.log(videos);
  return videos;

};

export default useInitialState;
