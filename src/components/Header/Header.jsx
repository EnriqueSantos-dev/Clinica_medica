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
        <a href='https://web.whatsapp.com/' target='_blank'>
          71 99765222
        </a>
      </C.Contact>
    </C.Container>
  );
}
