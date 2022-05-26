import styled from 'styled-components';

export const Container = styled.div`
  background-color: #5f3595;
  border-radius: 1rem;
  padding: 2rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 11rem;

  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
    margin-top: -12rem;
  }

  h3 {
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.9rem;
    color: #fff;
  }

  @media (max-width: 900px) {
    padding: 2rem 1.25rem;
    background-color: #fff;

    h3 {
      color: #5f3595;
      font-size: 1.25rem;
      line-height: 2rem;
      text-align: center;
      padding: 0 15rem;
    }
  }
`;

export const ContainerForm = styled.div`
  form {
    display: flex;
    gap: 1rem;
    margin-top: 1.4rem;
  }
  @media (max-width: 900px) {
    form {
      flex-direction: column;
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

    @media (max-width: 900px) {
      background: #5f3595;
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

    @media (max-width: 900px) {
      position: relative;
      bottom: -1px;
      font-size: 1rem;
    }
  }
  button {
    border-radius: 50%;
    background: #f3cd37;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border: 0;
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;

    color: #5f3595;

    span {
      display: none;
    }

    @media (max-width: 900px) {
      border-radius: 30px;
      background-color: #f3cd37;
      width: 100%;

      img {
        display: none;
      }
      span {
        display: inline-block;
      }
    }
  }
`;
