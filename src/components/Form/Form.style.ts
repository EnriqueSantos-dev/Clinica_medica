import styled from 'styled-components';

export const Container = styled.div`
  background-color: #5f3595;
  border-radius: 1rem;
  padding: 2rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 11rem;

  h3 {
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.9rem;
    color: #fff;
  }
`;

export const ContainerForm = styled.div`
  form {
    display: flex;
    gap: 1rem;
    margin-top: 1.4rem;
  }
  @media (max-width: 600) {
    form {
      flex-direction: column;
      background-color: #fff;
    }
  }

  input {
    padding: 1rem 1.6rem;
    border: 1px solid #ffffff;
    border-radius: 50px;
    background: none;
    font-size: 1rem;
    font-family: 'Oxygen';
    font-style: normal;
    line-height: 1.5;
    color: #fff;
    font-weight: 400;
    outline: 0;
    flex: 1;

    @media (max-width: 600) {
      background-color: #5f3595;
    }
  }
  input[type='text']::placeholder {
    color: #fff;
  }
  button {
    border-radius: 50%;
    background: #f3cd37;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border: 0;
  }
`;
