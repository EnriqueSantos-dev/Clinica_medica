import React, { ChangeEvent, useState } from 'react';

import * as C from './Form.style';
import sendIcon from '../../assets/sendIcon.svg';
import formSubmitIcon from '../../assets/formSubmit.svg';
import { numberValidate } from '../../utils/RegexValidate';

export function FormContact() {
  const [inputName, setValueInputName] = useState('');
  const [inputEmail, setValueEmail] = useState('');
  const [inputNumber, setValueNumber] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);
  const [notValide, setNotValide] = useState(true);

  function handleSubmit(event: any) {
    event.preventDefault();
    setFormSubmit(true);
    setNotValide(!numberValidate.test(inputNumber));

    // if (!notValide) {
    //   event.target.submit();
    // }
  }

  function changeInputNumber(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value == '') {
      setFormSubmit(false);
      setNotValide(true);
    }
    setValueNumber(e.target.value);
  }

  return (
    <C.Container>
      <div>
        <h3>Entramos em contato com você!</h3>
      </div>
      <C.ContainerForm>
        <form method='post' onSubmit={event => handleSubmit(event)}>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            value={inputName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValueInputName(e.target.value)
            }
          />
          <input
            type='text'
            name='email'
            placeholder='E-mail'
            value={inputEmail}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setValueEmail(e.target.value);
            }}
          />
          <div
            className={
              formSubmit && notValide ? 'input-number error' : 'input-number'
            }>
            <input
              type='tel'
              name='tele'
              value={inputNumber}
              placeholder='Seu Whatsapp'
              autoComplete='no'
              onChange={changeInputNumber}
            />
            {formSubmit && notValide && (
              <span>Insira o número neste formato: (DDD) + 9 987345698</span>
            )}
          </div>
          <button>
            <img src={formSubmit ? formSubmitIcon : sendIcon} alt='' />
            <span>Eu quero!</span>
          </button>
        </form>
      </C.ContainerForm>
    </C.Container>
  );
}
