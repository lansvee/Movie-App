// src/pages/SingleMovie.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

function SingleMovie() {
  const { id } = useParams(); // Capture the :id from the route
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single movie data on mount
  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  const fetchMovie = async (movieId) => {
    try {
      const response = await axios.get(
        `https://movieapp-api-lms1.onrender.com/movies/getMovie/${movieId}`
      );
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching single movie:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="py-5">
        <h2>Loading Movie...</h2>
      </Container>
    );
  }

  if (!movie) {
    return (
      <Container className="py-5">
        <h2>Movie not found</h2>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          {/* Replace with actual movie poster or icon */}
          <Image
            src="https://via.placeholder.com/300x300.png?text=Popcorn+Icon"
            alt="Movie Poster"
            fluid
            className="mb-3"
          />
          <h3>{movie.title}</h3>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
          <p>Director: {movie.director}</p>
          {/* Include description or other fields as needed */}
          <p style={{ maxWidth: '500px', margin: '0 auto' }}>
            {movie.description}
          </p>

          {/* Optional: link back to the movies page */}
          <Link to="/movies" className="btn btn-primary mt-3">
            Back to Movies
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleMovie;
