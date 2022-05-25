import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1444px;
  width: 100%;
  margin: 0 auto 6.8rem auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Dosis', sans-serif;
  font-weight: 300;
  font-size: 2.25rem;
  color: #7b46be;

  @media (max-width: 1600px) {
    max-width: 1200px;
    padding: 0 1rem 0 1rem;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    margin: 0 auto 3rem auto;
  }
`;

export const Menu = styled.div`
  display: none;

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 1.5rem;
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    a {
      display: none;
    }
    img {
      width: 2.5rem;
    }
  }
`;
