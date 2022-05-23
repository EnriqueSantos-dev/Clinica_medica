import styled from 'styled-components';

type PropButton = {
  active: boolean;
};
export const Container = styled.button<PropButton>`
  width: 1.25rem;
  height: 1.25rem;
  background: ${props => (props.active ? '#3dbfab' : '#4b1a8a')};
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  transition: 0.3s ease;
`;
