import React, { useState, useEffect } from 'react';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';
import { reviewsItem } from './reviewsItem';

function Slider() {
  const [reviews, setReviews] = useState(reviewsItem);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviews]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className='hero'>
      <div className='hero-banner'>
        {reviews.map((images, imagesIndex) => {
          let position = 'nextSlide';

          if (imagesIndex === index) {
            position = 'activeSlide';
          }

          if (
            imagesIndex === index - 1 ||
            (index === 0 && imagesIndex === reviews.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={images.id}>
              <img src={images.img} className='pic' alt='' />
            </article>
          );
        })}

        <button className='prev' onClick={() => setIndex(index - 1)}>
          <HiChevronDoubleLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <HiChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default Slider;
