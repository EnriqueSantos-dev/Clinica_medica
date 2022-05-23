import * as C from './button.style';

type PropsButton = {
  handleClickItem: () => void;
  active: boolean;
};
export function ButtonSwitch({ handleClickItem, active }: PropsButton) {
  return <C.Container onClick={handleClickItem} active={active} />;
}
