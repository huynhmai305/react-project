import { Carousel, Image } from "react-bootstrap";
import React from "react";
import styles from "../../styles/Home.module.scss";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className={styles.carousel}
          src={"/images/landscape1.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={styles.carousel}
          src={"/images/landscape2.jpeg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className={styles.carousel}
          src={"/images/landscape3.jpeg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
