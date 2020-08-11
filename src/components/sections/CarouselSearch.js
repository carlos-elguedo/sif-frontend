import React from 'react';
import Carousel from 'emerald-ui/lib/Carousel';
import styled from 'styled-components';
/**
 *
 * @author Carlos Elguedo
 * @version 0.0.1
 */

const StyleCarouselSlide = styled(Carousel.Slide)`
  width: 30vw;
  .eui-panel-body {
    padding: 5px;
    font-style: italic;
    font-family: monospace;
  }
`;

const CarouselSearch = () => {
  return (
    <div>
      <Carousel /* innerMargin={20} */>
        <StyleCarouselSlide>
          Encuentra la persona indicada para lo que necesites hacer
        </StyleCarouselSlide>
        <StyleCarouselSlide>
          En SIF encontraras a trabajadores independientes
        </StyleCarouselSlide>
        <StyleCarouselSlide>
          Prueba buscando por categorias o trabajos
        </StyleCarouselSlide>
      </Carousel>
    </div>
  );
};

export default CarouselSearch;
