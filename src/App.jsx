import { useEffect, useState } from 'react';

import * as C from './App.styles';
import man from './assets/man.png';
import ConectarImgMan from './assets/homenconectar.png';
import conectarBg from './assets/conectaBg.png';

import { listItems } from './helpers/Items';

import { Header } from './components/Header/Header';
import Item from './components/Item/Item';
import { ButtonSwitch } from './components/ButtonSwitch';
import { GridItem } from './components/GridItem';
import { FormContact } from './components/Form';

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
          <img src={conectarBg} alt='' />
          <h2>Conectar pessoas é a nossa missão.</h2>
        </C.ConectarRigthSide>
      </C.Conectar>
    </div>
  );
}

export default App;
