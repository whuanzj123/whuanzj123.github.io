// InfiniteGallery.jsx - With animated star background
import React from 'react';
import './Gallery.css';

// Reduced to only 3 animals for the static display
const animalData = [
  {
    common: 'Lion', 
    binomial: 'Panthera leo', 
    photo: {
      code: '1583499871880-de841d1ace2a', 
      page: 'lion-lying-on-brown-rock-MUeeyzsjiY8', 
      text: 'lion couple kissing on a brown rock', 
      pos: '47% 35%', 
      by: 'Clément Roy'
    }
  }, 
  {
    common: 'Giant panda', 
    binomial: 'Ailuropoda melanoleuca', 
    photo: {
      code: '1659540181281-1d89d6112832', 
      page: 'a-panda-bear-in-a-tree-e0mrn3XDatU', 
      text: 'giant panda hanging from a tree branch', 
      pos: '47%', 
      by: 'Jiachen Lin'
    }
  }, 
  {
    common: 'King penguin', 
    binomial: 'Aptenodytes patagonicus', 
    photo: {
      code: '1595792419466-23cec2476fa6', 
      page: 'white-and-black-penguin-on-gray-rock-o4snRPEZRRs', 
      text: 'king penguin with a fluffy brown chick on grey rocks', 
      pos: '35%', 
      by: 'Martin Wettstein'
    }
  }
];

const InfiniteGallery = () => {
  const base = 'unsplash.com/photo';

  return (
    <div className="gallery-container">
      {/* Animated Star Background */}
      <div className="stars-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>

      {/* Gallery Content */}
      <div className="gallery-content">
        <header className="gallery-header">
          <h1>Animal Gallery</h1>
          <strong>Hover or tap cards to flip them</strong>
          <em>Mobile-friendly flipping cards with parallax stars</em>
        </header>

        <main className="scene">
          <section className="assembly">
            {animalData.map((animal, i) => {
              const img = animal.photo;
              const pos = img.pos;
              const url = `https://images.${base}-${img.code}?h=900`;
              
              const style = {
                '--i': i,
                '--url': `url(${url})`,
                ...(pos && { '--pos': pos })
              };

              return (
                <article key={i} className="card" style={style}>
                  <div className="card-inner">
                    <div className="card-front">
                      <figure>
                        <img src={url} alt={img.text} />
                        <figcaption>
                          by{' '}
                          <a
                            href={`https://${base}s/${img.page}`}
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
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
};

export default InfiniteGallery;