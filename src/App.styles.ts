import styled from 'styled-components';
import Bg from './assets/bg.png';
import conectarBg from './assets/conectaBg.png';

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
  height: auto;
  text-align: center;
  img {
    max-width: 100%;
  }
`;
export const ConectarRigthSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${conectarBg});
  background-position: center;
  background-size: cover;

  h2 {
    position: absolute;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 5.25rem;
    color: #ffffff;

    @media (max-width: 1600px) {
      font-size: 3.3rem;
      line-height: 4.5rem;
    }
  }
`;
export const ContactArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding-top: 120px;
  padding-bottom: 10rem;
  background-color: #3e1c69;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 2.6rem;

  .icons-contact-area {
    display: flex;
    align-items: flex-end;
    gap: 1.8rem;
    justify-content: center;
  }
  .content-contact-text {
    color: #fff;
    text-align: center;
    max-width: 1108px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 2.63rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 2.63rem;
    position: absolute;

    bottom: -2rem;
    text-decoration: none;
    cursor: pointer;
    padding: 1rem 3rem 1rem 1.88rem;
    background-color: #27ae60;
    border-radius: 3.13rem;
    color: #fff;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 164px;
  padding-bottom: 117px;

  .flex-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 833px;
    gap: 2rem;
  }
  .content-footer-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.25rem;

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 300;
    font-size: 2.25rem;
    line-height: 3rem;
    color: #7b46be;

    .flex-icons-footer {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      .icons-footer {
        display: flex;
        align-items: center;
        gap: 0.65rem;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        color: #7b46be;
      }
    }
  }
`;
