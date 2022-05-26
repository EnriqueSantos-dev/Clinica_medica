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
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    outline: 0;
    flex: 1;

    @media (max-width: 600) {
      background-color: #5f3595;
    }
  }
  input[type='text']::placeholder {
    color: #fff;
  }
  .input-number {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    input {
      width: 100%;
      color: #fff;
      transition: all 0.1s ease;
    }
    input::placeholder {
      color: #fff;
    }
  }

  .input-number.error input {
    border-color: #ff8181;
    color: #ff8181;
  }
  .input-number.error input::placeholder {
    color: #ff8181;
  }
  .input-number.error span {
    position: absolute;
    bottom: -2.25rem;
    color: #ff8181;
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (max-width: 1600px) {
      font-size: 0.8rem;
    }
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
