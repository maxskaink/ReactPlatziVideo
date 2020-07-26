import React from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import ReproducirVideo from '../actions';
import '../assets/styles/Reproductor.scss';

const Reproductor = ({ videoPlayer }) => {
  let Media;
  let iconoPlay;

  const traerMedia = (video) => {
    Media = video;
  }
  const traerButtonPlay = (icono) => {
    iconoPlay = icono;
  }
  const playOrPause = () => {
    if (Media.paused){
    Media.play()
    if (!iconoPlay.classList.contains("play")){
        iconoPlay.classList.remove("pause")}
        iconoPlay.classList.add("play")
    }else {
      Media.pause()
      if (!iconoPlay.classList.contains("pause")){
        iconoPlay.classList.remove("play")
        iconoPlay.classList.add("pause")
    }
  }
  }
  return (
    <>
    {
      videoPlayer.url ?
        <video className='movie' src={videoPlayer.url} ref={(a) => traerMedia(a)} autoPlay ></video> 
      :
      <h1>No has seleccionado ningun video, por favor ve al incio y selecciona alguno</h1>
    }
      <div className='controls'>
        <input type='button' id='playButton' className='button_control play' onClick={playOrPause} ref={(a) => traerButtonPlay(a)} />
        <input type='button' id='muteButton' className='button_control mute' />
        <input type='button' id='lessVolumeButton' className='button_control less_Volume' value='-' />
        <input type='button' id='moreVolumeButton' className='button_control more_Volume' value='+' />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    videoPlayer: state.videoPlayer
  }
}

export default connect(mapStateToProps, null)(Reproductor);
