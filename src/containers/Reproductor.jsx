/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Reproductor.scss';
import { array } from 'prop-types';

const Reproductor = (props) => {
  const { videoPlayer } = props;
  const { match } = props;
  const urlMedia = videoPlayer.filter((array) => array.id == match.params.url);
  let Media,
    iconoPlay,
    iconoMute,
    iconoLessVolume,
    iconoMoreVolume;

  let numberGrowVolume = 0.1;
  const traerMedia = (video) => {
    Media = video;
  };
  const traerButtonPlay = (icono) => {
    iconoPlay = icono;
  };
  const traerButtonMute = (icono) => {
    iconoMute = icono;
  };
  const traerButtonLessVolume = (icono) => {
    iconoLessVolume = icono;
  };
  const traerButtonMoreVolume = (icono) => {
    iconoMoreVolume = icono;
  };
  const playOrPause = () => {
    console.log(urlMedia);
    if (Media.paused) {
      Media.play();
      if (!iconoPlay.classList.contains('play')) {
        iconoPlay.classList.remove('pause');
      }
      iconoPlay.classList.add('play');
    } else {
      Media.pause();
      if (!iconoPlay.classList.contains('pause')) {
        iconoPlay.classList.remove('play');
        iconoPlay.classList.add('pause');
      }
    }
  };
  const muteOrUnmute = () => {
    if (Media.muted) {
      Media.muted = false;
      iconoMute.classList.remove('mute');
      iconoMute.classList.add('unmute');
    } else {
      Media.muted = true;
      iconoMute.classList.remove('unmute');
      iconoMute.classList.add('mute');
    }
  };
  const lessVolume = () => {
    if (Media.volume <= 0.1) {
      Media.muted = true;
      iconoMute.classList.add('mute');
      iconoMute.classList.remove('unmute');
    } else {
      Media.volume -= numberGrowVolume;
      console.log(`The volume is the ${Media.volume}`);
    }
  };
  const moreVolume = () => {
    if (Media.muted) {
      Media.muted = false;
      iconoMute.classList.remove('mute');
      iconoMute.classList.add('unmute');
    }

    if (Media.volume <= 0.9) {
      Media.volume += numberGrowVolume;
      console.log(`The volume is the ${Media.volume}`);
    }
  };
  return (
    <div className='reproductor'>
      <video className='movie' src={urlMedia[0].source} ref={(a) => traerMedia(a)} autoPlay />
      <div className='controls'>
        <input type='button' id='playButton' className='button_control play' onClick={playOrPause} ref={(a) => traerButtonPlay(a)} />
        <input type='button' id='muteButton' className='button_control mute' onClick={muteOrUnmute} ref={(a) => traerButtonMute(a)} />
        <input type='button' id='lessVolumeButton' className='button_control less_Volume' value='-' onClick={lessVolume} ref={(a) => traerButtonLessVolume(a)} />
        <input type='button' id='moreVolumeButton' className='button_control more_Volume' value='+' onClick={moreVolume} ref={(a) => traerButtonMoreVolume(a)} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videoPlayer: [...state.trends, ...state.originals],
  };
};

export default connect(mapStateToProps, null)(Reproductor);
