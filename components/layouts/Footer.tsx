import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";

const Footer = () => {
  return (
    <div className="text-center bg-dark text-light">
      <footer className={`page-footer font-small elegant-color ${styles.footer}`}>
        <div className="bg-info">
          <Container>
            <Row className="py-4 d-flex align-items-center">
              <Col md={6} lg={5} className="text-center text-md-left mb-4 mb-md-0">
                <h6 className="mb-0">Get connected with us on social networks!</h6>
              </Col>
              <Col md={6} lg={7} className="text-center text-md-right">
                <i className="fab fa-facebook-f white-text mr-4" />
                <i className="fab fa-twitter white-text mr-4" />
                <i className="fab fa-google-plus-g white-text mr-4" />
                <i className="fab fa-linkedin-in white-text mr-4" />
                <i className="fab fa-instagram white-text" />
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="text-center text-md-left pt-4 pt-md-5">
          <Row className="mt-1 mt-md-0 mb-4 mb-md-0">
            <Col md={3} className="mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <h5>About me</h5>
              <hr className={`bg-info mb-4 mt-0 d-inline-block mx-auto ${styles.footer_hr}`} />
              <p className="foot-desc mb-0">
                Here you can use rows and columns to organize your footer content. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md={3} className="mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <h5>Products</h5>
              <hr className={`bg-info mb-4 mt-0 d-inline-block mx-auto ${styles.footer_hr}`} />
              <ul className="list-unstyled foot-desc">
                <li className="mb-2">
                  <a href="#!">Product 1</a>
                </li>
                <li className="mb-2">
                  <a href="#!">Product 2</a>
                </li>
                <li className="mb-2">
                  <a href="#!">Product 3</a>
                </li>
                <li className="mb-2">
                  <a href="#!">Product 4</a>
                </li>
              </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md={3} className="mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <h5>Useful links</h5>
              <hr className={`bg-info mb-4 mt-0 d-inline-block mx-auto ${styles.footer_hr}`} />
              <ul className="list-unstyled foot-desc">
                  <li className="mb-2">
                    <a href="#!">Your Account</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Become an Our Shop</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Shipping Rates</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Help</a>
                  </li>
                </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md={3} className="mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <h5>Contacts</h5>
              <hr className={`bg-info mb-4 mt-0 d-inline-block mx-auto ${styles.footer_hr}`} />
              <ul className="fa-ul foot-desc ml-4">
                <li className="mb-2"><span className="fa-li"><i className="far fa-map"></i></span>Thu Duc Dist., Ho Chi Minh City
                </li>
                <li className="mb-2"><span className="fa-li"><i className="fas fa-phone-alt"></i></span>042 876 836 908</li>
                <li className="mb-2"><span className="fa-li"><i className="far fa-envelope"></i></span>company@example.com</li>
                <li><span className="fa-li"><i className="far fa-clock"></i></span>Monday - Friday: 10-17</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="#"> Huynh Mai</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
