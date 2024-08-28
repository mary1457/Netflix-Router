
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Row, Col, Carousel, Alert, Spinner } from 'react-bootstrap';
import '../style.css'; 

const SingleCarousel = ({ film }) => {
  const [films, setFilms] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    console.log('SONO IN useEffect');
    fetchReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [film]); // Effettua il fetch ogni volta che il prop `film` cambia

  const fetchReservations = async () => {
    const URL = `http://www.omdbapi.com/?apikey=b9f73102&s=${film}`;
    try {
      const response = await fetch(URL);
      console.log(response);
      if (response.ok) {
        const objectFilms = await response.json();
        console.log('EVENTI A DB', objectFilms);
        setFilms(objectFilms.Search);
        setIsLoading(false);
      } else {
        throw new Error('Errore nella chiamata, response non OK');
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log('ERRORE!', error);
    }
  };

  const getColumnsPerSlide = () => {
    if (window.innerWidth < 768) {
      return 1; // Schermi piccoli
    } else if (window.innerWidth < 992) {
      return 2; // Schermi medi
    } else {
      return 4; // Schermi grandi
    }
  };

  const columnsPerSlide = getColumnsPerSlide();
  const totalSlides = Math.ceil(films.length / columnsPerSlide);

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        {isLoading && <Spinner animation="border" variant="danger" />}
        {isError && <Alert variant="danger">Errore</Alert>}
      </div>

      <Carousel
        className='h-100 mb-4'
        interval={null}
        indicators={false}
        onSlide={(i) => {
          setCurrentFilm(films[i]);
        }}
      >
        {[...Array(totalSlides)].map((_, slideIndex) => (
          <Carousel.Item key={slideIndex} className='h-100'>
            <Row className='h-100'>
              {films.slice(slideIndex * columnsPerSlide, (slideIndex + 1) * columnsPerSlide).map((film) => (
                <Col key={film.imdbID} xs={12} sm={12} md={6} lg={3}>
                  <img
                    className="w-100 d-inline film-image"
                    src={film.Poster}
                    alt=""
                    onClick={() => {
                        navigate('/movie-details/'+film.imdbID) 
                      }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default SingleCarousel;
