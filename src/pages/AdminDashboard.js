// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or use fetch
import { Table, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Check if user is logged in (token in localStorage).
  // If no token, optionally redirect to login or somewhere else.
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        'https://movieapp-api-lms1.onrender.com/movies/getMovies'
      );
      setMovies(response.data); // Adjust based on how your API returns data
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://movieapp-api-lms1.onrender.com/movies/deleteMovie/${id}`
      );
      // After deleting, refresh the list
      fetchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleEdit = (id) => {
    // Navigate to an Edit Page, e.g. /edit-movie/:id
    navigate(`/edit-movie/${id}`);
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      <div className="text-center mb-3">
        <Link to="/add-movie">
          <Button variant="primary">Add Movie</Button>
        </Link>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Director</th>
            <th>Year</th>
            <th>Genre</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.description}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.genre}</td>
              <td className="text-center">
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(movie._id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(movie._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          {movies.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No movies available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminDashboard;
