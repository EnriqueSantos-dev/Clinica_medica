import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 4.5rem 2.9rem 3.9rem 1.8rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  font-family: 'Roboto';
  font-style: normal;
  color: #5f3595;
  span {
    position: absolute;
    left: 1.8rem;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.5rem;
    top: 1.5rem;
    color: #5f3595;
  }
  p {
    margin-top: 1.1rem;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.25rem;
  }

  @media (max-width: 990px) {
    padding: 4.5rem 0.8rem 3.9rem 0.8rem;

    span {
      left: 0.8rem;
    }

    p {
      margin-top: 2rem;
    }
  }
`;

export const ImgBox = styled.div`
  background-color: #3dbfab;
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  justify-content: center;

  img {
    object-fit: fill;
  }
`;
