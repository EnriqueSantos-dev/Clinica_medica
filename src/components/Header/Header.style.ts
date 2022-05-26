import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1444px;
  width: 100%;
  margin: 0 auto 6.8rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Dosis', sans-serif;
  font-weight: 300;
  font-size: 2.25rem;
  color: #7b46be;

  @media (max-width: 1600px) {
    max-width: 1200px;
  }
  @media (max-width: 900px) {
    align-items: flex-start;
    margin: 0 auto 3rem auto;
    padding: 0 1.25rem;
  }
`;

export const Menu = styled.div`
  display: none;

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: flex-start;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex: 1;

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

  @media (max-width: 900px) {
    justify-content: flex-end;

    a {
      display: none;
    }
    img {
      width: 2.5rem;
    }
  }
`;
