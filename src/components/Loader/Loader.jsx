import { SpinnerWrap, Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <SpinnerWrap>
      <Spinner className="icon-spin" size="32" />
      <p>Загружаем...</p>
    </SpinnerWrap>
  );
};
