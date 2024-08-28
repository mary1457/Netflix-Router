import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons';
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import MyCarousel from './components/MyCarousel';
import { Container } from 'react-bootstrap';
import MyHero from './components/MyHero.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import MovieDetails from './components/MovieDetails'


function App() {
  return (
    <BrowserRouter>
   
      <header className="">
      <MyNav></MyNav>
      </header>
      <main className='border border-1 border-end-0 border-start-0 border-black pt-3 pb-3 bg-dark' >
        <Container fluid> 
        <Routes>
        <Route path="/" element={   <MyCarousel></MyCarousel>} />
        

          <Route path="/tv-show" element={<MyHero></MyHero>} />
       
         

          <Route path="/movie-details/:movieId" element={<MovieDetails />} />

          <Route path="*" element={<NotFound />} />
         
          </Routes>
        
          
          </Container>
       
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    
    </BrowserRouter>
  );
}

export default App;
