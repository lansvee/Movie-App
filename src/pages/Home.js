// src/Pages/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      
      {/* TOP PROMO BAR */}
      <Container fluid className="top-bar text-center py-2">
        <p className="mb-0">
          Free Shipping on Movies Over $50 + Pick 2 Free Shows
        </p>
      </Container>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-content">
            <h1></h1>
            <p></p>
          </div>
        </div>
      </section>

{/* SECOND SECTION */}
<section className="second-section text-center py-5">
  <Container>
    <p className="founder-name mb-1">JOHN Q. DIRECTOR, FOUNDER</p>
    <h2 className="second-title">
      CINEMA DOESN’T NEED to <br className="d-none d-md-block" />
      COME <em>with</em> COMPROMISES
    </h2>

    {/* ROW OF THREE IMAGES */}
    <Row className="justify-content-center mt-4">
      <Col md={4} className="text-center mb-3 mb-md-0">
        <img
          src="https://res.cloudinary.com/dtash1hd9/image/upload/v1741355783/6c5e8da5ad3a619d9634629c6feb8679_lmq4if.jpg"
          alt="Featured Movie Poster"
          className="img-fluid product-image"
        />
      </Col>

      <Col md={4} className="text-center mb-3 mb-md-0">
        <img
          src="https://res.cloudinary.com/dtash1hd9/image/upload/v1741355783/eb85ae48bd5d59a8280b2b1080d7feac_dwhydt.jpg"
          alt="Second Movie Poster"
          className="img-fluid product-image"
        />
      </Col>

      <Col md={4} className="text-center">
        <img
          src="https://res.cloudinary.com/dtash1hd9/image/upload/v1741344422/c3661c1a76fe188034c9c33cfaa5349f_gvj9qo.jpg"
          alt="Third Movie Poster"
          className="img-fluid product-image"
        />
      </Col>
    </Row>

    <p className="section-subtext mt-4 mx-auto">
      We believe everyone deserves top-quality films—without hidden fees or
      confusing memberships. From indie gems to blockbuster hits, MovieBox
      Studio brings cinematic magic to audiences worldwide.
    </p>
  </Container>
</section>


      {/* FOOTER */}
      <footer className="footer-section text-center py-4">
        <Container>
          <Row>
            <Col>
              <p className="footer-links mb-2">
                <a href="#" className="footer-link">Terms of Service</a> |{' '}
                <a href="#" className="footer-link">Privacy Policy</a> |{' '}
                <a href="#" className="footer-link">Contact Us</a>
              </p>
              <p className="mb-0">
                &copy; {new Date().getFullYear()} MovieBox Studio. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
