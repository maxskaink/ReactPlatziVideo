import React from 'react';
import ReactPlayer from 'react-player';
import '../assets/styles/Reproductor.scss';

const Reproductor = () => {
  return (
    <>
      <ReactPlayer
        url='https://mdstrm.com/video/58333e214ad055d208427db5.mp4'
        className='react-player'
        playing
        width='80%'
        heiht='80%'
        id='video'
      />
      <div className='controls'>
        <input type='button' id='playButton' className='button_control play'  />
        <input type='button' id='muteButton' className='button_control mute' />
        <input type='button' id='lessVolumeButton' className='button_control less_Volume' value='-' />
        <input type='button' id='moreVolumeButton' className='button_control more_Volume' value='+' />
      </div>
    </>
  );
};

export default Reproductor;
