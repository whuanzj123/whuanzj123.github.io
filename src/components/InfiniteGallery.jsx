import React, { useEffect } from 'react';
import './Gallery.css'; // We'll need to create this CSS file

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
    common: 'Asiatic elephant', 
    binomial: 'Elephas maximus', 
    photo: {
      code: '1571406761758-9a3eed5338ef', 
      page: 'shallow-focus-photo-of-black-elephants-hZhhVLLKJQ4', 
      text: 'herd of Sri Lankan elephants walking away from a river', 
      pos: '75% 65%', 
      by: 'Alex Azabache'
    }
  }, 
  {
    common: 'Red-tailed black cockatoo', 
    binomial: 'Calyptorhynchus banksii', 
    photo: {
      code: '1619664208054-41eefeab29e9', 
      page: 'black-and-brown-bird-in-close-up-photography-LkrOEupiVt8', 
      text: 'close-up of a black cockatoo', 
      pos: '53% 43%', 
      by: 'David Clode'
    }
  }, 
  {
    common: 'Dromedary', 
    binomial: 'Camelus dromedarius', 
    photo: {
      code: '1662841238473-f4b137e123cb', 
      page: 'a-group-of-camels-in-a-desert-uIzCnO-gOrw', 
      text: 'camel and her new born calf walking in the Sahara desert', 
      pos: '65% 65%', 
      by: 'Moaz Tobok'
    }
  }, 
  {
    common: 'Polar bear', 
    binomial: 'Ursus maritimus', 
    photo: {
      code: '1589648751789-c8ecb7a88bd5', 
      page: 'polar-bear-on-snow-covered-ground-during-daytime-AZ31hv9kdzE', 
      text: 'polar bear on the snow, by the water, raised on the hind legs, front paws together', 
      pos: '50% 25%', 
      by: 'Hans-Jurgen Mager'
    }
  }, 
  {
    common: 'Waterbuck', 
    binomial: 'Kobus ellipsiprymnus', 
    photo: {
      code: '1662187554571-f54ea9657d88', 
      page: 'a-deer-with-antlers-in-a-field-jVvl_2cQO5s', 
      text: 'waterbuck in a field, looking at the camera', 
      pos: '47%', 
      by: 'Jonathan Gensicke'
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
    common: 'Grévy\'s zebra', 
    binomial: 'Equus grevyi', 
    photo: {
      code: '1526095179574-86e545346ae6', 
      page: 'zebra-standing-on-wheat-field-ZqYPM8i60F8', 
      text: 'zebra standing on wheat field, looking back towards the camera', 
      pos: '65% 35%', 
      by: 'Jeff Griffith'
    }
  }, 
  {
    common: 'Cheetah', 
    binomial: 'Acinonyx jubatus', 
    photo: {
      code: '1541707519942-08fd2f6480ba', 
      page: 'leopard-sitting-on-grass-field-3pekyY0-yOw', 
      text: 'cheetah sitting in the grass under a blue sky', 
      by: 'Mike Bird'
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
  const n = animalData.length;

  useEffect(() => {
    // Set CSS custom property for number of items
    document.documentElement.style.setProperty('--n', n);

    // Infinite scroll cycling function
    function f(k) {
      if (Math.abs(k) > 0.5) {
        window.scrollTo(0, 0.5 * (k - Math.sign(k) + 1) * (document.documentElement.offsetHeight - window.innerHeight));
      }
    }

    // Initialize
    f(-1);

    // Scroll event listener
    const handleScroll = () => {
      const kValue = +getComputedStyle(document.body).getPropertyValue('--k');
      f(kValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [n]);

  useEffect(() => {
    // Apply styles to document elements for scroll-driven animation
    document.documentElement.style.scrollbarWidth = 'none';
    document.documentElement.style.height = `${n * 100}%`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100vh';
    document.body.style.height = '100dvh';
    document.body.style.color = '#dedede';
    document.body.style.font = 'clamp(.625em, 3vmin, 1.5em) / 1.25 "Saira", sans-serif';
    document.body.style.animation = 'k 1s linear';
    document.body.style.animationTimeline = 'scroll()';
    document.body.style.setProperty('--dir', '0');
    
    // Add grain background
    document.body.style.position = 'relative';
    const beforeStyle = document.createElement('style');
    beforeStyle.textContent = `
      body::before {
        position: absolute;
        inset: 0;
        z-index: -1;
        background: #000;
        filter: url(#grain);
        content: '';
      }
      @media (max-aspect-ratio: 2/3) {
        body { --dir: 1; }
      }
      @keyframes k { to { --k: 1; } }
    `;
    document.head.appendChild(beforeStyle);

    // Infinite scroll cycling function
    function f(k) {
      if (Math.abs(k) > 0.5) {
        window.scrollTo(0, 0.5 * (k - Math.sign(k) + 1) * (document.documentElement.offsetHeight - window.innerHeight));
      }
    }

    // Initialize
    f(-1);

    // Scroll event listener
    const handleScroll = () => {
      const kValue = +getComputedStyle(document.body).getPropertyValue('--k');
      f(kValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup on unmount
      document.documentElement.style.scrollbarWidth = '';
      document.documentElement.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.color = '';
      document.body.style.font = '';
      document.body.style.animation = '';
      document.body.style.animationTimeline = '';
      window.removeEventListener('scroll', handleScroll);
      if (document.head.contains(beforeStyle)) {
        document.head.removeChild(beforeStyle);
      }
    };
  }, [n]);

  return (
    <div className="gallery-container" style={{ '--n': n }}>
      <svg width="0" height="0" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="7.13" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".02" />
          </feComponentTransfer>
          <feBlend in2="SourceGraphic" />
        </filter>
      </svg>

      <header className="gallery-header">
        <h1>Infinite scroll circular gallery</h1>
        <strong>scroll up & down/ use up & down arrow keys</strong>
        <em>mostly CSS scroll-driven animations (for rotating gallery on scroll) + tiniest bit of JS (for infinite cycling part, ~200 bytes minified)</em>
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
              <article key={i} style={style}>
                <header>
                  <h2>{animal.common}</h2>
                  <em>{animal.binomial}</em>
                </header>
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
              </article>
            );
          })}
        </section>
      </main>

      <footer></footer>

      <aside>
        <p className="box-info-scrollani">
          Sorry, your browser does not appear to support scroll-driven animation. As of January 2025, this is supported in Firefox if the{' '}
          <kbd>layout.css.scroll-driven-animations.enabled</kbd> flag is set to true in{' '}
          <kbd>about:config</kbd> and in Chromium browsers. Safari support is coming, but it hasn't arrived yet.
        </p>
      </aside>
    </div>
  );
};

export default InfiniteGallery;