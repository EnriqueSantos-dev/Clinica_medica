import React from 'react';
import styled from 'styled-components';

type PropType = {
  state: boolean;
};
export const Container = styled.div<PropType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 111px 46px 94px 31px;
  gap: 2rem;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease;

  background-color: ${props => (props.state ? '#7B46BE' : '#5F3595')};

  &:after {
    content: '';
    display: ${props => (props.state ? 'block' : 'none')};
    border-right: solid 25px transparent;
    border-left: solid 25px transparent;
    border-top: solid 25px transparent;
    border-bottom: solid 2.5rem #3dbfab;
    position: absolute;
    height: 0;
    width: 0;
    bottom: 0;
  }

  img {
    max-width: 60px;
  }
  p {
    font-family: 'Oxygen';
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    color: #fff;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding: 100px;
  }
`;
