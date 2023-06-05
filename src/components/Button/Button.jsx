import { Btn } from './Button.styled';

export const Button = ({ onMoreLoad }) => {
  return (
    <Btn onClick={onMoreLoad} type="button">
      Load more
    </Btn>
  );
};
