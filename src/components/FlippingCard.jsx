// FlippingCard.jsx - Reusable flipping card component with music player
import React from 'react';
import CardMusicPlayer from './CardMusicPlayer';
import './FlippingCard.css';

const FlippingCard = ({ animal, index, baseUrl, musicSrc, musicTitle, musicArtist }) => {
  const img = animal.photo;
  const pos = img.pos;
  const url = `https://images.${baseUrl}-${img.code}?h=900`;
  
  const style = {
    '--i': index,
    '--url': `url(${url})`,
    ...(pos && { '--pos': pos })
  };

  return (
    <article className="card" style={style}>
      <div className="card-inner">
        <div className="card-front">
          <figure>
            <img src={url} alt={img.text} />
            <figcaption>
              by{' '}
              <a
                href={`https://${baseUrl}s/${img.page}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {img.by}
              </a>
            </figcaption>
          </figure>
        </div>
        
        <div className="card-back">
          <header>
            <h2>{animal.common}</h2>
            <em>{animal.binomial}</em>
            <p className="description">{img.text}</p>
          </header>
          
          {/* Music player on the back of the card */}
          <CardMusicPlayer 
            audioSrc={musicSrc}
            title={musicTitle}
            artist={musicArtist}
          />
        </div>
      </div>
    </article>
  );
};

export default FlippingCard;