import * as C from './Form.style';
import React, { ChangeEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import sendIcon from '../../assets/sendIcon.svg';
import formSubmitIcon from '../../assets/formSubmit.svg';

export function FormContact() {
  const [inputName, setValueInputName] = useState('');
  const [inputEmail, setValueEmail] = useState('');
  const [inputNumber, setValueNumber] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmit(true);
  }

  return (
    <C.Container>
      <div>
        <h3>Entramos em contato com você!</h3>
      </div>
      <C.ContainerForm>
        <form method='post' onSubmit={e => handleSubmit(e)}>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValueInputName(e.target.value)
            }
          />
          <input
            type='text'
            name='email'
            placeholder='E-mail'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValueEmail(e.target.value);
            }}
          />
          <input type='tel' name='tele' />
          <button>
            <img src={formSubmit ? formSubmitIcon : sendIcon} alt='' />
          </button>
        </form>
      </C.ContainerForm>
    </C.Container>
  );
}
