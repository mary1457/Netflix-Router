
import { React } from 'react'
import SingleCarousel from './SingleCarousel';

const MyCarousel = () => {
  const carouselData = [
    { title: 'Trending Now', film: 'Harry Potter' },
    { title: 'Watch it Again', film: 'Star Wars' },
    { title: 'New Releases', film: 'Twilight' },
  ];

  return (
    <>
      {carouselData.map((item, index) => (
        <div key={index}>
          <h4 className='text-white text-start'>{item.title}</h4>
          <SingleCarousel film={item.film} />
        </div>
      ))}
    </>
  );
};

export default MyCarousel;
