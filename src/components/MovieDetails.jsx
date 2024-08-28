import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row,Col,Card,ListGroup,Spinner, Alert } from 'react-bootstrap';
const MovieDetails = () => {
    const [film, setFilm] = useState({})
  const [comments, setComments] = useState([])
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log('OGGETTO PARAMS', params)
  useEffect(() => {
    fetchReservations()
    fetchComments()
  }, [])

  const fetchReservations = () => {
    const URL = 'http://www.omdbapi.com/?apikey=b9f73102&i='+ params.movieId
    fetch(URL)
      .then((response) => {
        console.log(response)
        if (response.ok) {
            setIsLoading(false);
          return response.json()
        } else {
          throw new Error('Errore nella chiamata, response non OK')
        }
      })
      .then((objectFilm) => {
        console.log('COMMENTI DAL DB', objectFilm)
        setFilm(objectFilm)
      })
      .catch((error) => {
        console.log('ERRORE!', error)
        setIsLoading(false);
        setIsError(true);
      })
  }

  const fetchComments = () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/'+ params.movieId
    fetch(URL,
        {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQ4NTMzNjQsImV4cCI6MTcyNjA2Mjk2NH0.iHKlPIp7st_5yrlKaxwpkG3S_0eWqkx4YLV5tfXH_m4",
              'Content-Type': 'application/json',
            },
          }
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
            setIsLoading2(false);
          return response.json()
        } else {
          throw new Error('Errore nella chiamata, response non OK')
        }
      })
      .then((arrayOfComments) => {
        console.log('COMMENTI DAL DB', arrayOfComments)
        setComments(arrayOfComments)
      })
      .catch((error) => {
        console.log('ERRORE!', error)
        setIsLoading2(false);
        setIsError(true);
      })
  }

  return (
    <>
     <div className="d-flex justify-content-center mb-3">
     
        {isError && <Alert variant="danger">Errore</Alert>}
      </div>

    <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={4}>
     <Card className='  border border-danger border border-2'>
      <Card.Img variant="top" src={film.Poster} />
      <Card.Body>
        <Card.Title>{film.Title}</Card.Title>
        <Card.Text>
        <div className="d-flex justify-content-center mb-3">
        {isLoading && <Spinner animation="border" variant="danger" />}
        
      </div>
          {film.Plot}
        </Card.Text>
        <Card.Text>
        <div className="d-flex justify-content-center mb-3">
        {isLoading2 && <Spinner animation="border" variant="danger" />}
      
      </div>
        {comments.map((item, index) => (
      
      <ListGroup className="list-group-flush" key={index}>
       
      <ListGroup.Item>{item.comment}</ListGroup.Item>
      <ListGroup.Item>{item.rate}</ListGroup.Item>
      <ListGroup.Item>{item.author}</ListGroup.Item>
    </ListGroup>
    ))}
    </Card.Text>
      </Card.Body>
     
      
     
    </Card>
    </Col>
    </Row>
    </>
  )
}

export default MovieDetails
