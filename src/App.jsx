import { useEffect, useState } from 'react';

import * as C from './App.styles';
import man from './assets/man.png';
import ConectarImgMan from './assets/homenconectar.png';

import { listItems } from './helpers/Items';

import { Header } from './components/Header/Header';
import Item from './components/Item/Item';
import { ButtonSwitch } from './components/ButtonSwitch';
import { GridItem } from './components/GridItem';
import { FormContact } from './components/Form';

import tablet from './assets/tablet.svg';
import tv from './assets/tv.svg';
import celularP from './assets/celularpequeno.svg';
import celularPVar from './assets/celularPvar.svg';
import whatsapp from './assets/whatsapp.svg';
import whatsappv2 from './assets/whatsappv2.svg';

import logo from './assets/Logo.svg';

function App() {
  const [shownItem, setShownItem] = useState(listItems);
  const [buttonList, setChangeButtonList] = useState([]);
  const [itemCurrentShow, setItemCurrentShow] = useState(0);

  useEffect(() => {
    let tempButtonList = [];
    shownItem.map((item, index) => {
      if (index == 0) {
        item.isState = true;
      } else {
        item.isState = false;
      }
      tempButtonList.push({ id: item.id, isActive: item.isState });
    });
    setChangeButtonList(tempButtonList);
    setItemCurrentShow(0);
  }, []);

  useEffect(() => {
    buttonList.map((item, index) => {
      if (index === 0) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  }, []);

  function handleClickItem(index) {
    let tempShowItem = [...shownItem];
    let tempButtonList = [...buttonList];
    for (const key in tempShowItem) {
      tempShowItem[key].isState = false;
      tempButtonList[key].isActive = false;
      if (tempShowItem[key].id === index && tempButtonList[key].id == key) {
        tempShowItem[key].isState = true;
        tempButtonList[key].isActive = true;
      }
    }
    setShownItem(tempShowItem);
    setChangeButtonList(tempButtonList);
    setItemCurrentShow(index);
    console.log(itemCurrentShow);
  }

  function handleButtonState(index) {
    let tempShowItem = [...shownItem];
    let tempButtonList = [...buttonList];
    for (const key in tempButtonList) {
      tempShowItem[key].isState = false;
      tempButtonList[key].isActive = false;
      if (tempButtonList[key].id == key && tempShowItem[key].id === index) {
        tempShowItem[key].isState = true;
        tempButtonList[key].isActive = true;
      }
    }
    setShownItem(tempShowItem);
    setChangeButtonList(tempButtonList);
    setItemCurrentShow(index);
  }
  return (
    <div>
      <C.Container>
        <Header />
        <C.Center>
          <C.Presentation>
            <C.PresentationLeft>
              <h3>Conecte-se com segurança com seu paciente</h3>
              <h4>Atendimento é salvar vidas!</h4>
            </C.PresentationLeft>
            <C.PresentationRigth>
              <img src={man} alt='homem com celular' />
            </C.PresentationRigth>
          </C.Presentation>
        </C.Center>
      </C.Container>
      <C.Center>
        <C.ContainerInfoGrid>
          <C.SwitchItem>
            <h2>Um sistema que cresce com você.</h2>
            <div>
              {buttonList.map((item, index) => (
                <ButtonSwitch
                  key={index}
                  handleClickItem={() => handleButtonState(index)}
                  active={item.isActive}
                />
              ))}
            </div>
          </C.SwitchItem>
          <C.FlexGridArea>
            <div>
              {shownItem.map((item, index) => (
                <Item
                  key={index}
                  text={item.title}
                  imgSrc={item.icon}
                  imgSrcAlt={item.iconFocus}
                  addClick={() => handleClickItem(index)}
                  isState={item.isState}
                />
              ))}
            </div>
            <C.Grid>
              {shownItem[itemCurrentShow].description.map((item, index) => (
                <GridItem key={index} id={index} description={item} />
              ))}
            </C.Grid>
          </C.FlexGridArea>
        </C.ContainerInfoGrid>
      </C.Center>
      <C.Center>
        <FormContact />
      </C.Center>
      <C.Conectar>
        <C.ConectarLeftSide>
          <img src={ConectarImgMan} alt='' />
        </C.ConectarLeftSide>
        <C.ConectarRigthSide>
          <h2>Conectar pessoas é a nossa missão.</h2>
        </C.ConectarRigthSide>
      </C.Conectar>
      <C.ContactArea>
        <div className='icons-contact-area'>
          <img src={tablet} alt='' />
          <img src={tv} alt='' />
          <img src={celularP} alt='' />
        </div>
        <div className='content-contact-text'>
          <p>
            Contato rápido com necessidade de baixo conhecimento do paciente
            para conexão, sem instalações de aplicativo, sem cadastros. Solicite
            agora!
          </p>
        </div>
        <a href='https://web.whatsapp.com/' target='_blank'>
          <img src={whatsappv2} alt='' width={52} height={52} />
          <span>71 99765222</span>
        </a>
      </C.ContactArea>
      <C.Footer>
        <div className='flex-footer'>
          <img src={logo} alt='' />
          <div className='content-footer-text'>
            <p>Sistema de Teleatendimento | Criando conecções com vidas</p>
            <div className='flex-icons-footer'>
              <div className='icons-footer'>
                <img src={celularPVar} alt='' height={29} />
                <img src={whatsapp} alt='' />
              </div>
              <a href='https://web.whatsapp.com/' target='_blank'>
                71 99765222
              </a>
            </div>
          </div>
        </div>
      </C.Footer>
    </div>
  );
}

export default App;
