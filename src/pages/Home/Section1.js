import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import "../../styles/HomeStyle.css"
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
      <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$2.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Chees</h2>
              <h4><u>#Vishu And Burger</u></h4>
              <p className="text-white pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi minus ipsum reprehenderit itaque culpa eius maxime debitis alias. 
                Ratione, doloremque suscipit cumque, dolor ut repudiandae, ab quas veritatis
                ipsam quidem ipsum quia similique sit debitis consectetur atque nisi quod
                voluptatum illum earum et placeat. Iure quidem molestias impedit dolor animi.
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* BG Parallax Scroll */}
    <section className="bg_parallax_scroll1"></section>
    </>
  );
};

export default Section1;