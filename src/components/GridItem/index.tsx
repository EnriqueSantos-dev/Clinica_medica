import { GridItemType } from '../../types/GridItemType';
import * as C from './GridItem.style';

export function GridItem({ id, description }: GridItemType) {
  return (
    <C.Container>
      <span>{id + 1}</span>
      <C.ImgBox>
        <img
          src={description.iconDescri}
          alt=''
          width={description.width ? description.width : 60}
          height={description.height != null ? description.height : 'auto'}
        />
      </C.ImgBox>
      <p>{description.text}</p>
    </C.Container>
  );
}
