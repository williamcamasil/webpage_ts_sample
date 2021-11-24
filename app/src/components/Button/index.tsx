import { ButtonStyled } from './styles';

type Props = {
  textButton: string;
  click: Function;
};

const Button = ({ textButton, click }: Props) => {
  return (
    <div>
      <ButtonStyled onClick={click()}>
        <p>{textButton}</p>
      </ButtonStyled>
    </div>
  );
};

export default Button;
