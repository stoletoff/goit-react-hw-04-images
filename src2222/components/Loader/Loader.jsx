import { SpinnerWrap, Spinner } from './Loader.styled';

export default function Loader() {
  return (
    <SpinnerWrap>
      <Spinner className="icon-spin" size="32" />
      <p>Загружаем...</p>
    </SpinnerWrap>
  );
}
