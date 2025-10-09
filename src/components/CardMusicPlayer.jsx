// CardMusicPlayer.jsx - Compact music player for individual cards
import React, { useState, useRef, useEffect } from 'react';
import './CardMusicPlayer.css';

const CardMusicPlayer = ({ audioSrc, title, artist }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = (e) => {
    e.stopPropagation(); // Prevent card flip when clicking play button
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // Pause all other audio elements on the page
      document.querySelectorAll('audio').forEach(a => {
        if (a !== audio) a.pause();
      });
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="card-music-player">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <button 
        className={`card-play-button ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="currentColor" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="32" height="32">
            <path fill="currentColor" d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      <div className="card-music-info">
        <div className="card-track-title">{title}</div>
        <div className="card-track-artist">{artist}</div>
        
        <div className="card-progress-bar">
          <div 
            className="card-progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        <div className="card-time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardMusicPlayer;