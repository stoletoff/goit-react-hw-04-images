import imgEror from 'components/img/sticker.webp';
import {ImgWrong} from './ImgErorView.styled'

export const ImgErorView = ({ children }) => {
  return (
    <ImgWrong role="alert">
      <img src={imgEror} width="240" alt="sadcat" />
      <p>{children}</p>
    </ImgWrong>
  );

}