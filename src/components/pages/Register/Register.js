import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Registers,Img } from './Register.styled';

export default function Register() {
  return (
    <Registers>
      <title>Registration</title>
      <Img src="https://img.logoipsum.com/245.svg" />
      <RegisterForm />
    </Registers>
  );
}
