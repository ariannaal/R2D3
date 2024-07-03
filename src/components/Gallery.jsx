
import { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


class Gallery extends Component {
    state = {
        movies: [],
    }
    
    fetchMovies = () => {
        fetch(`http://www.omdbapi.com/?apikey=5ee85da2&s=${this.props.nameMovie}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                    
                } else {
                    throw new Error("Errore nel reperimento dei dati");
                }
            })
            .then((objMovie) => {
                console.log(objMovie);
                this.setState({ movies: objMovie.Search });
            })
            .catch((err) => alert(err));
    };
    

    componentDidMount() {
        this.fetchMovies();
    }


 render() {
     const { movies } = this.state; // destrutturo
     
     if (movies.length > 0) { // verifica che array movies contenga almeno un elemento
         
    const carouselItemsCount = Math.ceil(movies.length / 2); // calcolo per visualizzare items nel carousel item

    const carouselItems = []; // array di carousel items. devo fare un array in un array perchè in uno hoo i carousel items e nell'altro le immagini 
    let startIndex = 0;
    for (let i = 0; i < carouselItemsCount; i++) {
      
        // array per immagini dei film
      const carouselItemMovies = [];
      for (let j = 0; j < carouselItemsCount; j++) { // ciclo for per film che itera n°=carouselItemsCount cioe i film da visualizzare
        const index = startIndex + j;
        if (index < movies.length) { // se l'indice è minore della lunghezza dell'array movies cosi da evitare di ceracre di accedere ad un film inesistente
            const movie = movies[index]; // ottengo l'oggetto film con l indice calcolato
          carouselItemMovies.push(
              <Col key={movie.imdbID} sm={6} md={4} lg={3} xl={2}> 
                  <Link to={`/movie-details/${movie.imdbID}`}>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="img-fluid"
                                    style={{ width: '200px', height: '300px' }}
                      />
                  </Link>
                        </Col>
          );
        }
      }

        if (carouselItemMovies.length > 0) { // se gli items nel carousel item sono > 0 cosi da non darmi un carousel item vuoto
            carouselItems.push(

                <Carousel.Item key={i} >
                    <div  className="d-flex justify-content-around flex-row">
                        {carouselItemMovies}
                    </div>
                </Carousel.Item>
            );
        }

      // incremento di startIndex cosi ogni film viene visualizzato una volya sola
      startIndex += carouselItemsCount;
    }

         return (
        
      <Carousel interval={null}>
        {carouselItems}
      </Carousel>
    );
     }

    
  }
}

export default Gallery;












