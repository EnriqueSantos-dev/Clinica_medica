import * as C from './Header.style';
import logo from '../../assets/Logo.svg';
import contactFig from '../../assets/whatsapp.svg';
import hamburguer from '../../assets/hamburguer.svg';

export function Header() {
  return (
    <C.Container>
      <C.Menu>
        <button>
          <img src={hamburguer} alt='menu' />
        </button>
      </C.Menu>
      <C.Logo>
        <img src={logo} alt='logo' />
        <p>Sistema de Teleatendimento</p>
      </C.Logo>
      <C.Contact>
        <img src={contactFig} alt='logo contact' />
        <span>71 99765222</span>
      </C.Contact>
    </C.Container>
  );
}
