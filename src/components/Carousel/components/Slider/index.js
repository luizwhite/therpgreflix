/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  height: calc(var(--videoCard-container-focus-height) + 5px);
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    margin: auto;

    z-index: 50;
    top: 0;
    bottom: 0;
    transform: initial;

    &::before {
      font-size: 30px;
      color: ${({ arrowColor }) => arrowColor};
      overfo
    }
  }

  .slick-track {
    display: flex;
  }
  .slick-track .slick-slide {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
  }

  .slick-slider, .slick-list, .slick-track {
    height: 100%;
  }

  .slick-prev {
    left: -36px;
  }
  .slick-next {
    right: 16px;
  }

  @media (max-width: 800px) {
    .slick-prev {
      left: 5px;
    }
    .slick-next {
      right: 5px;
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    width: 298px;
    height: 197px;
    margin: 16px;
    object-fit: cover;
  }
`;

const Slider = ({ arrowColor, children }) => (
  <Container arrowColor={arrowColor}>
    <SlickSlider
      {...{
        infinite: true,
        autoplay: false,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
        speed: 800,
        dots: false,

        variableWidth: true,
        adaptiveHeight: true,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              centerMode: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
