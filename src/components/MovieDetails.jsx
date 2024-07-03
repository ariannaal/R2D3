import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = () => {
            fetch(`http://www.omdbapi.com/?apikey=5ee85da2&i=${movieId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Errore nella richiesta');
                    }
                    return response.json();
                })
                .then(data => {
                    setMovieDetails(data); // aggiorno lo stato movieDetails con i dati ricevuti. quando cambia useEfffect esegue la fetch per ottenere dati aggiornati
                })
                .catch(error => {
                    console.error('Errore nel fetch di movie details', error);
                });
        };

        fetchMovieDetails();
    }, [movieId]); //ogni volta che movieId cambia use effect viene eseguito

    if (!movieDetails) {
        return <div><Spinner  animation="border" role="status" >
      <span className="visually-hidden" variant="light">Loading...</span>
    </Spinner></div>;
    }

    return (
        <div className="bg-body-tertiary movie-details" data-bs-theme="dark">
            <h2 className="detail-title">{movieDetails.Title}</h2>
            <p className="detail-text">Year: {movieDetails.Year}</p>
            <img src={movieDetails.Poster} alt="poster" />
            <p className="py-4 detail-text">{movieDetails.Plot}</p>
        </div>
    );
};

export default MovieDetails;