import styled from 'styled-components';
import Bg from './assets/bg.png';

export const Container = styled.div`
  width: 100%;
  min-height: 700px;
  background-image: url(${Bg});
  background-position: bottom;
  background-size: cover;
  padding-top: 2.25rem;
  padding-bottom: 12.5rem;
  position: relative;
`;

export const Center = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  @media (max-width: 1600px) {
    max-width: 1200px;
  }
`;
export const Presentation = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 1rem 0 1rem;
    gap: 1.5rem;
  }
`;
export const PresentationLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  font-family: 'Roboto', sans-serif;
  flex: 1;

  h3 {
    line-height: 5.25rem;
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 300;
    color: #5f3595;

    @media (max-width: 900px) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
  }
  h4 {
    color: #333333;
    font-size: 2.25rem;
    line-height: 2.65rem;
    font-weight: 300;

    @media (max-width: 900px) {
      font-size: 1.25rem;
    }
  }
`;

export const PresentationRigth = styled.div`
  padding-right: 4.5rem;
  img {
    max-width: 490px;
    width: 100%;
    min-width: 350px;
  }
  @media (max-width: 900px) {
    text-align: center;
    padding: 0;
  }
`;

export const ContainerInfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  background-color: #5f3595;
  border-radius: 1rem;
  padding: 7.5rem 3.25rem;
  position: relative;
  top: -12.8rem;
  width: 100%;

  @media (max-width: 900px) {
    border-radius: 0;
  }
`;

export const SwitchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.13rem;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 2.2rem;
    color: #fff;
  }
  div {
    display: flex;
    gap: 0.65rem;
    align-items: center;
    justify-content: center;
  }
`;

export const FlexGridArea = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #6e43a4;
  border-radius: 0px 0px 20px 20px;
  width: 100%;

  div:first-child {
    display: flex;
    margin: 1px;
  }
`;

export const Grid = styled.div`
  padding: 2rem 2.5rem;
  display: grid;
  grid-gap: 3.3rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 990px) {
    padding: 2rem 1.5rem;
    grid-gap: 2.5rem;
  }
`;
export const Conectar = styled.section`
  width: 100%;
  display: flex;
`;
export const ConectarLeftSide = styled.div`
  flex: 1;
  height: 800px;
  text-align: center;
  img {
    max-width: 100%;
  }
`;
export const ConectarRigthSide = styled.div`
  flex: 1;
  height: 800px;
  text-align: center;
  position: relative;

  img {
    max-width: 100%;
  }
  h2 {
    top: 50%;
    transform: translateY(50%);
    position: absolute;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 5.25rem;
    color: #ffffff;
    z-index: 1;
  }
`;
