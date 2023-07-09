import React, { useState } from 'react';

const Carosello = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const data = [
    {
      id: 1,
      image: 'https://placekitten.com/200',
      alt: 'Immagine 1',
    },
    {
      id: 2,
      image: 'https://placekitten.com/200',
      alt: 'Immagine 2',
    },
    {
      id: 3,
      image: 'https://placekitten.com/200',
      alt: 'Immagine 3',
    },
  ];

  return (
    <div>
      <div className="slider">
        <div
          className="slider-content"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map(slide => (
            <div className="slide" key={slide.id}>
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-navigation">
        <button onClick={prevSlide}>Precedente</button>
        <button onClick={nextSlide}>Successivo</button>
      </div>
    </div>
  );
};

export default Carosello;