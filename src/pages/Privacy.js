// src/pages/Movies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        'https://movieapp-api-lms1.onrender.com/movies/getMovies'
      );
      setMovies(response.data); // Adjust if your API structure is different
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Explore Movies and TV Shows</h2>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col
            key={movie._id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-stretch"
          >
            <Card className="w-100">
              {/* Replace with your own image or an actual movie poster */}
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/200x200.png?text=Popcorn+Icon"
                alt="Movie Poster"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {movie.description?.slice(0, 50)}...
                </Card.Text>
                <Button variant="primary" className="mt-auto">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {movies.length === 0 && (
          <p className="text-center mt-5">No movies to display</p>
        )}
      </Row>
    </Container>
  );
}

export default Movies;
