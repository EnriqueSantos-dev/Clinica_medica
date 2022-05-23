import * as C from '.';
import { useState } from 'react';

export default function Item({ text, imgSrc, imgSrcAlt, addClick, isState }) {
  return (
    <C.Container onClick={addClick} state={isState}>
      <img src={isState ? imgSrcAlt : imgSrc} alt='imagem' />
      <p>{text}</p>
    </C.Container>
  );
}
